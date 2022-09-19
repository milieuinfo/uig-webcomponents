import { VlElementTester } from '../base/vl-element.tester';
import { By } from '../util/tester.setup';
import { VlInfoblock } from './infoblock';
import { VlProperties } from '../elements/properties';

export class VlContactCard extends VlElementTester {
    async getInfoblockElement() {
        return new VlInfoblock(this.driver, await this._getSlotElement('info'));
    }

    async getPropertiesElement() {
        return new VlProperties(this.driver, await this._getSlotElement('properties'));
    }

    async _getSlotElement(name) {
        const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
        const elements = await this.getAssignedElements(slot);
        return elements[0];
    }
}
