import { assert, getDriver } from '../../../../../../../../utils/test';
import { VlMapFeaturesLayerPage } from './features-layer.page.js';

describe('vl-map-features-layer', async () => {
  let page;

  before(() => {
    page = new VlMapFeaturesLayerPage(getDriver());
    return page.load();
  });

  it('as a user I see the difference between a clustered layer and non-clustered layer', async () => {
    const standardLayer = (await (await page.getMapWithStandardLayer()).getLayers())[0];
    const clusteredLayer = (await (await page.getMapWithClusteredLayer()).getLayers())[0];
    await assert.eventually.isFalse(standardLayer.isClustered());
    await assert.eventually.isNull(standardLayer.getClusterDistance());
    await assert.eventually.isTrue(clusteredLayer.isClustered());
    await assert.eventually.equal(clusteredLayer.getClusterDistance(), 100);
  });

  it('as a user I see the difference between an auto extent layer and not auto extent layer', async () => {
    const standardLayer = (await (await page.getMapWithStandardLayer()).getLayers())[0];
    const autoExtentLayer = (await (await page.getMapWithAutoExtentLayer()).getLayers())[0];
    await assert.eventually.isFalse(standardLayer.hasAutoExtent());
    await assert.eventually.isNull(standardLayer.getAutoExtentMaxZoom());
    await assert.eventually.isTrue(autoExtentLayer.hasAutoExtent());
    await assert.eventually.equal(autoExtentLayer.getAutoExtentMaxZoom(), '3');
  });

  it('as a user I can request the number of features', async () => {
    const layer = (await (await page.getMapWithStandardLayer()).getLayers())[0];
    const features = await layer.getFeatures();
    assert.equal(features.length, 3);
  });
});
