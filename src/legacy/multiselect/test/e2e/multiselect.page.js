import { VlDatepicker } from '../../../datepicker/test/e2e/datepicker';
import { Key, By, config, Page } from '../../../../utils/test';
import { VlMultiSelect } from './multiselect';

export class VlMultiSelectPage extends Page {
  async _getMultiSelect(selector) {
    return new VlMultiSelect(this.driver, selector);
  }

  async getStandardMultiselect() {
    return this._getMultiSelect('#multiselect');
  }

  async getVoorgeselecteerdeMultiselect() {
    return this._getMultiSelect('#multiselect-voorgeselecteerd');
  }

  async getGegroepeerdeMultiselect() {
    return this._getMultiSelect('#multiselect-gegroepeerd');
  }

  async getErrorMultiselect() {
    return this._getMultiSelect('#multiselect-error');
  }

  async getSuccessMultiselect() {
    return this._getMultiSelect('#multiselect-success');
  }

  async getDisabledMultiselect() {
    return this._getMultiSelect('#multiselect-disabled');
  }

  async getMultiselectMetSpecifiekAantalResultaten() {
    return this._getMultiSelect('#multiselect-specifiek');
  }

  async getMultiselectMetOnbeperkteResultaten() {
    return this._getMultiSelect('#multiselect-onbeperkt');
  }

  async getDatepickerMultiselect() {
    return this._getMultiSelect('#multiselect-datepicker');
  }

  async getChangeEventMultiselect() {
    return this._getMultiSelect('#change-listener');
  }

  async getEnableDisableMethodeMultiselect() {
    return this._getMultiSelect('#vl-multiselect-enable-disable-methode');
  }

  async getSetGetMethodeMultiselect() {
    return this._getMultiSelect('#vl-multiselect-set-get-methode');
  }

  async getDatepicker() {
    return new VlDatepicker(this.driver, '#datepicker');
  }

  async enable() {
    return this.driver.findElement(By.css('#enable')).click();
  }

  async disable() {
    return this.driver.findElement(By.css('#disable')).click();
  }

  async kiesDuitsland() {
    return this.driver.findElement(By.css('#duitsland')).click();
  }

  async kiesBelgieEnNederland() {
    return this.driver.findElement(By.css('#be-nl')).click();
  }

  async verwijderSelectie() {
    return this.driver.findElement(By.css('#verwijder')).click();
  }

  async closeAnyOpenDropdowns() {
    const body = await this.driver.findElement(By.css('body'));
    await body.sendKeys(Key.ESCAPE);
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/multiselect/test/e2e/index.html`);
  }
}


