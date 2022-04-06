import { vlElement, define } from '../../../../utils/core';

export class VlMapOverviewMap extends vlElement(HTMLElement) {
  connectedCallback() {
    this._configureMap();
  }

  get _map() {
    if (this.parentNode) {
      return this.parentNode.map;
    }
  }

  _configureMap() {
    (async () => {
      while (!(this._map && this._map.overviewMapControl)) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      this._map.addControl(this._map.overviewMapControl);
    })();
  }
}

define('vl-map-overview-map', VlMapOverviewMap);
