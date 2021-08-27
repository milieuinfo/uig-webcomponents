const VlBody = require('../components/vl-body');
const {Page, Config} = require('vl-ui-core').Test;

class VlBodyPage extends Page {
  async getBody() {
    return this._getBody('#body');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-body.html');
  }

  async _getBody(selector) {
    return new VlBody(this.driver, selector);
  }
}

module.exports = VlBodyPage;
