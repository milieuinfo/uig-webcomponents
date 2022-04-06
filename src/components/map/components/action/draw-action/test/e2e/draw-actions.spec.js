import { assert, getDriver } from '../../../../../../../utils/test';
import { VlMapDrawActionsPage } from './draw-actions.page';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('vl-map-draw-action', async () => {
  let vlMapPage;

  before(() => {
    vlMapPage = new VlMapDrawActionsPage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I can draw points on a map', async () => {
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

    await action.draw({ x: 152034, y: 212344 }, { x: 152086, y: 212323 });
    features = await layer.getFeatures();
    assert.lengthOf(features, 2);
  });

  it('as a user I can draw polygons on a map', async () => {
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
      { x: 152289, y: 212100 },
      { x: 152289, y: 212094 },
      { x: 152280, y: 212094 },
    );
    features = await layer.getFeatures();
    assert.lengthOf(features, 2);
  });

  // it("as a user I can draw points on a map and when drawing the points are snapped on certain layers", async () => {
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
});
