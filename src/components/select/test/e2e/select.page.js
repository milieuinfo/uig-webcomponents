import { VlSelect } from "./select";
import { Page, config, By } from "../../../../utils/test";

export class VlSelectPage extends Page {
  async _getSelect(selector) {
    return new VlSelect(this.driver, selector);
  }

  async getDefaultSelect() {
    return this._getSelect("#select-default");
  }

  async getErrorSelect() {
    return this._getSelect("#select-error");
  }

  async getSuccessSelect() {
    return this._getSelect("#select-success");
  }

  async getDressedSelect() {
    return this._getSelect("#select-dressed");
  }

  async getDressedToggleSuccessSelect() {
    return this._getSelect("#select-dressed-toggle-success");
  }

  async getSearchableSelect() {
    return this._getSelect("#select-searchable");
  }

  async getNotSearchableSelect() {
    return this._getSelect("#select-not-searchable");
  }

  async getDisabledSelect() {
    return this._getSelect("#select-disabled");
  }

  async getDeletableSelect() {
    return this._getSelect("#select-deletable");
  }

  async getLimitedSearchResultsSelect() {
    return this._getSelect("#select-limited-search-results");
  }

  async getUnlimitedSearchResultsSelect() {
    return this._getSelect("#select-unlimited-search-results");
  }

  async getDynamicSelect() {
    return this._getSelect("#select-dynamic");
  }

  async getDynamicGroupingSelect() {
    return this._getSelect("#select-dynamic-grouping");
  }

  async getSelectUndressedGrouping() {
    return this._getSelect("#select-undressed-grouping");
  }

  async getDresUndressSelect() {
    return this._getSelect("#select-dress-undress-methode");
  }

  async getEnableDisableSelect() {
    return this._getSelect("#select-enable-disable-methode");
  }

  async getSetMethodeSelect() {
    return this._getSelect("#select-set-get-methode");
  }

  async getSearchValue() {
    return (await this.driver.findElement(By.css("#search-value"))).getText();
  }

  async activateDynamicData() {
    return (
      await this.driver.findElement(By.css("#activate-data-button"))
    ).click();
  }

  async activateDynamicDataGrouping() {
    return (
      await this.driver.findElement(By.css("#activate-data-grouping-button"))
    ).click();
  }

  async toggleSuccess() {
    return (
      await this.driver.findElement(By.css("#toggle-success-button"))
    ).click();
  }

  async dress() {
    return (await this.driver.findElement(By.css("#dress-button"))).click();
  }

  async undress() {
    return (await this.driver.findElement(By.css("#undress-button"))).click();
  }

  async enable() {
    return (await this.driver.findElement(By.css("#enable-button"))).click();
  }

  async disable() {
    return (await this.driver.findElement(By.css("#disable-button"))).click();
  }

  async select() {
    return (await this.driver.findElement(By.css("#select-button"))).click();
  }

  async remove() {
    return (await this.driver.findElement(By.css("#remove-button"))).click();
  }

  async load() {
    await super.load(config.baseUrl + "components/select/test/e2e");
  }
}
