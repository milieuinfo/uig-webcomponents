import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlButton } from './button';

export class VlTestToggleButton extends VlElement {
  async getButton() {
    const button = await this.getElementInShadow(this, '[is="vl-button"]');
    if (button) {
      return new VlButton(this.driver, button);
    }
    return undefined;
  }

  async hasHiddenText() {
    const text = await this.getElementInShadow(this, '[is="vl-text"]');
    const hidden = text.getAttribute('data-vl-visually-hidden');
    return !!text && !!hidden;
  }

  async isDisabled() {
    return this.hasAttribute('disabled');
  }

  // Controlled toggle button

  async setActive(set) {
    await this.driver.executeScript(`return arguments[0].active = ${set}`, this);
  }

  async isActive() {
    return !!(await this.driver.executeScript('return arguments[0].active', this));
  }
}
