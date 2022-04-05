import { VlMapModifyAction } from './modify-action.js';
import { VlMapPage } from '../../../../../map/test/e2e/map.page.js';
import { config, By } from '../../../../../../../../utils/test';

export class VlMapModifyActionsPage extends VlMapPage {
  async getMapWithModifyPointAction() {
    return this._getMap('#map-with-modify-point-action');
  }

  async getMapWithModifyLineAction() {
    return this._getMap('#map-with-modify-line-action');
  }

  async getMapWithModifyPolygonAction() {
    return this._getMap('#map-with-modify-polygon-action');
  }

  async getModifyAction(map) {
    const element = await map.findElement(By.css('vl-map-modify-action'));
    return new VlMapModifyAction(this.driver, element);
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/action/layer-action/modify-action/test/e2e`);
  }
}
