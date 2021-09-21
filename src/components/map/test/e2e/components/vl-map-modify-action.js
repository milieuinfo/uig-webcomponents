import { VlMapAction } from "./vl-map-action";
import { VlMapFeaturesLayer } from "./vl-map-features-layer";

export class VlMapModifyAction extends VlMapAction {
  async getFeaturesLayer() {
    return new VlMapFeaturesLayer(
      this.driver,
      await this.driver.executeScript("return arguments[0].parentElement", this)
    );
  }

  async movePointByCoordinates(from, to) {
    const map = await this.getMap();
    await map.movePointByCoordinates(from, to);
  }
}
