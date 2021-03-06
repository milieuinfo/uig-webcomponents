import { config, Page } from '../../../../utils/test';
import { VlDatepicker} from './datepicker';
import { VlButton } from '../../../../components/button/test/e2e/button';

export class VlDatepickerPage extends Page {
  async _getDatepicker(selector) {
    const datepicker = await new VlDatepicker(this.driver, selector);
    await datepicker.scrollIntoView();
    return datepicker;
  }

  async _getButton(selector) {
    return new VlButton(this.driver, selector);
  }

  async getDefaultDatepicker() {
    return this._getDatepicker('#default-datepicker');
  }

  async getCustomFormatDatepicker() {
    return this._getDatepicker('#custom-format-datepicker');
  }

  async getDefaultDateDatepicker() {
    return this._getDatepicker('#prefilled-datepicker');
  }

  async getMinMaxDatepicker() {
    return this._getDatepicker('#min-max-datepicker');
  }

  async getRangeDatepicker() {
    return this._getDatepicker('#range-datepicker');
  }

  async getAlternatieveVisualisatieDatepicker() {
    return this._getDatepicker('#alternatieve-visualisatie-datepicker');
  }

  async getTimepicker() {
    return this._getDatepicker('#timepicker-datepicker');
  }

  async getMinMaxTimepicker() {
    return this._getDatepicker('#timepicker-min-max-datepicker');
  }

  async getMeridianTimepicker() {
    return this._getDatepicker('#timepicker-am-pm-datepicker');
  }

  async getDateTimepicker() {
    return this._getDatepicker('#date-time-datepicker');
  }

  async getDotFormatDatepicker() {
    return this._getDatepicker('#datepicker-1');
  }

  async clickDotFormatButton() {
    const button = await this._getButton('#button-1');
    await button.click();
  }

  async getSlashFormatDatepicker() {
    return this._getDatepicker('#datepicker-2');
  }

  async clickSlashFormatButton() {
    const button = await this._getButton('#button-2');
    await button.click();
  }

  async getRangeFormatDatepicker() {
    return this._getDatepicker('#datepicker-3');
  }

  async clickRangeFormatButton() {
    const button = await this._getButton('#button-3');
    await button.click();
  }

  async getTimeFormatDatepicker() {
    return this._getDatepicker('#datepicker-4');
  }

  async clickTimeFormatButton() {
    const button = await this._getButton('#button-4');
    await button.click();
  }

  async getDateTimeFormatDatepicker() {
    return this._getDatepicker('#datepicker-5');
  }

  async clickDateTimeFormatButton() {
    const button = await this._getButton('#button-5');
    await button.click();
  }

  async getErrorDatepicker() {
    return this._getDatepicker('#error-datepicker');
  }

  async getSuccessDatepicker() {
    return this._getDatepicker('#success-datepicker');
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/datepicker/test/e2e/index.html`);
  }
}
