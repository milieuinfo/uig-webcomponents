import { config } from '../../../../../../../utils/test';
import { VlTestMapPage } from '../../../../map/test/e2e/map.page.js';

export class VlTestMapWmtsLayerPage extends VlTestMapPage {
  async getMapWithStandardLayer() {
    return this._getMap('#map-with-wmts-layer');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/layer/wmts-layer/test/e2e/index.html`);
  }
}
