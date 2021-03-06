import { assert, getDriver } from '../../../../../../utils/test';
import { VlTestMapSideSheetMenuItemPage } from '../../../side-sheet-menu-item/test/e2e/side-sheet-menu-item.page.js';

describe('vl-map-side-sheet-menu-item', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlTestMapSideSheetMenuItemPage(getDriver());
    return vlMapPage.load();
  });

  it('als gebruiker zie ik de menu titel', async () => {
    const map = await vlMapPage.getMap();
    const sideSheet = await map.getSideSheet();
    const menu = await sideSheet.getMenu();
    const menuItem = await menu.getMenuItem(1);
    await assert.eventually.equal(menuItem.getTitle(), 'Terug naar resultaten');
  });

  it('als gebruiker zie ik de menu inhoud', async () => {
    const map = await vlMapPage.getMap();
    const sideSheet = await map.getSideSheet();
    const menu = await sideSheet.getMenu();
    const menuItem = await menu.getMenuItem(1);
    const slotElements = await menuItem.getMessagesSlotElements();
    await assert.eventually.equal(slotElements[0].getText(), 'Gelieve een resultaat aan te maken');
  });
});
