import { VlElement, By } from '../../../../../../utils/test';
import { VlRadio } from '../../../../test/e2e/radio';

export class VlRadioGroup extends VlElement {
  async getRadios() {
    const elements = await this.findElements(By.css('vl-radio'));
    return Promise.all(elements.map((element) => new VlRadio(this.driver, element)));
  }

  async getRadio(number) {
    return this._getRadio(number);
  }

  async hasFocus() {
    const radios = await this.getRadios();
    const radiosFocus = await Promise.all(radios.map((radio) => radio.hasFocus()));
    return radiosFocus.includes(true);
  }

  async _getRadio(number) {
    const element = await this.findElement(By.css(`vl-radio:nth-of-type(${number})`));
    return new VlRadio(this.driver, element);
  }
}
