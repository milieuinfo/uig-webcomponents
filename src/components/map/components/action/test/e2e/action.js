import { VlElement } from '../../../../../../utils/test';
import { VlTestMap } from '../../../map/test/e2e/map.js';
import { VlTestMapLayers } from '../../../layer/test/e2e/layers.js';

export class VlTestMapAction extends VlElement {
  async isActive() {
    return this.hasAttribute('active');
  }

  async getMap() {
    const element = await this.driver.executeScript('return arguments[0]._mapElement', this);
    const map = await new VlTestMap(this.driver, element);
    await map.isReady();
    await map.scrollIntoView();
    return map;
  }

  async getLayer() {
    return await VlTestMapLayers.asLayer(this.driver, await this.parent());
  }
}
