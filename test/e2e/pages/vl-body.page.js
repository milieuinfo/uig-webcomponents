const VlBody = require("../components/vl-body");
const { Page, Config } = require("../../../test").Test;

class VlBodyPage extends Page {
  async getBody() {
    return this._getBody("#body");
  }

  async load() {
    await super.load(Config.baseUrl + "/test/test-pages/vl-body.html");
  }

  async _getBody(selector) {
    return new VlBody(this.driver, selector);
  }
}

module.exports = VlBodyPage;
