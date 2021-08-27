const {VlProperties} = require('../components/vl-properties');
const {Page, Config} = require('vl-ui-core').Test;

class VlPropertiesPage extends Page {
  async load() {
    await super.load(`${Config.baseUrl}/demo/vl-properties.html`);
  }

  async getProperties() {
    return this._getProperties('#properties');
  }

  async _getProperties(selector) {
    return new VlProperties(this.driver, selector);
  }
}

module.exports = VlPropertiesPage;
