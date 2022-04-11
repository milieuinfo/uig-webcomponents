import { assert, getDriver } from '../../../../../../utils/test';
import { VlMapPage } from './map.page.js';

describe('vl-map', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlMapPage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I can define different base map layers for a map', async () => {
    const map = await vlMapPage.getMap();
    await assert.eventually.isTrue(map.isDisplayed());
    const baseLayers = await map.getBaseLayers();
    await assert.eventually.equal(baseLayers[0].getTitle(), 'GRB basis laag grijs');
    await assert.eventually.equal(baseLayers[1].getTitle(), 'GRB basis laag');
    await assert.eventually.equal(baseLayers[2].getTitle(), 'GRB ortho laag');
  });

  it('as a user I can query the url and type of a grb baselayer', async () => {
    const baseLayerGrb = await vlMapPage.getBaseLayerGrb();

    await assert.eventually.equal(
      baseLayerGrb.getUrl(),
      'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts',
    );
    await assert.eventually.equal(baseLayerGrb.getType(), 'wmts');
  });

  it('as a user I see the difference between a gray grb baselayer and the normal grb baselayer on the layer and title', async () => {
    const baseLayerGrbGray = await vlMapPage.getBaseLayerGrbGray();
    const baseLayerGrb = await vlMapPage.getBaseLayerGrb();

    await assert.eventually.equal(baseLayerGrbGray.getLayer(), 'grb_bsk_grijs');
    await assert.eventually.equal(baseLayerGrbGray.getTitle(), 'GRB basis laag grijs');
    await assert.eventually.equal(baseLayerGrb.getLayer(), 'grb_bsk');
    await assert.eventually.equal(baseLayerGrb.getTitle(), 'GRB basis laag');
  });

  it('as a user I see the difference between a folder where the escape key is enabled and disabled', async () => {
    const mapEscapeEnabled = await vlMapPage.getMap();
    const mapEscapeDisabled = await vlMapPage.getMapWithoutEscape();

    await assert.eventually.isFalse(mapEscapeEnabled.isEscapeKeyDisabled());
    await assert.eventually.isTrue(mapEscapeDisabled.isEscapeKeyDisabled());
  });

  it('as a user I see the difference between a folder where the rotation is enabled and disabled', async () => {
    const mapRotationEnabled = await vlMapPage.getMap();
    const mapRotationDisabled = await vlMapPage.getMapWithoutRotation();

    await assert.eventually.isFalse(mapRotationEnabled.isRotationDisabled());
    await assert.eventually.isTrue(mapRotationDisabled.isRotationDisabled());
  });

  it('as a user I see the difference between a folder where the mouse wheel zoom is enabled and disabled', async () => {
    const mapMouseWheelZoomEnabled = await vlMapPage.getMap();
    const mapMouseWheelZoomDisabled = await vlMapPage.getMapWithoutMouseZoom();

    await assert.eventually.isFalse(mapMouseWheelZoomEnabled.isMouseWheelZoomDisabled());
    await assert.eventually.isTrue(mapMouseWheelZoomDisabled.isMouseWheelZoomDisabled());
  });

  it('as a user i can zoom the map', async () => {
    const map = await vlMapPage.getMap();
    await assert.eventually.isTrue(map.hasZoom(2));

    await map.zoomIn();
    await assert.eventually.isTrue(map.hasZoom(3));

    await map.zoomOut();
    await assert.eventually.isTrue(map.hasZoom(2));
  });

  it('as a user I can consult a scale', async () => {
    const map = await vlMapPage.getMap();
    await assert.eventually.isDefined(map.getScale());
  });

  it('as a user I can switch a map on and off in full screen', async () => {
    const map = await vlMapPage.getMap();
    const mapWithFullscreenAllowed = await vlMapPage.getMapWithFullscreenAllowed();
    await assert.eventually.isFalse(map.isFullscreenAllowed());
    await assert.eventually.isTrue(mapWithFullscreenAllowed.isFullscreenAllowed());
    await assert.eventually.isFalse(map.isFullScreen());
    await mapWithFullscreenAllowed.toggleFullscreen();
    await assert.eventually.isTrue(map.isFullScreen());
    await mapWithFullscreenAllowed.toggleFullscreen();
    await assert.eventually.isFalse(map.isFullScreen());
  });
});
