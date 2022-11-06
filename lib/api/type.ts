export type HttpStatus = number;

export type Err = {
  message: string;
  // codeをenum化したい
  errors?: { code: string; name: string; message: string }[];
};

export type ErrResponse = {
  data: null;
  error: Err;
  status: HttpStatus;
};

export type DataResponse<T> = {
  data: T;
  error: null;
  status: HttpStatus;
};

export type HttpResponse<T> = DataResponse<T> | ErrResponse;
