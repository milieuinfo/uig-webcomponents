import { assert, getDriver } from '../../../../../../../../utils/test';
import { VlMapDeleteActionPage } from './delete-action.page.js';

describe('vl-map-delete-action', async () => {
  let vlMapPage;

  beforeEach(() => {
    vlMapPage = new VlMapDeleteActionPage(getDriver());
    return vlMapPage.load();
  });

  it('as a user I see that the delete action is active', async () => {
    const deleteAction = await vlMapPage.getDeleteAction();
    await assert.eventually.isTrue(deleteAction.isActive());
  });

  it('can delete features by clicking on them', async () => {
    const deleteAction = await vlMapPage.getDeleteAction();
    const layer = await deleteAction.getLayer();
    await assert.eventually.equal(layer.getNumberOfFeatures(), 3);
    await deleteAction.removeFeature(1);
    await assert.eventually.equal(layer.getNumberOfFeatures(), 2);
    await deleteAction.removeFeature(2);
    await assert.eventually.equal(layer.getNumberOfFeatures(), 1);
    await deleteAction.removeFeature(3);
    await assert.eventually.equal(layer.getNumberOfFeatures(), 0);
  });

  it('can delete features by drawing rectangle over all features that may be deleted', async () => {
    const deleteAction = await vlMapPage.getDeleteAction();
    const layer = await deleteAction.getLayer();
    await assert.eventually.equal(layer.getNumberOfFeatures(), 3);
    await deleteAction.removeAllInRectangle([80000, 210000], [230000, 170000]);
    await assert.eventually.equal(layer.getNumberOfFeatures(), 0);
  });
});
