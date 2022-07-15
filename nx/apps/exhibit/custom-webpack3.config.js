const { merge } = require('webpack-merge');
const Sass = require('sass');

module.exports = (config, context) => {
  // console.log('custom-webpack.config.js', config);
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
              const result = Sass.compileString(data).css.toString();
              console.log('lit-css-loader - after', result);
              return result;
            },
          },
        }, 'extract-loader', 'css-loader', 'sass-loader'
      ],
    },
  });
};
