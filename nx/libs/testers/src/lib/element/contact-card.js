import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlInfoblock } from "./infoblock";
import { VlProperties } from "./properties";

export class VlContactCard extends VlElement {
  async getInfoblockElement() {
    return new VlInfoblock(this.driver, await this._getSlotElement("info"));
  }

  async getPropertiesElement() {
    return new VlProperties(
      this.driver,
      await this._getSlotElement("properties")
    );
  }

  async _getSlotElement(name) {
    const slot = await this.shadowRoot.findElement(
      By.css(`slot[name="${name}"]`)
    );
    const elements = await this.getAssignedElements(slot);
    return elements[0];
  }
}
