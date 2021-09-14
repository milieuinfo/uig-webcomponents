import { VlMap } from "../components/vl-map";
import { VlMapBaseLayer } from "../components/vl-map-baselayer";
import { Page, config } from "../../../../../utils/test";

export class VlMapPage extends Page {
  async getBaseLayerGrbGray() {
    return this._getBaseLayer("#baselayer-grb-gray");
  }

  async getBaseLayerGrb() {
    return this._getBaseLayer("#baselayer-grb");
  }

  async getMap() {
    return this._getMap("#map");
  }

  async getMapWithoutEscape() {
    return this._getMap("#map-escape");
  }

  async getMapWithoutRotation() {
    return this._getMap("#map-rotation");
  }

  async getMapWithoutMouseZoom() {
    return this._getMap("#map-mouse-zoom");
  }

  async getMapWithFullscreenAllowed() {
    return this._getMap("#map-fullscreen");
  }

  async load(url) {
    await super.load(config.baseUrl + "components/map/test/e2e");
  }

  async _getMap(selector) {
    const map = await new VlMap(this.driver, selector);
    await map.isReady();
    await map.scrollIntoView();
    return map;
  }

  async _getBaseLayer(selector) {
    return new VlMapBaseLayer(this.driver, selector);
  }
}
