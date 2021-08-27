const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const VlSideNavigationItem = require('./vl-side-navigation-item');

class VlSideNavigation extends VlElement {
  async getTitle() {
    const h1 = await this._getTitleH(1);
    const h2 = await this._getTitleH(2);
    const h3 = await this._getTitleH(3);
    const h4 = await this._getTitleH(4);
    const h5 = await this._getTitleH(5);
    const h6 = await this._getTitleH(6);
    return h1 || h2 || h3 || h4 || h5 || h6;
  }

  async getItem(number) {
    const items = await this.getItems();
    return items[number];
  }

  async getItems() {
    const items = await this.findElements(By.css('[is="vl-side-navigation-item"][data-vl-parent]'));
    return Promise.all(items.map((item) => new VlSideNavigationItem(this.driver, item)));
  }

  async _getTitleH(number) {
    let title = undefined;
    try {
      title = await this.findElement(By.css(`[is="vl-side-navigation-h${number}"]`));
    } catch (error) {}
    return title;
  }
}

module.exports = VlSideNavigation;
