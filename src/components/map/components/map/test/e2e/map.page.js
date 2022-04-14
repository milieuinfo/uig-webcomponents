import { VlTestMap } from './map.js';
import { VlTestMapBaseLayer } from '../../../baselayer/test/e2e/baselayer.js';
import { Page, config } from '../../../../../../utils/test';

export class VlTestMapPage extends Page {
  async getBaseLayerGrbGray() {
    return this._getBaseLayer('#baselayer-grb-gray');
  }

  async getBaseLayerGrb() {
    return this._getBaseLayer('#baselayer-grb');
  }

  async getMap() {
    return this._getMap('#map');
  }

  async getMapWithoutEscape() {
    return this._getMap('#map-escape');
  }

  async getMapWithoutRotation() {
    return this._getMap('#map-rotation');
  }

  async getMapWithoutMouseZoom() {
    return this._getMap('#map-mouse-zoom');
  }

  async getMapWithFullscreenAllowed() {
    return this._getMap('#map-fullscreen');
  }

  async load(url) {
    await super.load(url || `${config.baseUrl}components/map/components/map/test/e2e/index.html`);
  }

  async _getMap(selector) {
    const map = await new VlTestMap(this.driver, selector);
    await map.isReady();
    await map.scrollIntoView();
    return map;
  }

  async _getBaseLayer(selector) {
    return new VlTestMapBaseLayer(this.driver, selector);
  }
}
