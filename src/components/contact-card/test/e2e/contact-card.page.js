const VlContactCard = require("./contact-card.js");
const { Page, Config } = require("../../../../../test").Test;

class VlContactCardPage extends Page {
  async getContactCard() {
    return this._getContactCard("#contact-card");
  }

  async load() {
    await super.load(Config.baseUrl + "contact-card/test/e2e");
  }

  async _getContactCard(selector) {
    return new VlContactCard(this.driver, selector);
  }
}

module.exports = VlContactCardPage;
