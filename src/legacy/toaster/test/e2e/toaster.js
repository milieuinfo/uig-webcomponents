import { StaleElementReferenceError } from 'selenium-webdriver/lib/error';
import { VlElement, By } from '../../../../utils/test';
import VlAlert from '../../../../components/alert/test/e2e/alert';

export class VlToaster extends VlElement {
  async shouldFadeOut() {
    return this.hasAttribute('fadeout');
  }

  async isLocatedTopLeft() {
    return this.hasAttribute('top-left');
  }

  async isLocatedTopRight() {
    return this.hasAttribute('top-right');
  }

  async isLocatedBottomLeft() {
    return this.hasAttribute('bottom-left');
  }

  async isLocatedBottomRight() {
    return this.hasAttribute('bottom-right');
  }

  async getAlerts() {
    const children = await this.findElements(By.css('vl-alert'));
    if (children.length > 0) {
      try {
        return await Promise.all(children.map((child) => new VlAlert(this.driver, child)));
      } catch (error) {
        if (error instanceof StaleElementReferenceError) {
          return this.getAlerts();
        }
        throw error;
      }
    } else {
      return [];
    }
  }
}
