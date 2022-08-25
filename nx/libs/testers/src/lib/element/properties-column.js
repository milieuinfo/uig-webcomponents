import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlPropertiesList } from './list';

export class VlPropertiesColumn extends VlElement {
  async isFullSize() {
    return this.hasAttribute('full');
  }

  async getPropertiesList() {
    return new VlPropertiesList(this.driver, await this.findElement(By.css('[is="vl-properties-list"]')));
  }
}
