import { VlTestMapDeleteAction } from './delete-action.js';
import { config } from '../../../../../../../../utils/test';
import { VlTestMapPage } from '../../../../../map/test/e2e/map.page.js';

export class VlTestMapDeleteActionPage extends VlTestMapPage {
  async getDeleteAction() {
    return this._getDeleteAction('#delete-action');
  }

  async getMap() {
    return this._getMap('#map-with-delete-action');
  }

  async load() {
    await super.load(
      `${config.baseUrl}components/map/components/action/layer-action/delete-action/test/e2e/index.html`,
    );
  }

  async _getDeleteAction(selector) {
    return new VlTestMapDeleteAction(this.driver, selector);
  }
}
