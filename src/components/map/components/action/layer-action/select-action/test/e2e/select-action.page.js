import { VlMapSelectAction } from "./select-action.js";
import { config, By, assert } from "../../../../../../../../utils/test";
import { VlMapPage } from "../../../../../map/test/e2e/map.page.js";

export class VlMapSelectActionPage extends VlMapPage {
  async getSelectAction() {
    return this._getSelectAction("#select-action");
  }

  async getClusteredSelectAction() {
    return this._getSelectAction("#select-action-cluster");
  }

  async clickPointFeature(id) {
    const map = await this._getMap("#map-with-select-action");
    const layers = await map.getLayers();
    assert.isNotEmpty(layers);
    const layer = layers[0];
    await map.scrollIntoView();
    const coordinateForFeature = await layer.getCoordinateForFeature(id);
    await map.clickOnCoordinates(coordinateForFeature);
    return this._waitForFeatureToBeSelected(id);
  }

  async _waitForFeatureToBeSelected(id) {
    const selectAction = await this.getSelectAction();
    return this.driver.wait(async () => {
      const selectedId = await this.driver.executeScript(
        `return arguments[0]._action.selectedFeature && arguments[0]._action.selectedFeature.getId()`,
        selectAction
      );
      return selectedId === id;
    }, 5000);
  }

  async getLogText() {
    const log = await this.driver.findElement(By.css("#select-action-log"));
    return log.getText();
  }

  async load() {
    await super.load(
      config.baseUrl +
        "components/map/components/action/layer-action/select-action/test/e2e"
    );
  }

  async _getSelectAction(selector) {
    return new VlMapSelectAction(this.driver, selector);
  }
}
