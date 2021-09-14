import { VlMapAction } from "./vl-map-action";

export class VlMapSelectAction extends VlMapAction {
  async isClustered() {
    return this.hasAttribute("cluster");
  }
}
