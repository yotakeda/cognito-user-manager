// Polyfill window.fetch
// たぶん最新のnodejs(v18やv17.5以上の新しいやつ)を入れればこのpolyfillは不要になるが、Amplifyがそのnodejsのバージョンに上げられるか怪しいのでひとまずPolyfillで我慢
// https://blog.logrocket.com/fetch-api-node-js/
import "whatwg-fetch";

// src/setupTests.js
import { server } from "./tests/mocks/server.js";
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
