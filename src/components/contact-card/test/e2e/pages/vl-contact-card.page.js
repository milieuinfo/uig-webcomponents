const VlContactCard = require('../components/vl-contact-card');
const {Page, Config} = require('vl-ui-core').Test;

class VlContactCardPage extends Page {
  async getContactCard() {
    return this._getContactCard('#contact-card');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-contact-card.html');
  }

  async _getContactCard(selector) {
    return new VlContactCard(this.driver, selector);
  }
}

module.exports = VlContactCardPage;
