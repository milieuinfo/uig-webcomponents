const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  console.log('custom-webpack.config.js', config);
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.s2css$/,
          use: [{
            loader: 'lit-scss-loader',
            options: {
              minify: false, // defaults to false
            },
          }, 'extract-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  });
};
