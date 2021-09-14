import { config } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapWmtsLayerPage extends VlMapPage {
  async getMapWithStandardLayer() {
    return this._getMap("#map-with-wmts-layer");
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e");
  }
}
