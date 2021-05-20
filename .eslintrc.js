module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020
	},
	extends: [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	plugins: [],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-undef": 0,
		curly: "error",
		"prefer-const": "error",
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" }
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_"
			}
		],
		"@typescript-eslint/no-var-requires": "off"
	}
};
