import { NextApiRequest, NextApiResponse } from "next";
import { NodeRouter } from "next-connect/dist/types/node";
import { errors, HttpError } from "../../../definitions/errors";
import { Err, ErrResponse, HttpResponse } from "../type";

type CommonHandler<T> = Parameters<
  NodeRouter<NextApiRequest, NextApiResponse<T>>["handler"]
>[0];

export const commonHandlerFactory = <T extends {}>(): CommonHandler<
  HttpResponse<T>
> => {
  return {
    onError(err, _req, res) {
      if (err instanceof HttpError) {
        res.status(err.status).json({
          data: null,
          error: {
            message: err.message,
          },
          status: err.status,
        });
      } else {
        res.status(500).json({
          data: null,
          error: {
            message: JSON.stringify(err), // errors.INTERNAL_SERVER.message,
          },
          status: errors.INTERNAL_SERVER.status,
        });
      }
    },
    onNoMatch(_req, res) {
      res.status(404).json({
        data: null,
        error: {
          message: errors.NOT_FOUND.message,
        },
        status: errors.NOT_FOUND.status,
      });
    },
  };
};

export const createCommonGetResponse = <T extends {}>(
  data: T,
): HttpResponse<T> => {
  return {
    data,
    status: 200,
    error: null,
  };
};

export const createCommonPostResponse = <T extends {}>(
  data: T,
): HttpResponse<T> => {
  return {
    data,
    status: 201,
    error: null,
  };
};

export const createCommonErrorResponse = (
  status: number,
  errorInfo: Err,
): ErrResponse => {
  return {
    data: null,
    error: {
      message: errorInfo.message,
      errors: errorInfo.errors,
    },
    status,
  };
};
