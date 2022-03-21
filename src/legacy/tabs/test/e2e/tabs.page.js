import { Page, config } from '../../../../utils/test';
import { VlTabs } from './tabs';

export class VlTabsPage extends Page {
  async getTabs() {
    return this._getTabs('#tabs');
  }

  async getSlottedTabs() {
    return this._getTabs('#tabs-slotted');
  }

  async getAltTabs() {
    return this._getTabs('#tabs-alt');
  }

  async getActiveTabTabs() {
    return this._getTabs('#tabs-active-tab');
  }

  async load(url) {
    await super.load(url || `${config.baseUrl}legacy/tabs/test/e2e/vl-tabs`);
  }

  async loadHash(hash) {
    const url = await this.driver.getCurrentUrl();
    await this.driver.get(`${url}${hash}`);
    await this.driver.navigate().refresh();
  }

  async _getTabs(selector) {
    return new VlTabs(this.driver, selector);
  }
}
