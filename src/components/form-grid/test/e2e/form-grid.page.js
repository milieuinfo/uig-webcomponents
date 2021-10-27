import { Page, config } from "../../../../utils/test";
import { VlFormGrid, VlFormColumn } from "./form-grid";

class VlFormGridPage extends Page {
  async _getVlFormGrid(selector) {
    return new VlFormGrid(this.driver, selector);
  }

  async _getVlFormColumn(selector) {
    return new VlFormColumn(this.driver, selector);
  }

  async load() {
    await super.load(config.baseUrl + "components/form-grid/test/e2e");
  }

  async getFormGrid() {
    return this._getVlFormGrid('[is="vl-form-grid"]');
  }

  async getNameLabelFormColumn() {
    return this._getVlFormColumn("#surname-label-column");
  }

  async getNameInputFormColumn() {
    return this._getVlFormColumn("#surname-input-column");
  }
}

export default VlFormGridPage;
