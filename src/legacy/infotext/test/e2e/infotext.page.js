import { Page, config } from '../../../../utils/test';
import { VlInfotext } from './infotext';

export class VlInfotextPage extends Page {
  async _getInfotext(selector) {
    return new VlInfotext(this.driver, selector);
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/infotext/test/e2e/index.html`);
  }

  async getInfotext() {
    return this._getInfotext('#infotext');
  }

  async getInfotextBadge() {
    return this._getInfotext('#infotext-badge');
  }

  async getComplexeInfotextBadge() {
    return this._getInfotext('#infotext-badge-complex-content');
  }
}
