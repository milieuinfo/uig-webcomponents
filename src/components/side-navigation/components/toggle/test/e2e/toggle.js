import { VlElement } from '../../../../../../utils/test';

export class VlSideNavigationToggle extends VlElement {
  async isActive() {
    return this.hasClass('js-vl-scrollspy-active');
  }
}
