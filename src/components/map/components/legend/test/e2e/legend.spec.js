import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlTestMapLegend } from './legend.js';
import { LEGEND_PLACEMENT } from '../../enums/index.js';

const { sbUrl } = config;
const singleFeaturesLayerUrl = `${sbUrl}?id=custom-elements-vl-map-vl-map-legend-vl-map-legend-single-features-layer--default&viewMode=story`;
const multiFeaturesLayerUrl = `${sbUrl}?id=custom-elements-vl-map-vl-map-legend-vl-map-legend-multi-features-layer--default&viewMode=story`;
const singleFeaturesLayerWithSingleStyleUrl = `${sbUrl}?id=custom-elements-vl-map-vl-map-legend-vl-map-legend-single-features-layer-with-single-style--default&viewMode=story`;
const wfsLayerUrl = `${sbUrl}?id=custom-elements-vl-map-vl-map-legend-vl-map-legend-wfs-layer--default&viewMode=story`;
const defaultUrl = `${singleFeaturesLayerUrl}`;

const selector = 'vl-map-legend';

function getUrlWithPlacement(placement) {
  return `${defaultUrl}&args=placement:${placement}`;
}

describe('vl-map-legend', async () => {
  let driver;

  function delay(interval) {
    return it('should delay', (done) => {
      setTimeout(() => done(), interval);
    }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
  }

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the legend by default positioned in de bottom-right corner', async () => {
    await driver.get(defaultUrl);
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.equal(legend.getTop(), undefined);
    await assert.eventually.equal(legend.getLeft(), undefined);
    await assert.eventually.notEqual(legend.getBottom(), undefined);
    await assert.eventually.notEqual(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de top-left corner of placement attribute is ${LEGEND_PLACEMENT.TOP_LEFT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.TOP_LEFT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.notEqual(legend.getTop(), undefined);
    await assert.eventually.notEqual(legend.getLeft(), undefined);
    await assert.eventually.equal(legend.getBottom(), undefined);
    await assert.eventually.equal(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de top-right corner of placement attribute is ${LEGEND_PLACEMENT.TOP_RIGHT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.TOP_RIGHT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.notEqual(legend.getTop(), undefined);
    await assert.eventually.equal(legend.getLeft(), undefined);
    await assert.eventually.equal(legend.getBottom(), undefined);
    await assert.eventually.notEqual(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de bottom-left corner of placement attribute is ${LEGEND_PLACEMENT.BOTTOM_LEFT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.BOTTOM_LEFT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.equal(legend.getTop(), undefined);
    await assert.eventually.notEqual(legend.getLeft(), undefined);
    await assert.eventually.notEqual(legend.getBottom(), undefined);
    await assert.eventually.equal(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de bottom-right corner of placement attribute is ${LEGEND_PLACEMENT.BOTTOM_RIGHT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.BOTTOM_RIGHT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.equal(legend.getTop(), undefined);
    await assert.eventually.equal(legend.getLeft(), undefined);
    await assert.eventually.notEqual(legend.getBottom(), undefined);
    await assert.eventually.notEqual(legend.getRight(), undefined);
  });

  it(`as a user, when viewing a map with a single features layer with multiple styles, I can see the same amount of items in the legend as there are styles in the vl-map-features-layer`, async () => {
    await driver.get(singleFeaturesLayerUrl);
    const legend = await new VlTestMapLegend(driver, selector);

    const items = await legend.getLegendItems();

    await assert.equal(3, items.length);
    await assert.equal('Openbaar onderzoek', items[0].title);
    await assert.equal('Beslissing', items[1].title);
    await assert.equal('And another one', items[2].title);
  });

  it(`as a user, when viewing a map with a multiple features layers with a single style per layer, I can see the correct amount of items in the legend as there are styles with a valid style vl-data-name attribute or valid layer vl-data-name attribute `, async () => {
    await driver.get(multiFeaturesLayerUrl);
    const legend = await new VlTestMapLegend(driver, selector);

    const items = await legend.getLegendItems();

    await assert.equal(2, items.length);
    await assert.equal('Openbare onderzoeken laag', items[0].title);
    await assert.equal('Beslissing', items[1].title);
  });

  it(`as a user, when viewing a map with a single features layer with a single style in the layer, I can see the same amount of items in the legend as there are styles in the vl-map-features-layer`, async () => {
    await driver.get(singleFeaturesLayerWithSingleStyleUrl);
    const legend = await new VlTestMapLegend(driver, selector);

    const items = await legend.getLegendItems();

    await assert.equal(1, items.length);
    await assert.equal('Openbaar onderzoek', items[0].title);
  });

  it(`as a user, when viewing a map with a wfs layer with a single style in the layer, I can see the same amount of items in the legend as there are styles in the vl-map-wfs-layer`, async () => {
    await driver.get(wfsLayerUrl);
    const legend = await new VlTestMapLegend(driver, selector);

    const items = await legend.getLegendItems();

    await assert.equal(1, items.length);
    await assert.equal('Oppervlaktewaterlichamen', items[0].title);
  });
});
