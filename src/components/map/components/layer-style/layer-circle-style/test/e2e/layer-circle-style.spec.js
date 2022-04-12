import { assert, getDriver } from '../../../../../../../utils/test';
import { VlMapCircleStylePage } from './layer-circle-style.page.js';

describe('vl-map-circle-style', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlMapCircleStylePage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I can define a layer with circle style with default style', async () => {
    const map = await vlMapPage.getStandardMap();
    const style = await vlMapPage.getLayerCircleStyle(map);

    await assert.eventually.equal(style.getColor(), 'rgba(2, 85, 204, 0.8)');
    await assert.eventually.equal(style.getSize(), '5');
    await assert.eventually.isNull(style.getBorderColor());
    await assert.eventually.isNull(style.getBorderSize());
    await assert.eventually.isNull(style.getTextColor());
    await assert.eventually.isNull(style.getTextOffsetX());
    await assert.eventually.isNull(style.getTextOffsetY());
  });

  it('as user i can define circle style layer with custom style', async () => {
    const map = await vlMapPage.getModifiedMap();
    const style = await vlMapPage.getLayerCircleStyle(map);

    await assert.eventually.equal(style.getColor(), '#ffe615');
    await assert.eventually.equal(style.getSize(), '5');
    await assert.eventually.equal(style.getBorderColor(), '#000');
    await assert.eventually.equal(style.getBorderSize(), '1');
    await assert.eventually.isNull(style.getTextColor());
    await assert.eventually.isNull(style.getTextOffsetX());
    await assert.eventually.isNull(style.getTextOffsetY());
  });
});
