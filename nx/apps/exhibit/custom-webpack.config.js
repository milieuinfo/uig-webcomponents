const { merge } = require('webpack-merge');
const NodeSass = require('node-sass');

const litCssLoaderRule = {
    test: /vl-breadcrumb\.scss$/,
    loader: 'lit-css-loader',
    include: /\/libs\/components\/src\/lib/,
    options: {
        specifier: 'lit',
        transform: (data, { filePath }) => {
            // console.log('lit-css-loader - before', filePath, data);
            const result = NodeSass.renderSync({
                data,
                file: filePath,
                includePaths: ['../node_modules'],
            }).css.toString();
            // console.log('lit-css-loader - after', result);
            return result;
        },
    },
};

const litScssLoaderRule = {
    test: /vl-breadcrumb\.scss$/,
    use: [
        {
            loader: 'lit-scss-loader',
            options: {
                minify: false, // defaults to false
            },
        },
        'extract-loader',
        'css-loader',
        'sass-loader',
    ],
};

module.exports = (config, context) => {
    // const rules = config.module.rules;
    // const scssRule = rules.filter(rule => rule.test.includes('.scss'))
    config.module.rules[3].exclude = /\/libs\/components\/src\/lib/;
    config.module.rules = [...config.module.rules, litCssLoaderRule];
    // console.log('custom-webpack.config.js - config', config.module.rules);
    return config;
    // return merge(config, {
    //     module: {
    //         rules: [litScssLoaderRule],
    //     },
    // });
};
