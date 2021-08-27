module.exports = {
  "full-trace": true,
  reporter: "mocha-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  spec: ["./test/e2e/tests/*.test.js"],
  timeout: "300000",
};
