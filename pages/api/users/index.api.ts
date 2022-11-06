/* eslint-disable no-console*/
import {
  AdminCreateUserCommand,
  AdminCreateUserCommandInput,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { Amplify } from "aws-amplify";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import {
  commonHandlerFactory,
  createCommonErrorResponse,
  createCommonGetResponse,
  createCommonPostResponse,
} from "lib/api/handlers/common-handler";
import { auth } from "lib/api/middlewares/auth";
import { HttpResponse } from "lib/api/type";
import { cognitoClient } from "pages/api/cognito-client";
import config from "src/aws-exports";
import { addEmailVerified } from "./helper";

// Amplify SSR configuration needs to be done within each API route
Amplify.configure({ ...config, ssr: true });

const router = createRouter<
  NextApiRequest,
  NextApiResponse<HttpResponse<{}>>
>();

router
  .use(auth)
  .get(async (_req, res) => {
    const UserPoolId = process.env.USER_POOL_ID;
    if (!UserPoolId) {
      res.status(400).json(
        createCommonErrorResponse(400, {
          message: "USER_POOL_ID is not specified",
        }),
      );
      return;
    }

    const Users = [];
    let PaginationToken: string | undefined = undefined;

    // ListUsers of the cognito API is designed to return up to 60 items at a time.
    // Fetching all items using PaginationToken, but the upper limit is 20*60=1200
    // to avoid performance problems when the number of accounts increases.
    const MAX_REQUEST = 20;
    for (let i = 0; i < MAX_REQUEST; i++) {
      const command: ListUsersCommand = new ListUsersCommand({
        UserPoolId,
        PaginationToken,
      });
      const results = await cognitoClient.send(command);
      if (results.Users) {
        Users.push(...results.Users);
      }
      const nextPaginationToken = results.PaginationToken;
      if (nextPaginationToken) {
        PaginationToken = nextPaginationToken;
      } else {
        break;
      }
    }
    res.status(200).json(
      createCommonGetResponse({
        Users,
      }),
    );
  })
  .post(async (req, res) => {
    const params = JSON.parse(req.body) as Omit<
      AdminCreateUserCommandInput,
      "UserPoolId"
    >;
    const userPoolId = process.env.USER_POOL_ID;
    if (!userPoolId) {
      res.status(400).json(
        createCommonErrorResponse(400, {
          message: "USER_POOL_ID is not specified",
        }),
      );
      return;
    }
    const command = new AdminCreateUserCommand({
      ...params,
      UserAttributes: addEmailVerified(params.UserAttributes),
      UserPoolId: userPoolId,
    });
    try {
      const results = await cognitoClient.send(command);
      console.log(results);
      res.status(201).json(createCommonPostResponse(results));
    } catch (e: any) {
      console.log(e);
      res.status(e?.$metadata?.httpStatusCode).json(
        createCommonErrorResponse(e?.$metadata?.httpStatusCode, {
          message: e?.name,
        }),
      );
    }
  });

export default router.handler(commonHandlerFactory());
