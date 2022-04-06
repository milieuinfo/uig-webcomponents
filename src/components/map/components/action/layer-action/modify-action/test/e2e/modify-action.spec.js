import { assert, getDriver } from '../../../../../../../../utils/test';
import { VlMapModifyActionsPage } from './modify-actions.page.js';

describe('vl-map-modify-action', async () => {
  let driver;
  let vlMapPage;
  const willebroek = [150390.63, 193371.12];

  before(() => {
    driver = getDriver();
    vlMapPage = new VlMapModifyActionsPage(driver);
    return vlMapPage.load();
  });

  it('as a user I see that the edit action is active', async () => {
    const map = await vlMapPage.getMapWithModifyPointAction();
    const action = await vlMapPage.getModifyAction(map);
    await assert.eventually.isTrue(action.isActive());
  });

  it('as a user I can edit a point on a map', async () => {
    const map = await vlMapPage.getMapWithModifyPointAction();
    const action = await vlMapPage.getModifyAction(map);

    const featuresLayer = await action.getFeaturesLayer();
    const geometry1 = (await featuresLayer.getFeature(1)).geometry;
    const mechelen = geometry1.coordinates;
    const feature2 = await featuresLayer.getFeature(2);

    await action.movePointByCoordinates(mechelen, willebroek);
    const modifiedGeometry = (await featuresLayer.getFeature(1)).geometry;
    assert.include(modifiedGeometry, { type: 'Point' });
    assert.notDeepEqual(modifiedGeometry, geometry1);
    await assert.eventually.deepEqual(featuresLayer.getFeature(2), feature2);
  });

  it('as a user I can edit a line on a map', async () => {
    const map = await vlMapPage.getMapWithModifyLineAction();
    const action = await vlMapPage.getModifyAction(map);

    const featuresLayer = await action.getFeaturesLayer();
    const { geometry } = await featuresLayer.getFeature(1);
    const antwerpen = geometry.coordinates[1];

    await action.movePointByCoordinates(antwerpen, willebroek);
    const modifiedGeometry = (await featuresLayer.getFeature(1)).geometry;
    assert.include(modifiedGeometry, { type: 'LineString' });
    assert.notDeepEqual(modifiedGeometry, geometry);
  });

  it('as a user I can edit a polygon on a map', async () => {
    const map = await vlMapPage.getMapWithModifyPolygonAction();
    const action = await vlMapPage.getModifyAction(map);

    const featuresLayer = await action.getFeaturesLayer();
    const { geometry } = await featuresLayer.getFeature(1);
    const gent = geometry.coordinates[0][0];

    await action.movePointByCoordinates(gent, willebroek);
    const modifiedGeometry = (await featuresLayer.getFeature(1)).geometry;
    assert.include(modifiedGeometry, { type: 'Polygon' });
    assert.notDeepEqual(modifiedGeometry, geometry);
  });
});
