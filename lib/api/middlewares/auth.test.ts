jest.mock("uuid", () => "uuid");
jest.mock("aws-amplify", () => {
  return {
    withSSRContext: jest.fn(() => {
      return {
        Auth: {
          currentAuthenticatedUser: jest.fn(() => {
            return Promise.resolve();
          }),
        },
      };
    }),
  };
});

import { UnauthorizedError } from "definitions/errors";
import { auth } from "./auth";

describe("auth.test.ts", () => {
  describe("auth: 正常系", () => {
    test("should return next()", async () => {
      const req = {} as any;
      const res = {} as any;
      const next = jest.fn();
      await auth(req, res, next);
      expect(next).toBeCalled();
    });
  });
  describe("auth: 異常系ログインしていないケース", () => {
    jest.mock("aws-amplify", () => {
      return {
        withSSRContext: jest.fn(() => {
          return {
            Auth: {
              currentAuthenticatedUser: () => {
                throw new Error();
              },
            },
          };
        }),
      };
    });

    test("should throw UnauthorizedError", async () => {
      const req = {} as any;
      const res = {} as any;
      const next = jest.fn();
      auth(req, res, next).catch((err: any) => {
        expect(err instanceof UnauthorizedError).toBe(true);
      });
      expect(next).not.toBeCalled();
    });
  });
});
