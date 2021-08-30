const VlInfoblock = require("./infoblock.js");
const { Page, Config } = require("../../../../../test").Test;

class VlInfoblockPage extends Page {
  async _getInfoblock(selector) {
    return new VlInfoblock(this.driver, selector);
  }

  async getContactBlock() {
    return this._getInfoblock("#contact");
  }

  async getPublicationsBlock() {
    return this._getInfoblock("#publications");
  }

  async getFaqBlock() {
    return this._getInfoblock("#faq");
  }

  async getNewsBlock() {
    return this._getInfoblock("#news");
  }

  async getTimelineBlock() {
    return this._getInfoblock("#timeline");
  }

  async getQuestionBlock() {
    return this._getInfoblock("#question");
  }

  async getCustomIconBlock() {
    return this._getInfoblock("#calendar");
  }

  async getContactTitleBlock() {
    return this._getInfoblock("#contact-title");
  }

  async getContactSlotBlock() {
    return this._getInfoblock("#contact-slot");
  }

  async load() {
    await super.load(Config.baseUrl + "infoblock/test/e2e");
  }
}

module.exports = VlInfoblockPage;
