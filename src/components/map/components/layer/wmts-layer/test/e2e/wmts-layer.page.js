import { config } from "../../../../../../../utils/test";
import { VlMapPage } from "../../../../map/test/e2e/map.page.js";

export class VlMapWmtsLayerPage extends VlMapPage {
  async getMapWithStandardLayer() {
    return this._getMap("#map-with-wmts-layer");
  }

  async load() {
    await super.load(
      config.baseUrl + "components/map/components/layer/wmts-layer/test/e2e"
    );
  }
}