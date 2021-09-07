import { VlElement, By } from "../../../../utils/test";
import { VlInfoblock } from "../../../infoblock/test/e2e/infoblock.js";
import { VlProperties } from "../../../properties/test/e2e/properties.js";

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
