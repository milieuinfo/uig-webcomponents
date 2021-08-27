const {VlH1, VlH2, VlH3, VlH4, VlH5, VlH6} = require('../components/vl-titles');
const {Page, Config} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlTitlesPage extends Page {
  async getH1() {
    return new VlH1(this.driver, await this._getH(1));
  }

  async getH2() {
    return new VlH2(this.driver, await this._getH(2));
  }

  async getH3() {
    return new VlH3(this.driver, await this._getH(3));
  }

  async getH4() {
    return new VlH4(this.driver, await this._getH(4));
  }

  async getH5() {
    return new VlH5(this.driver, await this._getH(5));
  }

  async getH6() {
    return new VlH6(this.driver, await this._getH(6));
  }

  async getSansH1() {
    return new VlH1(this.driver, await this._getSansH(1));
  }

  async getBorderH1() {
    return new VlH1(this.driver, await this._getBorderH(1));
  }

  async getAltH4() {
    return new VlH4(this.driver, await this._getAltH(4));
  }

  async getNoSpaceBottomH4() {
    return new VlH4(this.driver, await this._getNoSpaceBottomH(4));
  }

  async load() {
    await super.load(`${Config.baseUrl}/demo/vl-titles.html`);
  }

  async _getH(number) {
    return this.driver.findElement(By.css(`#h${number}`));
  }

  async _getSansH(number) {
    return this.driver.findElement(By.css(`#h${number}-sans`));
  }

  async _getBorderH(number) {
    return this.driver.findElement(By.css(`#h${number}-border`));
  }

  async _getAltH(number) {
    return this.driver.findElement(By.css(`#h${number}-alt`));
  }

  async _getNoSpaceBottomH(number) {
    return this.driver.findElement(By.css(`#h${number}-no-space-bottom`));
  }
}

module.exports = VlTitlesPage;
