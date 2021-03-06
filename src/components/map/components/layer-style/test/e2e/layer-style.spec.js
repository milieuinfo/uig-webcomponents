import { assert, getDriver } from '../../../../../../utils/test';
import { VlTestMapLayerStylePage } from './layer-style.page.js';

describe('vl-map-layer-style', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlTestMapLayerStylePage(getDriver());
    return vlMapPage.load();
  });

  it('als gebruiker kan ik een layer definiëren met standaard stijl', async () => {
    const map = await vlMapPage.getStandardMap();
    const style = await vlMapPage.getLayerStyle(map);

    await assert.eventually.equal(style.getColor(), 'rgba(2, 85, 204, 0.8)');
    await assert.eventually.isNull(style.getBorderColor());
    await assert.eventually.isNull(style.getBorderSize());
    await assert.eventually.isNull(style.getTextColor());
    await assert.eventually.isNull(style.getTextBackgroundColor());
    await assert.eventually.isNull(style.getTextBorderColor());
    await assert.eventually.isNull(style.getTextBorderSize());
    await assert.eventually.isNull(style.getTextSize());
    await assert.eventually.isNull(style.getTextFeatureAttributeName());
    await assert.eventually.isNull(style.getTextOffsetX());
    await assert.eventually.isNull(style.getTextOffsetY());
  });

  it('als gebruiker kan ik een layer definiëren met een label', async () => {
    const map = await vlMapPage.getLabelMap();
    const style = await vlMapPage.getLayerStyle(map);

    await assert.eventually.equal(style.getColor(), 'rgba(2, 85, 204, 0.8)');
    await assert.eventually.isNull(style.getBorderColor());
    await assert.eventually.isNull(style.getBorderSize());
    await assert.eventually.isNull(style.getTextColor());
    await assert.eventually.isNull(style.getTextBackgroundColor());
    await assert.eventually.isNull(style.getTextBorderColor());
    await assert.eventually.isNull(style.getTextBorderSize());
    await assert.eventually.isNull(style.getTextSize());
    await assert.eventually.equal(style.getTextFeatureAttributeName(), 'label');
    await assert.eventually.isNull(style.getTextOffsetX());
    await assert.eventually.isNull(style.getTextOffsetY());
  });

  it('als gebruiker kan ik een layer definiëren met aangepaste stijl', async () => {
    const map = await vlMapPage.getAdjustedMap();
    const style = await vlMapPage.getLayerStyle(map);

    await assert.eventually.equal(style.getColor(), 'rgba(255,0,0,0.5)');
    await assert.eventually.equal(style.getBorderColor(), 'rgba(255,255,100,1)');
    await assert.eventually.equal(style.getBorderSize(), 2);
    await assert.eventually.equal(style.getTextColor(), 'rgba(255,0,0,1)');
    await assert.eventually.equal(style.getTextBackgroundColor(), 'rgba(0,0,255,0.2)');
    await assert.eventually.equal(style.getTextBorderColor(), 'rgba(0,255,0,1)');
    await assert.eventually.equal(style.getTextBorderSize(), 3);
    await assert.eventually.equal(style.getTextSize(), '13px');
    await assert.eventually.equal(style.getTextFeatureAttributeName(), 'label');
    await assert.eventually.equal(style.getTextOffsetX(), 10);
    await assert.eventually.equal(style.getTextOffsetY(), -10);
  });

  it('als gebruiker kan ik een layer definiëren met meerdere stijl', async () => {
    const map = await vlMapPage.getMultipleStylesMap();
    const styles = await vlMapPage.getLayerStyles(map);

    await assert.eventually.equal(styles[0].getColor(), 'rgba(255,0,0,0.8)');
    await assert.eventually.equal(styles[1].getColor(), 'rgba(0,255,0,0.8)');
  });
});
