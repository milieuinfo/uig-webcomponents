import { VlElement } from '../../../../../../utils/test';

export class VlTestMapOverviewMap extends VlElement {
  async toggleBaseLayer() {
    return this.click();
  }
}
