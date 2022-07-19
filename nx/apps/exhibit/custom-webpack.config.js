const { merge } = require('webpack-merge');
const Sass = require('sass');

module.exports = (config, context) => {
  config.module.rules[3].exclude = /styling2\.scss$/;
  console.log('custom-webpack.config.js - config', config.module.rules);
  return merge(config, {
    module: {
      rules: [
        {
          test: /styling2\.scss$/,
          loader: 'lit-css-loader',
          options: {
            specifier: 'lit',
            transform: (data, { filePath }) => {
              console.log('lit-css-loader - before', filePath, data);
              const result = Sass.renderSync({ data, file: filePath }).css.toString();
              console.log('lit-css-loader - after', result);
              return result;
            },
          },
        },
      ],
    },
  });
};
