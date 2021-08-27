const {VlElement} = require('vl-ui-core').Test;

class VlTitle extends VlElement {
  async isSansFont() {
    return this.hasAttribute('sans');
  }

  async hasBorder() {
    return this.hasAttribute('has-border');
  }

  async isAlt() {
    return this.hasAttribute('alt');
  }

  async hasNoSpaceBottom() {
    return this.hasAttribute('no-space-bottom');
  }

  async isH(headerNumber) {
    return await this.getTagName() === `h${headerNumber}`;
  }
}

class VlH1 extends VlTitle { }
class VlH2 extends VlTitle { }
class VlH3 extends VlTitle { }
class VlH4 extends VlTitle { }
class VlH5 extends VlTitle { }
class VlH6 extends VlTitle { }

module.exports = {VlH1, VlH2, VlH3, VlH4, VlH5, VlH6};
