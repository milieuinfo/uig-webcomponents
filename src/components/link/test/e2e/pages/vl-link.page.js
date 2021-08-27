const {VlLink, VlButtonLink} = require('../components/vl-link');
const {Page, Config} = require('vl-ui-core').Test;

class VlLinkPage extends Page {
  async getLink() {
    return this._getLink('#link');
  }

  async getBlockLink() {
    return this._getLink('#link-block');
  }

  async getErrorLink() {
    return this._getLink('#link-error');
  }

  async getButtonLink() {
    return this._getButtonLink('#button-link');
  }

  async load() {
    await super.load(`${Config.baseUrl}/demo/vl-link.html`);
  }

  async _getLink(selector) {
    return new VlLink(this.driver, selector);
  }

  async _getButtonLink(selector) {
    return new VlButtonLink(this.driver, selector);
  }
}

module.exports = VlLinkPage;
