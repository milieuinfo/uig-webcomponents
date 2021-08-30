const VlBody = require("./body.js");
const { Page, Config } = require("../../../../../test").Test;

class VlBodyPage extends Page {
  async getBody() {
    return this._getBody("#body");
  }

  async load() {
    await super.load(Config.baseUrl + "body/test/e2e");
  }

  async _getBody(selector) {
    return new VlBody(this.driver, selector);
  }
}

module.exports = VlBodyPage;
