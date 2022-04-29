import { VlSideSheet } from '../../../../../side-sheet/test/e2e/side-sheet.js';
import { By } from '../../../../../../utils/test';
import { VlTestMapSideSheetMenu } from '../../../side-sheet-menu/test/e2e/side-sheet-menu.js';

export class VlTestMapSideSheet extends VlSideSheet {
  async getMenu() {
    const menu = await this.findElement(By.css('vl-map-side-sheet-menu'));
    return new VlTestMapSideSheetMenu(this.driver, menu);
  }
}
