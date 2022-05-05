import { assert, getDriver } from '../../../../../../../utils/test';
import { VlTestMapDrawActionsPage } from './draw-actions.page';

// Use to wait for map action to be activated. Timeout for activating a mapaction in map-with-actions can otherwise result in flaky tests.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('vl-map-draw-action', async () => {
  let vlMapPage;

  beforeEach(() => {
    vlMapPage = new VlTestMapDrawActionsPage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I can draw points on a map', async () => {
    await sleep(350);

    const map = await vlMapPage.getMapWithDrawPointAction();
    const action = await vlMapPage.getDrawPointAction();
    const layers = await map.getLayers();
    assert.isNotEmpty(layers);
    const layer = layers[0];

    let features = await layer.getFeatures();
    assert.lengthOf(features, 0);

    await action.draw();
    features = await layer.getFeatures();
    assert.lengthOf(features, 1);

    await action.draw({ x: 153077, y: 212047 });
    features = await layer.getFeatures();
    assert.lengthOf(features, 2);
  });

  it('as a user I can draw lines on a map', async () => {
    await sleep(350);

    const map = await vlMapPage.getMapWithDrawLineAction();
    const action = await vlMapPage.getDrawLineAction();
    const layers = await map.getLayers();
    assert.isNotEmpty(layers);
    const layer = layers[0];

    let features = await layer.getFeatures();
    assert.lengthOf(features, 0);

    await action.draw();
    features = await layer.getFeatures();
    assert.lengthOf(features, 1);

    await action.draw({ x: 152034, y: 212344 }, { x: 202086, y: 222323 });
    features = await layer.getFeatures();
    assert.lengthOf(features, 2);
  });

  it('as a user I can draw polygons on a map', async () => {
    await sleep(350);

    const map = await vlMapPage.getMapWithDrawPolygonAction();
    const action = await vlMapPage.getDrawPolygonAction();
    const layers = await map.getLayers();
    assert.isNotEmpty(layers);
    const layer = layers[0];

    let features = await layer.getFeatures();
    assert.lengthOf(features, 0);

    await action.draw();
    features = await layer.getFeatures();
    assert.lengthOf(features, 1);

    await action.draw(
      { x: 152280, y: 212101 },
      { x: 162289, y: 212100 },
      { x: 162289, y: 222094 },
      { x: 152280, y: 222094 },
    );
    features = await layer.getFeatures();
    assert.lengthOf(features, 2);
  });

  // it("as a user I can draw points on a map where when drawing is snapped on certain layers", async () => {
  //   const map = await vlMapPage.getMapWithDrawPointSnapAction();
  //   const action = await vlMapPage.getDrawPointSnapAction();
  //   const layers = await map.getLayers();
  //   assert.isNotEmpty(layers);
  //   const layer = layers[0];

  //   const search = await map.getSearch();
  //   await search.open();
  //   await search.zoomTo("Hellegatstraat, Puurs-Sint-Amands");

  //   await sleep(5000); // @TODO: Finder better fix.

  //   await action.draw({ x: 147341, y: 197991 });
  //   let coordinatesOfFeatures = await layer.getFeatureCoordinates();
  //   assert.lengthOf(coordinatesOfFeatures, 1);
  //   // getekend punt valt samen met de coordinaten waar je wou tekenen
  //   assert.closeTo(coordinatesOfFeatures[0][0], 147341, 5);
  //   assert.closeTo(coordinatesOfFeatures[0][1], 197991, 5);

  //   await action.draw({ x: 147441, y: 197991 });
  //   coordinatesOfFeatures = await layer.getFeatureCoordinates();
  //   assert.lengthOf(coordinatesOfFeatures, 2);
  //   // getekend punt valt niet samen met de coordinaten waar je wou tekenen
  //   assert.closeTo(coordinatesOfFeatures[1][0], 147381, 5);
  //   assert.closeTo(coordinatesOfFeatures[1][1], 197951, 5);
  // });

  it('as a user I can draw measurement lines on a map', async () => {
    await sleep(350);

    const map = await vlMapPage.getMapWithMeasureAction();
    const action = await vlMapPage.getMeasureAction();
    const layers = await map.getLayers();
    assert.isNotEmpty(layers);
    const layer = layers[0];

    let features = await layer.getFeatures();
    assert.lengthOf(features, 0);

    await action.draw({ x: 152034, y: 212344 }, { x: 202086, y: 222323 });
    features = await layer.getFeatures();
    assert.lengthOf(features, 1);
  });

  it('as a user I can draw measurement lines on a map when I activate the control', async () => {
    const map = await vlMapPage.getMapWithMeasureActionWithControl();
    const layers = await map.getLayers();
    const layer = layers[0];

    let features = await layer.getFeatures();
    assert.lengthOf(features, 0);

    const control = await vlMapPage.getMeasureActionControl();
    control.click();

    await sleep(350);

    const action = await vlMapPage.getMeasureActionWithControl();

    await action.draw({ x: 152034, y: 212344 }, { x: 202086, y: 222323 });
    features = await layer.getFeatures();
    assert.lengthOf(features, 1);
  });

  it('as a user I can draw measurement lines on a map when I activate the outside control', async () => {
    const map = await vlMapPage.getMapWithMeasureActionWithOutsideControl();
    const layers = await map.getLayers();
    const layer = layers[0];

    let features = await layer.getFeatures();
    assert.lengthOf(features, 0);

    const control = await vlMapPage.getMeasureActionControlOutside();
    control.click();

    await sleep(350);

    const action = await vlMapPage.getMeasureActionWithOutsideControl();

    await action.draw({ x: 152034, y: 212344 }, { x: 202086, y: 222323 });
    features = await layer.getFeatures();
    assert.lengthOf(features, 1);
  });
});
