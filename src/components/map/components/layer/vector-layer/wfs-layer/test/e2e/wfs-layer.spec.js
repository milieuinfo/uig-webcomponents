import { assert, getDriver } from '../../../../../../../../utils/test';
import { VlMapWfsLayerPage } from './wfs-layer.page.js';

describe('vl-map-wfs-layer', async () => {
  let page;

  before(() => {
    page = new VlMapWfsLayerPage(getDriver());
    return page.load();
  });

  it('as a user I can request the details of the wfs', async () => {
    const layer = (await (await page.getMapWithStandardLayer()).getWfsLayers())[0];

    await assert.eventually.isTrue(layer.isVisible());
    await assert.eventually.equal(layer.getName(), 'Oppervlaktewaterlichamen');
    await assert.eventually.equal(layer.getUrl(), 'https://geoserver.vmm.be/geoserver/vmm/wfs');
    await assert.eventually.equal(layer.getLayers(), 'owl_l');
  });
});
