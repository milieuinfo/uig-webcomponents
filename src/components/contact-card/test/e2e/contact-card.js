const { VlElement } = require("../../../../../test").Test;
const { By } = require("../../../../../test").Test.Setup;
const VlInfoblock = require("../../../infoblock/test/e2e/infoblock.js");
const { VlProperties } = require("../../../properties/test/e2e/properties.js");

class VlContactCard extends VlElement {
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

module.exports = VlContactCard;
