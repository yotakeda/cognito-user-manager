/* eslint-disable no-console*/
import {
  AdminDeleteUserAttributesCommand,
  AdminDeleteUserCommand,
  AdminGetUserCommand,
  AdminGetUserResponse,
  AdminUpdateUserAttributesCommand,
  AdminUpdateUserAttributesCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import { Amplify } from "aws-amplify";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import {
  commonHandlerFactory,
  createCommonErrorResponse,
  createCommonGetResponse,
} from "lib/api/handlers/common-handler";
import { auth } from "lib/api/middlewares/auth";
import { HttpResponse } from "lib/api/type";
import { cognitoClient } from "pages/api/cognito-client";
import config from "src/aws-exports";
import { addEmailVerified } from "../helper";

// Amplify SSR configuration needs to be done within each API route
Amplify.configure({ ...config, ssr: true });

const router = createRouter<
  NextApiRequest,
  NextApiResponse<HttpResponse<{}>>
>();

router
  .use(auth)
  .get(async (req, res) => {
    const { username } = req.query;
    const userPoolId = process.env.USER_POOL_ID;
    if (!userPoolId) {
      res.status(400).json(
        createCommonErrorResponse(400, {
          message: "USER_POOL_ID is not specified",
        }),
      );
      return;
    }

    const command = new AdminGetUserCommand({
      Username: String(username),
      UserPoolId: userPoolId,
    });
    try {
      const results = await cognitoClient.send(command);
      res.status(200).json(createCommonGetResponse(results));
    } catch (e: any) {
      console.log(e);
      res.status(e?.$metadata?.httpStatusCode).json(
        createCommonErrorResponse(e?.$metadata?.httpStatusCode, {
          message: e?.name,
        }),
      );
    }
  })
  .put(async (req, res) => {
    console.log(req.body);
    // TODO validation
    const params = JSON.parse(req.body) as Omit<
      AdminUpdateUserAttributesCommandInput,
      "UserPoolId" | "Username"
    >;
    const { username } = req.query;
    const userPoolId = process.env.USER_POOL_ID;
    if (!userPoolId) {
      res.status(400).json(
        createCommonErrorResponse(400, {
          message: "USER_POOL_ID is not specified",
        }),
      );
      return;
    }
    const getUserCommand = new AdminGetUserCommand({
      Username: String(username),
      UserPoolId: userPoolId,
    });
    let userInfo: AdminGetUserResponse;
    try {
      userInfo = await cognitoClient.send(getUserCommand);
      console.log(userInfo);
    } catch (e: any) {
      // TODO error handling
      console.log(e);
      res.status(e?.$metadata?.httpStatusCode).json(
        createCommonErrorResponse(e?.$metadata?.httpStatusCode, {
          message: e?.name,
        }),
      );
      return;
    }

    // sub cannot update
    const targetAttributes = userInfo.UserAttributes?.filter(
      (attribute) => attribute.Name !== "sub",
    );

    const deleteAttributes = targetAttributes
      ?.filter(
        (attribute) =>
          !params?.UserAttributes?.some(
            (input) => input.Name === attribute.Name,
          ) && attribute.Name !== "email_verified",
      )
      .map((attribute) => attribute.Name)
      .filter(
        (item): item is Exclude<typeof item, undefined> => item !== undefined,
      );

    if (deleteAttributes?.length) {
      const deleteCommand = new AdminDeleteUserAttributesCommand({
        UserAttributeNames: deleteAttributes,
        Username: String(username),
        UserPoolId: userPoolId,
      });
      try {
        const deleteInfo = await cognitoClient.send(deleteCommand);
        console.log(deleteInfo);
      } catch (e: any) {
        console.log(e);
        res.status(e?.$metadata?.httpStatusCode).json(
          createCommonErrorResponse(e?.$metadata?.httpStatusCode, {
            message: e?.name,
          }),
        );
        return;
      }
    }

    const updateAttributesCommand = new AdminUpdateUserAttributesCommand({
      UserAttributes: addEmailVerified(params?.UserAttributes),
      Username: String(username),
      UserPoolId: userPoolId,
    });
    try {
      const results = await cognitoClient.send(updateAttributesCommand);
      console.log(results);
      res.status(200).json(createCommonGetResponse(results));
    } catch (e: any) {
      console.log(e);
      res.status(e?.$metadata?.httpStatusCode).json(
        createCommonErrorResponse(e?.$metadata?.httpStatusCode, {
          message: e?.name,
        }),
      );
    }
  })
  .delete(async (req, res) => {
    const { username } = req.query;
    const userPoolId = process.env.USER_POOL_ID;
    if (!userPoolId) {
      res.status(400).json(
        createCommonErrorResponse(400, {
          message: "systemType is invalid",
        }),
      );
      return;
    }
    const command = new AdminDeleteUserCommand({
      Username: String(username),
      UserPoolId: userPoolId,
    });
    try {
      const results = await cognitoClient.send(command);
      res.status(200).json(createCommonGetResponse(results));
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
