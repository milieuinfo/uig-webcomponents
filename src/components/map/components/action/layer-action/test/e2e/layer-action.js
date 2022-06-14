import { VlTestMapAction } from '../../../../action/test/e2e/action.js';

export class VlTestMapLayerAction extends VlTestMapAction {
  async isReady() {
    return this.driver.wait(async () => await this.hasAttribute('active'));
  }
}
