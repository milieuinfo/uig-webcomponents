import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlTab } from './tab';

export class VlTabs extends VlElement {
  async getTabs() {
    const elements = await this._getTabElements();
    return Promise.all(elements.map((element) => new VlTab(this.driver, element)));
  }

  async getContent() {
    return this.shadowRoot.findElement(By.css('[data-vl-tab-pane][data-vl-show="true"]'));
  }

  async getContentSlotElement() {
    const content = await this.getContent();
    const slot = await content.findElement(By.css('slot'));
    const slotElements = await this.getAssignedElements(slot);
    return slotElements[0];
  }

  async hasContent() {
    try {
      await this.driver.wait(async () => this.getContent(), 1000);
      return true;
    } catch (e) {
      return false;
    }
  }

  async isAlt() {
    return this.hasAttribute('alt');
  }

  async _getTabListElement() {
    return this.shadowRoot.findElement(By.css('#tab-list'));
  }

  async _getTabElements() {
    const list = await this._getTabListElement();
    return list.findElements(By.css('[is="vl-tab"]'));
  }
}
