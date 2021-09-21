import { VlElement } from "../../../../../utils/test";

export class VlMapOverviewMap extends VlElement {
  async toggleBaseLayer() {
    return this.click();
  }
}
