const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const VlSideNavigationToggle = require('./vl-side-navigation-toggle');

class VlSideNavigationItem extends VlElement {
  async getToggle() {
    const element = await this.findElement(By.css('a'));
    return new VlSideNavigationToggle(this.driver, element);
  }

  async getItems() {
    const items = await this.findElements(By.css('[is="vl-side-navigation-item"]'));
    return Promise.all(items.map((item) => new VlSideNavigationItem(this.driver, item)));
  }
}

module.exports = VlSideNavigationItem;
