import { VlMapModifyAction } from "../components/vl-map-modify-action";
import { VlMapPage } from "./vl-map.page";
import { config, By } from "../../../../../utils/test";

export class VlMapModifyActionsPage extends VlMapPage {
  async getMapWithModifyPointAction() {
    return this._getMap("#map-with-modify-point-action");
  }

  async getMapWithModifyLineAction() {
    return this._getMap("#map-with-modify-line-action");
  }

  async getMapWithModifyPolygonAction() {
    return this._getMap("#map-with-modify-polygon-action");
  }

  async getModifyAction(map) {
    const element = await map.findElement(By.css("vl-map-modify-action"));
    return new VlMapModifyAction(this.driver, element);
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e");
  }
}
