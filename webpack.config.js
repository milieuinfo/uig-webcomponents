const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/components", to: "components" }],
    }),
  ],
  externals: {
    lit: "lit",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "sass-to-string",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      // {
      //   test: /\.(scss|css)$/,
      //   // Excluding the `.styles.scss` extension
      //   exclude: [/\.styles.scss$/, /node_modules/],
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     {
      //       loader: "sass-loader",
      //     },
      //   ],
      // },
    ],
  },
  // entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "distribution"),
  },
};
