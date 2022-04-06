import { assert, getDriver } from '../../../../../../utils/test';
import { VlMapSearchPage } from './search.page.js';

describe('vl-map-search', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlMapSearchPage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I can see that the search is available', async () => {
    const map = await vlMapPage.getMap();
    await assert.eventually.isTrue(map.hasSearch());
  });

  it('as a user I can search with the search functionality', async () => {
    const map = await vlMapPage.getMap();
    const search = await map.getSearch();
    await search.open();
    await search.search('Tems');
    await assert.eventually.isFalse(search.hasNoResults());
  });

  it('as a user i can use the search functionality and the map will zoom', async () => {
    const map = await vlMapPage.getMap();
    const search = await map.getSearch();
    await assert.eventually.isTrue(map.hasZoom(2));
    await search.open();
    await search.zoomTo('Tems');
    await assert.eventually.isTrue(map.hasZoom(5));
    await vlMapPage.load();
  });

  it('as a user I can search with the search functionality but if nothing was found there are no options', async () => {
    const map = await vlMapPage.getMap();
    const search = await map.getSearch();

    await search.open();
    await search.search('Foobar');

    await assert.eventually.isTrue(search.hasNoResults());
  });

  it('as a user I see that the map is zoomed after I use the search functionality, which was only linked to the map afterwards', async () => {
    const map = await vlMapPage.getBindMap();
    await assert.eventually.isTrue(map.hasZoom(2));
    await vlMapPage.clickBindMapButton();

    const search = await vlMapPage.getBindMapSearch();
    await search.open();
    await search.zoomTo('Tems');

    await assert.eventually.equal(search.getSelectedValue(), 'Temse');
    await assert.eventually.isTrue(map.hasZoom(5));
    await vlMapPage.load();
  });

  it('as a user I can search by Lambert coordinate and will zoom the map', async () => {
    const map = await vlMapPage.getMap();
    const search = await map.getSearch();

    await assert.eventually.isTrue(map.hasZoom(2));
    await search.open();
    await search.zoomTo('104719.27, 192387.25');

    await assert.eventually.isTrue(map.hasZoom(14));
    await vlMapPage.load();
  });

  it('as a user I can search by Lambert coordinate, choose a suggested location and will zoom the map', async () => {
    const map = await vlMapPage.getMap();
    const search = await map.getSearch();

    await assert.eventually.isTrue(map.hasZoom(2));
    await search.open();
    await search.search('104719.27, 192387.25');
    await search.selectByIndex(1);

    await assert.eventually.isTrue(map.hasZoom(14));
    await vlMapPage.load();
  });
});
