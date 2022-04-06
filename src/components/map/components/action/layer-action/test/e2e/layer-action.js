import { VlMapAction } from '../../../../action/test/e2e/action.js';

export class VlMapLayerAction extends VlMapAction {
  async isReady() {
    return this.driver.wait(async () => await this.hasAttribute('active'));
  }
}
