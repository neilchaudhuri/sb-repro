module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.eslint.json"],
	},
	plugins: ["@typescript-eslint", "jest-dom", "testing-library"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/strict",
		"prettier",
		"plugin:jest-dom/recommended",
		"plugin:testing-library/react",
		"plugin:testing-library/dom",
	],
	rules: {
		"ban-ts-comment": 0,
		"no-unused-vars": 0,
		"react/no-children-prop": 0,
		"react/display-name": 0,
		"react/prop-types": 0,
		"no-undef": 0,
		"testing-library/prefer-screen-queries": 0,
		"testing-library/no-node-access": 0,
	},
}
