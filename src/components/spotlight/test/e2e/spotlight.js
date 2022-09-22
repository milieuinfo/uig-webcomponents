import { VlElement, By } from '../../../../utils/test';

export class VlTestSpotlight extends VlElement {
  async hasClassName(className) {
    const input = await this.getElementInShadow(this, 'article');
    const classValue = await input.getAttribute('class');
    return classValue.includes(className);
  }

  async hasAltClassName() {
    return this.hasClassName('vl-spotlight--alt');
  }

  async hasXSmallClassName() {
    return this.hasClassName('vl-spotlight--xs');
  }

  async hasSmallClassName() {
    return this.hasClassName('vl-spotlight--s');
  }

  async hasLargeClassName() {
    return this.hasClassName('vl-spotlight--l');
  }

  async getTitleSlot() {
    return this.getElementInShadow(this, 'h3[class=vl-spotlight__title]>[slot=title]');
  }

  async hasTitle() {
    const slotElement = await this.getTitleSlot();
    return slotElement != null;
  }

  async getTitle() {
    const slotElement = await this.getTitleSlot();
    return slotElement.getText();
  }

  async getSubTitleSlot() {
    return this.getElementInShadow(this, 'p[class=vl-spotlight__subtitle]>[slot=subtitle]');
  }

  async hasSubTitle() {
    const slotElement = await this.getSubTitleSlot();
    return slotElement != null;
  }

  async getSubTitle() {
    const slotElement = await this.getSubTitleSlot();
    return slotElement.getText();
  }

  async getContentSlot() {
    return this.getElementInShadow(this, 'div[class=vl-spotlight__content]>[slot=content]');
  }

  async hasContent() {
    const slotElement = await this.getContentSlot();
    return slotElement != null;
  }

  async getContent() {
    const slotElement = await this.getContentSlot();
    return slotElement.getText();
  }

  async getTextSlot() {
    return this.getElementInShadow(this, 'p[class=vl-spotlight__text]>[slot=text]');
  }

  async hasText() {
    const slotElement = await this.getTextSlot();
    return slotElement != null;
  }

  async getText() {
    const slotElement = await this.getTextSlot();
    return slotElement.getText();
  }
}
