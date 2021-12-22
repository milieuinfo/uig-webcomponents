import { VlElement, By } from '../../../../../../utils/test';
import { VlPropertiesList } from '../../../list/test/e2e/list';

export class VlPropertiesColumn extends VlElement {
  async isFullSize() {
    return this.hasAttribute('full');
  }

  async getPropertiesList() {
    return new VlPropertiesList(this.driver, await this.findElement(By.css('[is="vl-properties-list"]')));
  }
}
