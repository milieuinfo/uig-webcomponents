module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../../../resources/voorbeeld-stories/**/*.stories.mdx',
        '../../../resources/voorbeeld-stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/web-components',
};
