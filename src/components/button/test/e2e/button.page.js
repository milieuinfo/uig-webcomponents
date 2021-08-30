const { VlButton, VlLinkButton } = require("./button.js");
const { Page, Config } = require("../../../../../test").Test;

class VlButtonPage extends Page {
  async _getButton(selector) {
    return new VlButton(this.driver, selector);
  }

  async _getLinkButton(selector) {
    return new VlLinkButton(this.driver, selector);
  }

  async getPrimaryButton() {
    return this._getButton("#button-primary");
  }

  async getDisabledButton() {
    return this._getButton("#button-disabled");
  }

  async getErrorButton() {
    return this._getButton("#button-error");
  }

  async getIconBeforeButton() {
    return this._getButton("#button-icon-before");
  }

  async getIconAfterButton() {
    return this._getButton("#button-icon-after");
  }

  async getIconAfterButton() {
    return this._getButton("#button-icon-after");
  }

  async getBlockButton() {
    return this._getButton("#button-block");
  }

  async getLargeButton() {
    return this._getButton("#button-large");
  }

  async getWideButton() {
    return this._getButton("#button-wide");
  }

  async getNarrowButton() {
    return this._getButton("#button-narrow");
  }

  async getLoadingButton() {
    return this._getButton("#button-loading");
  }

  async getSecondaryButton() {
    return this._getButton("#button-secondary");
  }

  async getTertiaryButton() {
    return this._getButton("#button-tertiary");
  }

  async getIconButton() {
    return this._getButton("#button-icon");
  }

  async getLinkButton() {
    return this._getLinkButton("#button-a-link");
  }

  async load() {
    await super.load(Config.baseUrl + "button/test/e2e");
  }
}

module.exports = VlButtonPage;
