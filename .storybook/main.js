module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-create-react-app",
		{
			name: "@storybook/addon/docs",
			options: {
				configureJSX: true,
			},
		},
		"@storybook/addon-actions",
		"@storybook/addon-knobs",
	],
	framework: "@storybook/react",
	core: {
		builder: "webpack5",
	},
};