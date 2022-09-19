import { VlElementTester } from '../base/vl-element.tester';
import { By } from '../util/tester.setup';

export default class VlLinkList extends VlElementTester {
    async getListItems() {
        return this.findElements(By.css('[is="vl-link-list-item"]'));
    }
    async getListItem(index) {
        const listItems = await this.getListItems();
        return new VlLinkListItem(this.driver, listItems[index]);
    }
}

class VlLinkListItem extends VlElementTester {}
