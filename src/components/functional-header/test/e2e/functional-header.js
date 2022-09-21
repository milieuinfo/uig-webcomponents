import { VlElement, By } from '../../../../utils/test';
import { VlLink } from '../../../link/test/e2e/link';

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

  async getTopLeftSlotNodes() {
    return this._getSlotNodes('top-left');
  }

  async getSubTitleSlotNodes() {
    return this._getSlotNodes('sub-title');
  }

  async getSubHeaderSlotNodes() {
    return this.shadowRoot.findElements(By.css('#sub-header ul li > *'));
  }

  async getTopRightSlotNodes() {
    return this.shadowRoot.findElements(By.css('#top-right ul li > *'));
  }

  async getDefaultSubHeader() {
    return this.shadowRoot.findElement(By.css('#default-sub-header'));
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
