import { config } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapSideSheetMenuItemPage extends VlMapPage {
  async getMap() {
    return this._getMap("#vl-map-side-sheet-map");
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e");
  }
}
