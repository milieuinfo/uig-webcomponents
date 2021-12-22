import { VlElement, By } from '../../../../utils/test';

export class VlProperties extends VlElement {
  async getSlotElements() {
    const slot = await this.shadowRoot.findElement(By.css('slot'));
    return this.getAssignedElements(slot);
  }
}
