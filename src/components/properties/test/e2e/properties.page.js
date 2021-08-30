const { VlProperties } = require("./properties");
const { Page, Config } = require("../../../../../test/index.js").Test;

class VlPropertiesPage extends Page {
  async load() {
    await super.load(Config.baseUrl + "properties/test/e2e");
  }

  async getProperties() {
    return this._getProperties("#properties");
  }

  async _getProperties(selector) {
    return new VlProperties(this.driver, selector);
  }
}

module.exports = VlPropertiesPage;
