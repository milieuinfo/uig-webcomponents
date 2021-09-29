import { config } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapWmsLayerPage extends VlMapPage {
  async getMapWithTiledWmsLayer() {
    return this._getMap("#map-with-tiled-wms-layer");
  }

  async getMapWithImageWmsLayer() {
    return this._getMap("#map-with-image-wms-layer");
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e/map-wms-layer");
  }
}
