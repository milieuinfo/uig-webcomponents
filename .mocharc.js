module.exports = {
  "full-trace": true,
  reporter: "mocha-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  spec: ["./src/components/contact-card/test/e2e/*.test.js"],
  timeout: "300000",
};
