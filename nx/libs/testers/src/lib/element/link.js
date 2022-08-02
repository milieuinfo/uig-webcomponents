import { VlElement } from '../util/vl-element';

export class VlLink extends VlElement {
  async isBlock() {
    return this.hasAttribute('block');
  }

  async isError() {
    return this.hasAttribute('error');
  }
}

export class VlButtonLink extends VlLink {}
