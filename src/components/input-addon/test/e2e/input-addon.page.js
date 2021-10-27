import { VlInputAddon, VlButtonInputAddon } from "./input-addon";
import { Page, config } from "../../../../utils/test";
import VlTooltip from "../../../tooltip/test/e2e/tooltip";

class VlInputAddonPage extends Page {
  async _getInputAddon(selector) {
    return new VlInputAddon(this.driver, selector);
  }

  async _getButtonInputAddon(selector) {
    return new VlButtonInputAddon(this.driver, selector);
  }

  async load() {
    await super.load(config.baseUrl + "components/input-addon/test/e2e");
  }

  async getInputAddon() {
    return this._getInputAddon("#input-addon");
  }

  async getTooltipFromInputAddon() {
    return new VlTooltip(this.driver, "#tooltip");
  }

  async getInputAddonButton() {
    return this._getButtonInputAddon("#button-input-addon");
  }
}

export default VlInputAddonPage;
