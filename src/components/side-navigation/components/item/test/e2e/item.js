import { VlElement, By } from '../../../../../../utils/test';
import { VlSideNavigationToggle } from '../../../toggle/test/e2e/toggle';

export class VlSideNavigationItem extends VlElement {
  async getToggle() {
    const element = await this.findElement(By.css('a'));
    return new VlSideNavigationToggle(this.driver, element);
  }

  async getItems() {
    const items = await this.findElements(By.css('[is="vl-side-navigation-item"]'));
    return Promise.all(items.map((item) => new VlSideNavigationItem(this.driver, item)));
  }
}
