const { merge } = require('webpack-merge');
const Sass = require('sass');

const litCssLoaderRule = {
    test: /_vl-breadcrumb\.scss$/,
    loader: 'lit-css-loader',
    options: {
        specifier: 'lit',
        transform: (data, { filePath }) => {
            // console.log('lit-css-loader - before', filePath, data);
            const result = Sass.renderSync({ data, file: filePath }).css.toString();
            // console.log('lit-css-loader - after', result);
            return result;
        },
    },
};

const litScssLoaderRule = {
    test: /_vl-breadcrumb\.scss$/,
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
    config.module.rules[3].exclude = /_vl-breadcrumb\.scss$/;
    config.module.rules = [...config.module.rules, litCssLoaderRule];
    // console.log('custom-webpack.config.js - config', config.module.rules);
    return config;
    // return merge(config, {
    //     module: {
    //         rules: [litScssLoaderRule],
    //     },
    // });
};
