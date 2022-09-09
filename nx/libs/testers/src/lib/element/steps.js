import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlStep } from './step';
import { VlDurationStep } from './duration-step';

export class VlSteps extends VlElement {
  async getStep(number) {
    const elements = await this.getSteps();
    return elements[--number];
  }

  async getDurationStep(number) {
    const elements = await this.getDurationSteps();
    return elements[--number];
  }

  async getSteps() {
    const elements = await this.shadowRoot.findElements(By.css('.vl-step'));
    return Promise.all(elements.map((element) => new VlStep(this.driver, element)));
  }

  async getDurationSteps() {
    const elements = await this.shadowRoot.findElements(By.css('.vl-duration-step'));
    return Promise.all(elements.map((element) => new VlDurationStep(this.driver, element)));
  }
}
