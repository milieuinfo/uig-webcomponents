import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlInputAddon } from './input-addon';
import { VlIcon } from './icon';

export class VlButtonInputAddon extends VlInputAddon {
  async getIcon() {
    const icon = await this.findElement(By.css(this.selector + ' [is="vl-icon"]'));
    if (icon) {
      return new VlIcon(this.driver, icon);
    }
  }
}
