import { VlMapAction } from "./vl-map-action";

export class VlMapLayerAction extends VlMapAction {
  async isReady() {
    return this.driver.wait(async () => await this.hasAttribute("active"));
  }
}
