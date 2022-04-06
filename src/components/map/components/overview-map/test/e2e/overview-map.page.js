import { config } from '../../../../../../utils/test';
import { VlMapPage } from '../../../../test/e2e/map.page';

export class VlMapOverviewMapPage extends VlMapPage {
  async getMap() {
    return this._getMap('#map');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/overview-map/test/e2e`);
  }
}
