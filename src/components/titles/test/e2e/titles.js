import { VlElement } from '../../../../utils/test';

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
    return (await this.getTagName()) === `h${headerNumber}`;
  }
}

export class VlH1 extends VlTitle {}
export class VlH2 extends VlTitle {}
export class VlH3 extends VlTitle {}
export class VlH4 extends VlTitle {}
export class VlH5 extends VlTitle {}
export class VlH6 extends VlTitle {}
