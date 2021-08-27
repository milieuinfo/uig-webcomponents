const {VlElement} = require('vl-ui-core').Test;

class VlSideNavigationItem extends VlElement {
  async isActive() {
    return this.hasClass('js-vl-scrollspy-active');
  }
}

module.exports = VlSideNavigationItem;
