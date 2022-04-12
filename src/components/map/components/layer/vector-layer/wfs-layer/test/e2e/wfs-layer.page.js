import { config } from '../../../../../../../../utils/test';
import { VlMapPage } from '../../../../../map/test/e2e/map.page';

export class VlMapWfsLayerPage extends VlMapPage {
  async getMapWithStandardLayer() {
    return this._getMap('#map-with-wfs-layer');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/layer/vector-layer/wfs-layer/test/e2e`);
  }
}
