import { assert, getDriver } from '../../../../../../../utils/test';
import { VlMapWmtsLayerPage } from './wmts-layer.page.js';

describe('vl-map-wmts-layer', async () => {
  let driver;
  let page;

  before(() => {
    driver = getDriver();
    page = new VlMapWmtsLayerPage(driver);
    return page.load();
  });

  it('as a user I can request the details of the wmts', async () => {
    const map = await page.getMapWithStandardLayer();
    const layers = await map.getWmtsLayers();
    await assert.eventually.isTrue(layers[0].isVisible());
    await assert.eventually.equal(layers[0].getName(), 'GRB Wegenkaart');
    await assert.eventually.equal(layers[0].getLayer(), 'grb_sel');
    await assert.eventually.equal(layers[0].getUrl(), 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts');
  });
});
