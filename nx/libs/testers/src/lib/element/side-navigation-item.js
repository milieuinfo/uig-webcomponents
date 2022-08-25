import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlSideNavigationToggle } from './toggle';

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
