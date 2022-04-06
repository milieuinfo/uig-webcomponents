import { assert, getDriver } from '../../../../../../utils/test';
import { VlMapLayerSwitcherPage } from './layer-switcher.page.js';

describe('vl-map-layer-switcher', async () => {
  let driver;
  let vlMapPage;

  before(() => {
    driver = getDriver();
    vlMapPage = new VlMapLayerSwitcherPage(driver);
    return vlMapPage.load();
  });

  it('the map layer checkbox will be checked by default when the layer is visible', async () => {
    const map = await vlMapPage.getMapWithLayerSwitcher();
    const layerSwitcher = await map.getLayerSwitcher();
    const checkbox = await layerSwitcher.getCheckboxForLayer('Kaartlaag 1');
    await assert.eventually.isTrue(checkbox.isChecked());
  });

  // it("as a user I can show and hide a map layer", async () => {
  //   const map = await vlMapPage.getMapWithLayerSwitcher();
  //   const sideSheet = await map.getSideSheet();
  //   const layerSwitcher = await map.getLayerSwitcher();
  //   const layers = await map.getLayers();

  //   await sideSheet.open();
  //   const checkboxes = await layerSwitcher.getCheckboxes();

  //   let values;
  //   do {
  //     await map.zoomIn();
  //     values = await Promise.all(
  //       checkboxes.map(async (checkbox) => {
  //         return await checkbox.isDisabled();
  //       })
  //     );
  //   } while (values.some(Boolean));

  //   const names = [
  //     "Kaartlaag 1",
  //     "Kaartlaag 2",
  //     "Kaartlaag 3",
  //     "WMTS kaartlaag",
  //     "WMS kaartlaag",
  //     "WFS kaartlaag",
  //   ];
  //   for (let index = 0; index < names.length; index++) {
  //     const layer = layers[index];
  //     await assert.eventually.isTrue(layer.isVisible());
  //     await checkboxes[index].click();
  //     await assert.eventually.isFalse(layer.isVisible());
  //     await checkboxes[index].click();
  //     await assert.eventually.isTrue(layer.isVisible());
  //   }
  // });

  it('as a user I can show and hide a map layer via a personalized map layer option', async () => {
    const map = await vlMapPage.getMapWithCustomLayerSwitcher();
    const sideSheet = await map.getSideSheet();
    const layerSwitcher = await map.getLayerSwitcher();
    const layers = await map.getLayers();
    const layer = layers[0];

    await assert.eventually.isTrue(layer.isVisible());

    await sideSheet.open();
    const checkbox = await layerSwitcher.getCheckboxForLayer('layer-1');
    await assert.eventually.isTrue(layer.isVisible());
    await checkbox.click();
    await assert.eventually.isFalse(layer.isVisible());
    await checkbox.click();
    await assert.eventually.isTrue(layer.isVisible());
  });

  it('as a user I can show and hide a map layer with resolutions at the correct zoom level', async () => {
    const map = await vlMapPage.getMapWithResolutionLayerSwitcher();
    const sideSheet = await map.getSideSheet();
    const layerSwitcher = await map.getLayerSwitcher();
    await sideSheet.open();
    const checkbox = await layerSwitcher.getCheckboxForLayer('resolution-layer');

    await driver.wait(async () => await checkbox.isDisabled());
    await map.zoomIn();
    await driver.wait(async () => !(await checkbox.isDisabled()));
    await assert.eventually.isFalse(checkbox.isDisabled());
    await map.zoomIn();
    await driver.wait(async () => await checkbox.isDisabled());
    await assert.eventually.isTrue(checkbox.isDisabled());
  });
});
