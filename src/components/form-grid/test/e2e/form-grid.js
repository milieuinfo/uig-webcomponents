import { VlGrid, VlColumn } from "../../../grid/test/e2e/grid";

class VlFormGrid extends VlGrid {
  get _classPrefix() {
    return "vl-form-grid--";
  }
}

class VlFormColumn extends VlColumn {
  get _columnClassPrefix() {
    return "vl-form-col--";
  }

  get _pushClassPrefix() {
    return "vl-form-push--";
  }
}

export { VlFormGrid, VlFormColumn };
