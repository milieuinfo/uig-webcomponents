import { VlElement } from '../../../../utils/test';

export class VlFormElement extends VlElement {
  async text() {
    const textContents = await this.getText();
    const regex = new RegExp('\n', 'g');
    return textContents.replace(regex, '').trim();
  }
}

export class VlFormLabel extends VlFormElement {
  async isLight() {
    return this.hasAttribute('light');
  }

  async isBlock() {
    return this.hasAttribute('block');
  }

  async isFor() {
    return this.getAttribute('for');
  }

  async text() {
    const textContents = await this.getText();
    const regex = new RegExp('\n', 'g');
    return textContents.replace(regex, '').trim();
  }
}

export class VlFormAnnotation extends VlFormElement {
  async isBlock() {
    return this.hasAttribute('block');
  }
}

export class VlFormValidationMessage extends VlFormElement {
  async isError() {
    return this.hasClass('vl-form__error');
  }

  async isSuccess() {
    return this.hasClass('vl-form__success');
  }

  async isBlock() {
    return this.hasAttribute('block');
  }

  async text() {
    const textContents = await this.getText();
    const regex = new RegExp('\n', 'g');
    return textContents.replace(regex, '').trim();
  }
}
