import { withSSRContext } from "aws-amplify";
import { NextApiRequest, NextApiResponse } from "next";
import { RequestHandler } from "next-connect/dist/types/node";
import { Nextable } from "next-connect/dist/types/types";
import { UnauthorizedError } from "definitions/errors";

type HandleMiddleware = Nextable<
  RequestHandler<NextApiRequest, NextApiResponse>
>;

export const auth: HandleMiddleware = async (req, _res, next) => {
  const { Auth } = withSSRContext({ req });
  try {
    // 認証済みでない場合はthrowされる
    await Auth.currentAuthenticatedUser();
  } catch (e) {
    throw new UnauthorizedError();
  }
  await next();
};
