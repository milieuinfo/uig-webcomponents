const { Page, Config } = require("../../../test").Test;
const { By } = require("../../../test").Test.Setup;

class VlCorePage extends Page {
  async getSlowElement() {
    return this.driver.findElement(By.css("#slow-element"));
  }

  async load() {
    await super.load(Config.baseUrl + "/test/test-pages/vl-core.html");
  }
}

module.exports = VlCorePage;
