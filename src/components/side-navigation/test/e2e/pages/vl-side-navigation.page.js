const VlSideNavigation = require('../components/vl-side-navigation');
const {Page, Config} = require('vl-ui-core').Test;

class VlSideNavigationPage extends Page {
  async getSideNavigation() {
    return this._getSideNavigation('[is="vl-side-navigation"]');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-side-navigation.html');
  }

  async _getSideNavigation(selector) {
    return new VlSideNavigation(this.driver, selector);
  }
}

module.exports = VlSideNavigationPage;
