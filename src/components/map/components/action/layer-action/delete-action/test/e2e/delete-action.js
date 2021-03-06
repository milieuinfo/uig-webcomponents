import { VlTestMapAction } from '../../../../../action/test/e2e/action.js';

export class VlTestMapDeleteAction extends VlTestMapAction {
  async removeFeature(id) {
    const layer = await this.getLayer();
    const map = await this.getMap();
    await map.scrollIntoView();
    const coordinateForFeature = await layer.getCoordinateForFeature(id);
    const numberOfFeaturesBefore = await layer.getNumberOfFeatures();
    await map.clickOnCoordinates(coordinateForFeature);
    await this.driver.wait(async () => {
      const numberOfFeatures = await layer.getNumberOfFeatures();
      return numberOfFeatures == numberOfFeaturesBefore - 1;
    });
  }

  async removeAllInRectangle(coordinatesTopLeft, coordinatesBottomRight) {
    const map = await this.getMap();
    await map.scrollIntoView();
    await map.dragRectangle(coordinatesTopLeft, coordinatesBottomRight);
  }
}
