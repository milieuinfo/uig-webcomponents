import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlLink } from './link';

export class VlFunctionalHeader extends VlElement {
  async getTitle() {
    return this._getElement('#title');
  }

  async getSubTitle() {
    return this._getElement('#sub-title');
  }

  async getTitleSlotNodes() {
    return this._getSlotNodes('title');
  }

  async getSubTitleSlotNodes() {
    return this._getSlotNodes('sub-title');
  }

  async getActionNodes() {
    return this.shadowRoot.findElements(By.css('#actions ul li > *'));
  }

  async back() {
    const element = await this.shadowRoot.findElement(By.css('#back-link'));
    const link = await new VlLink(this.driver, element);
    return link.click();
  }

  async _getElement(selector) {
    const element = await this.shadowRoot.findElement(By.css(selector));
    return new VlElement(this.driver, element);
  }

  async _getSlotNodes(name) {
    const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
    return this.getAssignedNodes(slot);
  }
}
