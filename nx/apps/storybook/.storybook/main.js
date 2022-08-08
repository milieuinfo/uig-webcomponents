const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const scssLoader = {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
};

const tsconfigPathsPlugin = new TsconfigPathsPlugin({
    configFile: './apps/storybook/tsconfig.json',
    extensions: ['.ts', '.tsx', '.js'],
});

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../../../libs/elements/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/web-components',
    webpackFinal: async (config) => {
        config.module.rules = [...config.module.rules, scssLoader];
        config.resolve.plugins = [tsconfigPathsPlugin];
        // console.log('webpackFinal', config);
        return config;
    },
};
