import { VlMapAction } from '../../../../../action/test/e2e/map-action';

export class VlMapSelectAction extends VlMapAction {
  async isClustered() {
    return this.hasAttribute('cluster');
  }
}
