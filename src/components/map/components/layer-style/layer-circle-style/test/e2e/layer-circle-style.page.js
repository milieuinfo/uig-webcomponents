import { VlMapLayerCircleStyle } from './layer-circle-style.js';
import { config, By } from '../../../../../../../utils/test';
import { VlMapPage } from '../../../../map/test/e2e/map.page';

export class VlMapCircleStylePage extends VlMapPage {
  async getStandardMap() {
    return this._getMap('#map-standard');
  }

  async getModifiedMap() {
    return this._getMap('#map-modified');
  }

  async getLayerCircleStyle(map) {
    const styles = await this.getLayerCircleStyles(map);
    return styles[0];
  }

  async getLayerCircleStyles(map) {
    const styles = await map.findElements(By.css('vl-map-layer-circle-style'));
    return Promise.all(styles.map((style) => new VlMapLayerCircleStyle(this.driver, style)));
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/layer-style/layer-circle-style/test/e2e`);
  }
}
