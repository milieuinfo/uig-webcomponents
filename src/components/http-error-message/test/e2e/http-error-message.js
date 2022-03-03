import { VlElement, By } from '../../../../utils/test';
import { VlTypography } from '../../../typography/test/e2e/typography';
import { VlButton } from '../../../button/test/e2e/button';

export default class VlHttpErrorMessage extends VlElement {
  async getTitle() {
    return (await this._getTitle()).getText();
  }

  async getContent() {
    const typography = await this._getTypography();
    const slot = await typography.shadowRoot.findElement(By.css(`slot[name="text"]`));
    const elements = await typography.getAssignedElements(slot);
    const secondSlotElements = await this.getAssignedElements(elements[0]);
    return secondSlotElements[0];
  }

  async clickOnAction() {
    return (await this._getAction()).click();
  }

  async _getTitle() {
    return this.shadowRoot.findElement(By.css('#title'));
  }

  async _getTypography() {
    const element = await this.shadowRoot.findElement(By.css('#text'));
    console.log('#text element: ', element);
    return new VlTypography(this.driver, element);
  }

  async _getAction() {
    const element = await this.findElement(By.css('[is="vl-link-button"]'));
    return new VlButton(this.driver, element);
  }

  async getImage() {
    const smallImage = await this._getSmallImage();
    const normalImage = await this._getNormalImage();
    const smallImageSrc = await smallImage.getAttribute('src');
    const normalImageSrc = await normalImage.getAttribute('src');
    const smallImageAlt = await smallImage.getAttribute('alt');
    const normalImageAlt = await normalImage.getAttribute('alt');
    if (smallImageSrc !== normalImageSrc) {
      throw new Error('Small and normal image src have to be the same');
    }
    if (smallImageAlt !== normalImageAlt) {
      throw new Error('Small and normal image alt have to be the same');
    }
    return smallImage;
  }

  async _getNormalImage() {
    return new VlElement(this.driver, await this.shadowRoot.findElement(By.css('#image-normal')));
  }

  async _getSmallImage() {
    return new VlElement(this.driver, await this.shadowRoot.findElement(By.css('#image-small')));
  }
}
