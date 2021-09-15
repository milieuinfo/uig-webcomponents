import { VlMapDeleteAction } from "../components/vl-map-delete-action";
import { config } from "../../../../../utils/test";
import { VlMapPage } from ".//vl-map.page";

export class VlMapDeleteActionPage extends VlMapPage {
  async getDeleteAction() {
    return this._getDeleteAction("#delete-action");
  }

  async getMap() {
    return this._getMap("#map-with-delete-action");
  }

  async load() {
    await super.load(
      config.baseUrl + "components/map/test/e2e/map-delete-action"
    );
  }

  async _getDeleteAction(selector) {
    return new VlMapDeleteAction(this.driver, selector);
  }
}
