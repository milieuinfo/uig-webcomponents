const Sass = require('sass');

const litCssLoaderRule = {
    test: /\.scss$/,
    loader: 'lit-css-loader',
    include: /\/libs\/components\/src\/lib/,
    options: {
        specifier: 'lit',
        transform: (data, {filePath}) => {
            // console.log('lit-css-loader - before', filePath, data);
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

module.exports = (config, context) => {
    // const rules = config.module.rules;
    // const scssRule = rules.filter(rule => rule.test.includes('.scss'))
    // TODO kspeltin: niet hard coderen op index '3' maar de index vinden van de filter die inwerkt op .scss
    config.module.rules[3].exclude = /\/libs\/components\/src\/lib/;
    config.module.rules = [...config.module.rules, litCssLoaderRule];
    // console.log('custom-webpack.config.js - config', config.module.rules);
    return config;
};
