export const errors = {
  VALIDATION: { message: "Validation Error", status: 400 },
  INVALID_PARAMS: { message: "Invalid Params Error", status: 400 },
  UNAUTHORIZED: { message: "Unauthorized Error", status: 401 },
  FORBIDDEN: { message: "Forbidden Error", status: 403 },
  NOT_FOUND: { message: "Not Found Error", status: 404 },
  METHOD_NOT_ALLOWED: { message: "Method Not Allowed Error", status: 405 },
  INTERNAL_SERVER: { message: "Internal Server Error", status: 500 },
  NOT_IMPLEMENTED: { message: "Not Implemented", status: 501 },
};

type ErrorType = keyof typeof errors;

export class HttpError extends Error {
  public status: number;
  public message: string;

  constructor(type: ErrorType) {
    super(type);
    this.status = errors[type].status;
    this.message = errors[type].message;
  }
}

export class UnauthorizedError extends HttpError {
  constructor() {
    super("UNAUTHORIZED");
  }
}

export class NotFoundError extends HttpError {
  constructor() {
    super("NOT_FOUND");
  }
}

// 必要に応じて、他のクラスをここに追加してください。
