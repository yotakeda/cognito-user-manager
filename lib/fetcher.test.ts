import { fetcher, HTTPError } from "./fetcher";

// using msw
// see tests/mocks/handlers.ts
describe("fetcher tests", () => {
  test("status ok", async () => {
    const results = await fetcher("/tests/ok", {
      method: "POST",
    });
    expect(results).toMatchInlineSnapshot(`
		Object {
		  "data": Object {
		    "data": "ok",
		  },
		  "status": 200,
		}
	`);
  });
  test("reject when status 400", async () => {
    expect.assertions(1);
    return fetcher("/tests/badRequest", {
      method: "POST",
    }).catch((e) =>
      expect(e).toMatchInlineSnapshot(`[Error: HTTP Error: 400 Bad Request]`),
    );
  });
});
