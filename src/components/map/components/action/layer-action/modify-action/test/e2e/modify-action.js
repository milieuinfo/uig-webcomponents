import { VlTestMapAction } from '../../../../../action/test/e2e/action.js';
import { VlTestMapFeaturesLayer } from '../../../../../layer/vector-layer/features-layer/test/e2e/features-layer.js';

export class VlTestMapModifyAction extends VlTestMapAction {
  async getFeaturesLayer() {
    return new VlTestMapFeaturesLayer(
      this.driver,
      await this.driver.executeScript('return arguments[0].parentElement', this),
    );
  }

  async movePointByCoordinates(from, to) {
    const map = await this.getMap();
    await map.movePointByCoordinates(from, to);
  }
}
