import { VlElement, By } from '../util/vl-element';
import { VlButton } from './button';

export class VlForm extends VlElement {
  async submit() {
    const button = await this._getSubmitButton();
    await button.click();
  }

  async _getSubmitButton() {
    const element = await this.findElement(By.css('button[type="submit"]'));
    return new VlButton(this.driver, element);
  }
}
