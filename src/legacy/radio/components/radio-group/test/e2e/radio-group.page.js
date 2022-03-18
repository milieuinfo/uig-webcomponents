import { Page, config } from '../../../../../../utils/test';
import { VlRadioGroup } from './radio-group';

export class VlRadioGroupPage extends Page {
  async getRadioGroup(number) {
    return this._getRadioGroup(`#radio-group-${number}`);
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/radio/components/radio-group/test/e2e`);
  }

  async _getRadioGroup(selector) {
    return new VlRadioGroup(this.driver, selector);
  }
}
