import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';

export class VlInfoTile extends VlElement {
  async toggle() {
    const element = await this._getToggleElement();
    await element.click();
  }

  async isOpen() {
    return this.shadowRoot.hasClass('js-vl-accordion--open');
  }

  async getTitle() {
    const slots = await this.getTitleSlotElements();
    return slots[0].getText();
  }

  async getSubtitle() {
    const element = await this._getSlotElement('subtitle');
    return element.getText();
  }

  async getContentSlotElement() {
    return this._getSlotElement('content');
  }

  async getFooterSlotElement() {
    return this._getSlotElement('footer');
  }

  async getTitleSlotElements() {
    const slot = await this._getSlot('title');
    return this.getAssignedElements(slot);
  }

  async _getSlotElement(name) {
    const slot = await this._getSlot(name);
    const element = await this.getAssignedElements(slot);
    return new VlElement(this.driver, element[0]);
  }

  async _getSlot(name) {
    return this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
  }

  async _getToggleElement() {
    return this.shadowRoot.findElement(By.css('.js-vl-accordion__toggle'));
  }
}
