import { VlElement, By } from '../../../../../../utils/test';
import { VlTestMapSideSheetMenuItem } from '../../../side-sheet-menu-item/test/e2e/side-sheet-menu-item.js';

export class VlTestMapSideSheetMenu extends VlElement {
  async getMenuItem(number) {
    const menuItems = await this.getMenuItems();
    return menuItems[--number];
  }

  async getMenuItems() {
    const menuItems = await this.findElements(By.css('vl-map-side-sheet-menu-item'));
    return Promise.all(menuItems.map((menuItem) => new VlTestMapSideSheetMenuItem(this.driver, menuItem)));
  }
}
