import { assert, getDriver } from '../../../../../../../utils/test';
import { VlMapWmsLayerPage } from './wms-layer.page.js';

describe('vl-map-wms-layer', async () => {
  let page;

  before(() => {
    page = new VlMapWmsLayerPage(getDriver());
    return page.load();
  });

  it('as a user I can request the details of the tiled wms', async () => {
    const layer = (await (await page.getMapWithTiledWmsLayer()).getTiledWmsLayers())[0];

    await assert.eventually.isTrue(layer.isVisible());
    await assert.eventually.equal(layer.getName(), 'Gemeentegrenzen');
    await assert.eventually.equal(
      layer.getUrl(),
      'https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms',
    );
    await assert.eventually.equal(layer.getLayers(), 'GEM_GRENS');
    await assert.eventually.equal(layer.getVersion(), '1.3.0');
    await assert.eventually.equal(layer.getOpacity(), '1');
  });

  it('as a user I can request the details of the image wms', async () => {
    const layer = (await (await page.getMapWithImageWmsLayer()).getImageWmsLayers())[0];

    await assert.eventually.isTrue(layer.isVisible());
    await assert.eventually.equal(layer.getName(), 'Beschermingszones');
    await assert.eventually.equal(layer.getUrl(), 'https://www.dov.vlaanderen.be/geoserver/wms');
    await assert.eventually.equal(layer.getLayers(), 'grondwater:beschermingszones_2014');
    await assert.eventually.equal(layer.getVersion(), '1.3.0');
    await assert.eventually.equal(layer.getOpacity(), '0.7');
  });
});
