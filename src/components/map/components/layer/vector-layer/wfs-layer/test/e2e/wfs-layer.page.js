import { config } from '../../../../../../../../utils/test';
import { VlTestMapPage } from '../../../../../map/test/e2e/map.page.js';

export class VlTestMapWfsLayerPage extends VlTestMapPage {
  async getMapWithStandardLayer() {
    return this._getMap('#map-with-wfs-layer');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/layer/vector-layer/wfs-layer/test/e2e/index.html`);
  }
}
