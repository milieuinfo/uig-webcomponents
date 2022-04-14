import { config } from '../../../../../../../utils/test';
import { VlTestMapPage } from '../../../../map/test/e2e/map.page.js';

export class VlTestMapWmsLayerPage extends VlTestMapPage {
  async getMapWithTiledWmsLayer() {
    return this._getMap('#map-with-tiled-wms-layer');
  }

  async getMapWithImageWmsLayer() {
    return this._getMap('#map-with-image-wms-layer');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/layer/wms-layer/test/e2e/index.html`);
  }
}
