import { config } from '../../../../../../utils/test';
import { VlTestMapPage } from '../../../map/test/e2e/map.page.js';

export class VlTestMapLayerSwitcherPage extends VlTestMapPage {
  async getMapWithLayerSwitcher() {
    return this._getMap('#map-with-layer-switcher');
  }

  async getMapWithCustomLayerSwitcher() {
    return this._getMap('#map-with-custom-layer-switcher');
  }

  async getMapWithResolutionLayerSwitcher() {
    return this._getMap('#map-with-resolution-layer-switcher');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/layer-switcher/test/e2e/index.html`);
  }
}
