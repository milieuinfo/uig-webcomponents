import { VlMapAction } from '../../../../action/test/e2e/map-action';

export class VlMapLayerAction extends VlMapAction {
  async isReady() {
    return this.driver.wait(async () => await this.hasAttribute('active'));
  }
}
