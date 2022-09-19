import { VlElementTester } from '../base/vl-element.tester';
import { By } from '../util/tester.setup';
import { VlStep } from './step';
import { VlDurationStep } from '../elements/duration-step';

export class VlSteps extends VlElementTester {
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
