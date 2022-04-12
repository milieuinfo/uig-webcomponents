import { config } from '../../../../../../../../utils/test';
import { VlMapPage } from '../../../../../map/test/e2e/map.page';

export class VlMapFeaturesLayerPage extends VlMapPage {
  async getMapWithStandardLayer() {
    return this._getMap('#map-with-standard-layer');
  }

  async getMapWithClusteredLayer() {
    return this._getMap('#map-with-clustered-layer');
  }

  async getMapWithAutoExtentLayer() {
    return this._getMap('#map-with-auto-extent-layer');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/layer/vector-layer/features-layer/test/e2e`);
  }
}
