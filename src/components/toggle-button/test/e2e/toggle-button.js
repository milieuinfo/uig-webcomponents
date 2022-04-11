import { VlElement, By } from '../../../../utils/test';
import { VlButton } from '../../../button/test/e2e/button.js';

export class VlToggleButton extends VlElement {
  async getButton() {
    const button = await this.getElementInShadow(this, '[is="vl-button"]');
    if (button) {
      return new VlButton(this.driver, button);
    }
    return undefined;
  }

  async hasHiddenText() {
    const text = await this.shadowRoot.findElement(By.css('[is="vl-text"]'));
    const hidden = text.hasAttribute('data-vl-visually-hidden');
    return !!text && hidden;
  }

  async isDisabled() {
    return this.hasAttribute('data-vl-disabled');
  }

  // Controlled toggle button

  async setActive(set) {
    await this.driver.executeScript(`return arguments[0].active = ${set}`, this);
  }

  async isActive() {
    return !!(await this.driver.executeScript('return arguments[0].active', this));
  }
}
