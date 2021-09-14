import { config } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapOverviewMapPage extends VlMapPage {
  async getMap() {
    return this._getMap("#map");
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e");
  }
}
