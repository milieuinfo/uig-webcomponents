import { VlElement, By } from '../../../../utils/test';
import { VlButton } from '../../../button/test/e2e/button.js';

export class VlToggleButton extends VlElement {
  async _getButtonElement() {
    console.log(await this.shadowRoot.getInnerHTML());
    return this.shadowRoot.findElement(By.css('[is="vl-button"]'));
  }

  async getButton() {
    const button = await this._getButtonElement();
    if (button) {
      return new VlButton(this.driver, button);
    }
  }

  async click() {
    const button = await this._getButtonElement();
    button.click();
  }

  async hasHiddenText() {
    const text = await this.shadowRoot.findElement(By.css('[is="vl-text"]'));
    const hidden = text.hasAttribute('data-vl-visually-hidden');
    return !!text && hidden;
  }

  async isDisabled() {
    return this.hasAttribute('data-vl-disabled');
  }

  async isActive() {
    const button = await this.getButton();
    return !(await button.isTertiary());
  }

  async isInactive() {
    const button = await this.getButton();
    return await button.isTertiary();
  }
}
