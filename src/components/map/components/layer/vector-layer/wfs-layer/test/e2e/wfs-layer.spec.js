import { assert, getDriver } from '../../../../../../../../utils/test';
import { VlTestMapWfsLayerPage } from './wfs-layer.page.js';

describe('vl-map-wfs-layer', async () => {
  let page;

  before(() => {
    page = new VlTestMapWfsLayerPage(getDriver());
    return page.load();
  });

  it('als gebruiker kan ik de details van de wfs opvragen', async () => {
    const layer = (await (await page.getMapWithStandardLayer()).getWfsLayers())[0];

    await assert.eventually.isTrue(layer.isVisible());
    await assert.eventually.equal(layer.getName(), 'Oppervlaktewaterlichamen');
    await assert.eventually.equal(layer.getUrl(), 'https://geoserver.vmm.be/geoserver/vmm/wfs');
    await assert.eventually.equal(layer.getLayers(), 'owl_l');
  });
});
