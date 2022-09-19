import { VlElementTester } from '../base/vl-element.tester';
import { By } from '../util/tester.setup';
import { VlPropertiesList } from './list';

export class VlPropertiesColumn extends VlElementTester {
    async isFullSize() {
        return this.hasAttribute('full');
    }

    async getPropertiesList() {
        return new VlPropertiesList(this.driver, await this.findElement(By.css('[is="vl-properties-list"]')));
    }
}
