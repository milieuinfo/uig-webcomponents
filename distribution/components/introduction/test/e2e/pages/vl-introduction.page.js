const VlIntroduction = require('../components/vl-introduction');
const {Page, Config} = require('vl-ui-core').Test;

class VlIntroductionPage extends Page {
  async getIntroduction() {
    return this._getIntroduction('#introduction');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-introduction.html');
  }

  async _getIntroduction(selector) {
    return new VlIntroduction(this.driver, selector);
  }
}

module.exports = VlIntroductionPage;
