import { config } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapWfsLayerPage extends VlMapPage {
  async getMapWithStandardLayer() {
    return this._getMap("#map-with-wfs-layer");
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e");
  }
}
