import { VlElement } from '../../../../utils/test';

export class VlPillElement extends VlElement {
  async getType() {
    return this.getAttribute('data-vl-type');
  }

  async isSuccess() {
    return (await this.getType()) === 'success';
  }

  async isWarning() {
    return (await this.getType()) === 'warning';
  }

  async isError() {
    return (await this.getType()) === 'error';
  }

  async isDisabled() {
    return this.hasAttribute('disabled');
  }
}
