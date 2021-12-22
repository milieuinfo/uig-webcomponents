import { By } from '../../../../../../utils/test';
import { VlInputAddon } from '../../../../test/e2e/input-addon';
import { VlIcon } from '../../../../../icon/test/e2e/icon';

export class VlButtonInputAddon extends VlInputAddon {
  async getIcon() {
    const icon = await this.findElement(By.css(this.selector + ' [is="vl-icon"]'));
    if (icon) {
      return new VlIcon(this.driver, icon);
    }
  }
}
