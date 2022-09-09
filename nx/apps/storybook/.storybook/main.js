const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Sass = require('sass');

const scssLoader = {
    test: /\.scss$/,
    exclude: /\/libs\/components\/src\/lib/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
};

const tsconfigPathsPlugin = new TsconfigPathsPlugin({
    configFile: './apps/storybook/tsconfig.json',
    extensions: ['.ts', '.tsx', '.js'],
});

const litCssLoaderRule = {
    test: /\.scss$/,
    loader: 'lit-css-loader',
    include: /\/libs\/components\/src\/lib/,
    options: {
        specifier: 'lit',
        transform: (data, { filePath }) => {
            // console.log('lit-css-loader - before', filePath, data);
            // renderSync is deprecated en zou compile moeten worden, maar dat geeft een fout
            const result = Sass.renderSync({
                data,
                file: filePath,
                includePaths: ['./node_modules'],
            }).css.toString();
            // console.log('lit-css-loader - after', result);
            return result;
        },
    },
};

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../../../libs/components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/elements/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: ['../../../'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/web-components',
    webpackFinal: async (config) => {
        config.module.rules = [...config.module.rules, scssLoader, litCssLoaderRule];
        config.resolve.plugins = [tsconfigPathsPlugin];
        // console.log('webpackFinal', config);
        return config;
    },
};
