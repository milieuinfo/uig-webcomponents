import { VlSideSheet } from "../../../../side-sheet/test/e2e/components/vl-side-sheet.js";
import { By } from "../../../../../utils/test";
import { VlMapSideSheetMenu } from "./vl-map-side-sheet-menu.js";

export class VlMapSideSheet extends VlSideSheet {
  async getMenu() {
    const menu = await this.findElement(By.css("vl-map-side-sheet-menu"));
    return new VlMapSideSheetMenu(this.driver, menu);
  }
}
