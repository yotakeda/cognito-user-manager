export class HTTPError extends Error {
  constructor(public response: Response) {
    super(`HTTP Error: ${response.status} ${response.statusText}`);
  }
}

/**
 * simple fetch API wrapper
 * reject when status code is not in the range 200-299
 */
export const fetcher = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => {
  const res = await fetch(input, init).then((res) =>
    !res.ok ? Promise.reject(new HTTPError(res)) : res,
  );
  return { status: res.status, data: await res.json() };
};
