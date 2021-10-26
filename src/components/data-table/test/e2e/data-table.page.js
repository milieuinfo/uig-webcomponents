import VlDataTable from "./data-table";
import { Page, config } from "../../../../utils/test";

export default class VlDataTablePage extends Page {
  async _getDataTable(selector) {
    return new VlDataTable(this.driver, selector);
  }

  async getDataTableWithHoverLines() {
    return this._getDataTable("#data-table-hover");
  }

  async getDataTableMatrix() {
    return this._getDataTable("#data-table-matrix-column-titles");
  }

  async getDataTableMatrixJoinedRowTitles() {
    return this._getDataTable("#data-table-matrix-row-titles");
  }

  async getDataTableLined() {
    return this._getDataTable("#data-table-lined");
  }

  async getDataTableLinedJoinRowTitles() {
    return this._getDataTable("#data-table-lined-row-titles");
  }

  async getDataTableZebra() {
    return this._getDataTable("#data-table-zebra");
  }
  async getDataTableCollapsedMedium() {
    return this._getDataTable("#data-table-collapsed-medium");
  }

  async getDataTableCollapsedSmall() {
    return this._getDataTable("#data-table-collapsed-small");
  }

  async getDataTableCollapsedExtraSmall() {
    return this._getDataTable("#data-table-collapsed-extra-small");
  }

  async load() {
    await super.load(config.baseUrl + "components/data-table/test/e2e");
  }
}
