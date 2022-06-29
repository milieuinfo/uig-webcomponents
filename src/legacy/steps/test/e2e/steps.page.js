import { VlSteps } from './steps';
import { config, Page } from '../../../../utils/test';

export class VlStepsPage extends Page {
  async getSteps(number) {
    return this._getSteps(`#vl-steps-${number}`);
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/steps/test/e2e/index.html`);
  }

  async _getSteps(selector) {
    return new VlSteps(this.driver, selector);
  }
}
