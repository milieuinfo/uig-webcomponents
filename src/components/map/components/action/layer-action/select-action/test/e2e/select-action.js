import { VlMapAction } from '../../../../../action/test/e2e/action.js';

export class VlMapSelectAction extends VlMapAction {
  async isClustered() {
    return this.hasAttribute('cluster');
  }
}
