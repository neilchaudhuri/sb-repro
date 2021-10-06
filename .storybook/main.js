const svgPlugin = require("vite-plugin-react-svg")
const path = require("path")

module.exports = {
	stories: ["../**/__stories__/*.stories.@(ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				backgrounds: false,
				controls: false,
			},
		},
		"@storybook/addon-a11y",
	],
	core: {
		builder: "storybook-builder-vite",
	},
	viteFinal: async config => {
		return {
			...config,
			plugins: [
				svgPlugin({
					defaultExport: "component",
					expandProps: "end",
				}),
				...config.plugins,
			],
			optimizeDeps: {
				...config.optimizeDeps,
				entries: [`${path.relative(config.root, path.resolve(__dirname, "../src"))}/**/__stories__/*.stories.@(ts|tsx)`],
			},
		}
	},
}
