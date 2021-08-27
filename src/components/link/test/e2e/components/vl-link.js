const {VlElement} = require('vl-ui-core').Test;

class VlLink extends VlElement {
  async isBlock() {
    return this.hasAttribute('block');
  }

  async isError() {
    return this.hasAttribute('error');
  }
}

class VlButtonLink extends VlLink { }

module.exports = {VlLink, VlButtonLink};
