import { VlElement } from '../util/vl-element';

export class VlSideNavigationToggle extends VlElement {
  async isActive() {
    return this.hasClass('js-vl-scrollspy-active');
  }
}
