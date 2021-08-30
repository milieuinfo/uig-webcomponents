const VlIcon = require("./icon.js");
const { Page, Config } = require("../../../../../test/index.js").Test;

class VlIconPage extends Page {
  async _getIcon(selector) {
    return new VlIcon(this.driver, selector);
  }

  async getIcon() {
    return this._getIcon("#icon");
  }

  async getIconBefore() {
    return this._getIcon("#icon-before");
  }

  async getIconAfter() {
    return this._getIcon("#icon-after");
  }

  async getSmallIcon() {
    return this._getIcon("#icon-small");
  }

  async getLargeIcon() {
    return this._getIcon("#icon-large");
  }

  async getLightIcon() {
    return this._getIcon("#icon-light");
  }

  async getIcon90() {
    return this._getIcon("#icon-90");
  }

  async getIcon180() {
    return this._getIcon("#icon-180");
  }

  async load() {
    await super.load(Config.baseUrl + "/icon/test/e2e");
  }
}

module.exports = VlIconPage;
