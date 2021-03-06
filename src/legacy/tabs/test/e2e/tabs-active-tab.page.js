import { Page, config } from '../../../../utils/test';
import { VlTabs } from './tabs';

export class VlTabsActiveTabPage extends Page {
  async getTabs() {
    return this._getTabs('#tabs');
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/tabs/test/e2e/tabs-active-tab.html`);
  }

  async _getTabs(selector) {
    return new VlTabs(this.driver, selector);
  }
}
