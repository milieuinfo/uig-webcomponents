const path = require("path");

module.exports = {
  mode: "development",
  entry: "./distribution/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
};
