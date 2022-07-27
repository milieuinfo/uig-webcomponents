module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: ['../../../stories-examples/**/*.stories.mdx', '../../../stories-examples/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/web-components',
};

//// ORIGINEEL
// module.exports = {
//     stories: [
//         '../src/**/*.stories.mdx',
//         '../src/**/*.stories.@(js|jsx|ts|tsx)'
//     ],
//     addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//     framework: '@storybook/web-components',
// };
