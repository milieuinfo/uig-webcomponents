import { config } from '../../../../../../utils/test';
import { VlTestMapPage } from '../../../map/test/e2e/map.page.js';

export class VlTestMapOverviewMapPage extends VlTestMapPage {
  async getMap() {
    return this._getMap('#map');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/overview-map/test/e2e/index.html`);
  }
}
