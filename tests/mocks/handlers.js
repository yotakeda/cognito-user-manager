import { rest } from "msw";

const forUnitTestsOnlyHandlers = [
	rest.post("tests/ok", (_req, res, ctx) => {
		return res(ctx.json({ data: "ok" }));
	}),
	rest.post("tests/badRequest", (_req, res, ctx) => {
		return res(ctx.status(400));
	}),
];

export const handlers = [...forUnitTestsOnlyHandlers];
