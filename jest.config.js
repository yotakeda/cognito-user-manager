const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
	testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
	setupFilesAfterEnv: ["./jest.setup.js"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )

				module: {
					type: "es2021", // 出力するファイルをcommonjsとする
				},

				jsc: {
					parser: {
						syntax: "typescript", // ソースコードをtypescriptとしてパースする
						tsx: true, // jsx記法を許可する
					},

					transform: {
						react: {
							// 必須。省略すると "ReferenceError: React is not defined" が発生します
							runtime: "automatic",
						},
					},
				},
			},
		],
	},
};
module.exports = createJestConfig(customJestConfig);
