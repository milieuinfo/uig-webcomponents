import { VlMapDeleteAction } from './delete-action.js';
import { config } from '../../../../../../../../utils/test';
import { VlMapPage } from '../../../../../map/test/e2e/map.page';

export class VlMapDeleteActionPage extends VlMapPage {
  async getDeleteAction() {
    return this._getDeleteAction('#delete-action');
  }

  async getMap() {
    return this._getMap('#map-with-delete-action');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/action/layer-action/delete-action/test/e2e`);
  }

  async _getDeleteAction(selector) {
    return new VlMapDeleteAction(this.driver, selector);
  }
}
