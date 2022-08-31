const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Sass = require('sass');

const scssLoader = {
    test: /\.scss$/,
    exclude: /\/libs\/components\/src\/lib/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
};

const tsconfigPathsPlugin = new TsconfigPathsPlugin({
    configFile: './apps/storybook/tsconfig.json',
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
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

const tsRule = {
    test: /\.ts$/,
    use: 'ts-loader',
    // exclude: /node_modules/,
};

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../../../libs/components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/elements/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/web-components',
    webpackFinal: async (config) => {
        // config.module.rules = fixRulesForLit(config.module.rules);
        config.module.rules[0].use[0].options.assumptions = {
            setPublicClassFields: true,
            privateFieldsAsProperties: true,
        };
        config.module.rules[0].use[0].options.presets = [
            [
                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-env/lib/index.js',
                {
                    shippedProposals: true,
                    loose: false,
                },
            ],
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-typescript/lib/index.js',
        ];
        config.module.rules[0].use[0].options.plugins = [
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-shorthand-properties/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-block-scoping/lib/index.js',
            [
                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-decorators/lib/index.js',
                {
                    legacy: true,
                },
            ],
            [
                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
                {
                    loose: false,
                },
            ],
            [
                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-property-in-object/lib/index.js',
                {
                    loose: false,
                },
            ],
            [
                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-methods/lib/index.js',
                {
                    loose: false,
                },
            ],
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-export-default-from/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
            [
                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
                {
                    loose: false,
                    useBuiltIns: true,
                },
            ],
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-classes/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-arrow-functions/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-parameters/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-destructuring/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-spread/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-for-of/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-macros/dist/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-optional-chaining/lib/index.js',
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js',
            [
                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-polyfill-corejs3/lib/index.js',
                {
                    method: 'usage-global',
                    absoluteImports:
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/core-js/index.js',
                    version: '3.24.0',
                },
            ],
        ];
        // config.module.rules[0] = tsRule;
        config.module.rules = [...config.module.rules, scssLoader, litCssLoaderRule];
        config.resolve.plugins = [tsconfigPathsPlugin];
        console.log('>>>>>>>>>>>>');
        RegExp.prototype.toJSON = RegExp.prototype.toString;
        console.log('webpackFinal', JSON.stringify(config.module.rules[0], null, 4));
        console.log('<<<<<<<<<<<<');
        return config;
    },
};
