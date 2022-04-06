import { assert, getDriver } from '../../../../../../utils/test';
import { VlMapSideSheetMenuItemPage } from '../../side-sheet-menu/side-sheet-menu-item/test/e2e/side-sheet-menu-item.page';

describe('vl-map-side-sheet-menu-item', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlMapSideSheetMenuItemPage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I see the menu title', async () => {
    const map = await vlMapPage.getMap();
    const sideSheet = await map.getSideSheet();
    const menu = await sideSheet.getMenu();
    const menuItem = await menu.getMenuItem(1);
    await assert.eventually.equal(menuItem.getTitle(), 'Terug naar resultaten');
  });

  it('as a user I see the menu content', async () => {
    const map = await vlMapPage.getMap();
    const sideSheet = await map.getSideSheet();
    const menu = await sideSheet.getMenu();
    const menuItem = await menu.getMenuItem(1);
    const slotElements = await menuItem.getMessagesSlotElements();
    await assert.eventually.equal(slotElements[0].getText(), 'Gelieve een resultaat aan te maken');
  });
});
