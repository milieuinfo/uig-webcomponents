module.exports = {
  "full-trace": true,
  reporter: "mocha-multi-reporters",
  reporterOptions: {
    configFile: "./config/reporter-config.json",
  },
  spec: ["./src/components/button/test/e2e/*.spec.js"],
  timeout: "300000",
};
