import { VlElementTester } from '../base/vl-element.tester';
import { By } from '../util/tester.setup';

class VlSearchResultContent extends VlElementTester {
    async getDescription(number) {
        return this._getElementText('dt', number);
    }

    async getValue(number) {
        return this._getElementText('dd', number);
    }

    async _getElementText(selector, number) {
        const element = await this.findElements(By.css(selector));
        const vlElement = await new VlElementTester(this.driver, element[--number]);
        return vlElement.getText();
    }
}

export class VlSearchResult extends VlElementTester {
    async getTitle() {
        const title = await this.findElement(By.css('.vl-search-result__title'));
        return title.getText();
    }

    async getSubTitle() {
        const title = await this.findElement(By.css('p.vl-search-result__content-group'));
        return title.getText();
    }

    async getContent(number) {
        const element = await this._contentElements();
        return element[--number];
    }

    async _contentElements() {
        const elements = await this.findElements(By.css('div.vl-search-result__content-group > *'));
        return await Promise.all(elements.map((element) => new VlSearchResultContent(this.driver, element)));
    }
}
