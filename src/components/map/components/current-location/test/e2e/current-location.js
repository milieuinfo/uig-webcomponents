import { VlElement } from '../../../../../../utils/test';

export class VlTestMapCurrentLocation extends VlElement {
  async assertIsDisplayed() {
    await this.waitUntilShadowDomElementLocated(this, '.uig-map-current-location');
  }
}
