import { VlMapAction } from '../../../../../action/test/e2e/action.js';
import { VlMapFeaturesLayer } from '../../../../../layer/vector-layer/features-layer/test/e2e/features-layer.js';

export class VlMapModifyAction extends VlMapAction {
  async getFeaturesLayer() {
    return new VlMapFeaturesLayer(
      this.driver,
      await this.driver.executeScript('return arguments[0].parentElement', this),
    );
  }

  async movePointByCoordinates(from, to) {
    const map = await this.getMap();
    await map.movePointByCoordinates(from, to);
  }
}
