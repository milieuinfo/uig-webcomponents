import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';

export class VlProperties extends VlElement {
  async getSlotElements() {
    const slot = await this.shadowRoot.findElement(By.css('slot'));
    return this.getAssignedElements(slot);
  }
}
