import { config } from '../../../../../../../utils/test';
import { VlMapPage } from '../../../../map/test/e2e/map.page';

export class VlMapSideSheetMenuPage extends VlMapPage {
  async getMap() {
    return this._getMap('#vl-map-side-sheet-map');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/side-sheet/test/e2e`);
  }
}
