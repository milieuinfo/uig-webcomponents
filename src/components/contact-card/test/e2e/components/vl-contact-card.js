const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const {VlInfoblock} = require('vl-ui-infoblock').Test;
const {VlProperties} = require('vl-ui-properties').Test;

class VlContactCard extends VlElement {
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

module.exports = VlContactCard;
