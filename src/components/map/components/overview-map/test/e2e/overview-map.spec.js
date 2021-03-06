import { assert, getDriver } from '../../../../../../utils/test';
import { VlTestMapOverviewMapPage } from './overview-map.page.js';

describe('vl-map-overview-map', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlTestMapOverviewMapPage(getDriver());
    return vlMapPage.load();
  });

  it('als gebruiker zie ik dat de overviewmap wordt gerenderd', async () => {
    const map = await vlMapPage.getMap();

    await assert.eventually.isDefined(map.getOverviewMap());
  });

  it('als gebruiker kan ik kan tussen de basiskaartlagen switchen', async () => {
    const map = await vlMapPage.getMap();
    await assert.eventually.equal(map.getActiveBaseLayerTitle(), 'GRB basis laag grijs');
    const overviewMap = await map.getOverviewMap();

    for (const layerName of ['GRB basis laag', 'GRB ortho laag', 'GRB basis laag grijs']) {
      await overviewMap.toggleBaseLayer();
      await assert.eventually.equal(map.getActiveBaseLayerTitle(), layerName);
    }
  });
});
