import { VlMapLayerStyle } from "../components/vl-map-layer-style";
import { config, By } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapLayerStylePage extends VlMapPage {
  async getStandardMap() {
    return this._getMap("#map-standard");
  }

  async getLabelMap() {
    return this._getMap("#map-label");
  }

  async getAdjustedMap() {
    return this._getMap("#map-adjusted");
  }

  async getMultipleStylesMap() {
    return this._getMap("#map-multiple-styles");
  }

  async getLayerStyle(map) {
    const styles = await this.getLayerStyles(map);
    return styles[0];
  }

  async getLayerStyles(map) {
    const styles = await map.findElements(By.css("vl-map-layer-style"));
    return Promise.all(
      styles.map((style) => new VlMapLayerStyle(this.driver, style))
    );
  }

  async load() {
    await super.load(
      config.baseUrl + "components/map/test/e2e/map-layer-style"
    );
  }
}
