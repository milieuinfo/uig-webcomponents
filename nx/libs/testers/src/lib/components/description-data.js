import { VlElementTester } from '../base/vl-element.tester';
import { By } from '../util/tester.setup';
import { VlDescriptionDataItem } from './description-data-item';

export class VlDescriptionData extends VlElementTester {
    async getDescriptionDataBlocks() {
        const elements = await this.findElements(By.css('vl-description-data-item'));
        return Promise.all(elements.map(async (element) => new VlDescriptionDataItem(this.driver, element)));
    }

    async getDescriptionDataBlock(index) {
        const elements = await this.getDescriptionDataBlocks();
        return new VlDescriptionDataItem(this.driver, elements[index]);
    }
}
