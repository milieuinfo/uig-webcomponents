import { VlMapDrawPointAction } from "../components/vl-map-draw-point-action";
import { VlMapDrawLineAction } from "../components/vl-map-draw-line-action";
import { VlMapDrawPolygonAction } from "../components/vl-map-draw-polygon-action";
import { config } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapDrawActionsPage extends VlMapPage {
  async getMapWithDrawPointAction() {
    return this._getMap("#map-with-draw-point-action");
  }

  async getMapWithDrawPointSnapAction() {
    return this._getMap("#map-with-draw-point-snap-action");
  }

  async getMapWithDrawLineAction() {
    return this._getMap("#map-with-draw-line-action");
  }

  async getMapWithDrawPolygonAction() {
    return this._getMap("#map-with-draw-polygon-action");
  }

  async getDrawPointAction() {
    return new VlMapDrawPointAction(this.driver, "#draw-point-action");
  }

  async getDrawPointSnapAction() {
    return new VlMapDrawPointAction(this.driver, "#draw-point-snap-action");
  }

  async getDrawLineAction() {
    return new VlMapDrawLineAction(this.driver, "#draw-line-action");
  }

  async getDrawPolygonAction() {
    return new VlMapDrawPolygonAction(this.driver, "#draw-polygon-action");
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e");
  }
}
