import { assert, getDriver } from '../../../../../../utils/test';
import { VlMapOverviewMapPage } from './overview-map.page.js';

describe('vl-map-overview-map', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlMapOverviewMapPage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I see that the overviewmap is being rendered', async () => {
    const map = await vlMapPage.getMap();

    await assert.eventually.isDefined(map.getOverviewMap());
  });

  it('as a user I can switch between the base map layers', async () => {
    const map = await vlMapPage.getMap();
    await assert.eventually.equal(map.getActiveBaseLayerTitle(), 'GRB basis laag grijs');
    const overviewMap = await map.getOverviewMap();

    for (const layerName of ['GRB basis laag', 'GRB ortho laag', 'GRB basis laag grijs']) {
      await overviewMap.toggleBaseLayer();
      await assert.eventually.equal(map.getActiveBaseLayerTitle(), layerName);
    }
  });
});
