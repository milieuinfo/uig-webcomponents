import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';

export class VlInfotext extends VlElement {
  async getValue() {
    return this.findElement(By.css('div[data-vl-value]'));
  }

  async getText() {
    return this.findElement(By.css('div[data-vl-text]'));
  }

  async isBadge() {
    const childrenWithBadgeClass = await this.findElements(By.css('.vl-infotext--badge'));
    return childrenWithBadgeClass.length > 0;
  }
}
