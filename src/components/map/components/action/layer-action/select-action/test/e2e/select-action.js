import { VlTestMapAction } from '../../../../../action/test/e2e/action.js';

export class VlTestMapSelectAction extends VlTestMapAction {
  async isClustered() {
    return this.hasAttribute('cluster');
  }
}
