import { vlElement, define } from '../../../../../../utils/core';

export class VlMapWmsStyle extends vlElement(HTMLElement) {
  get sld() {
    return this.getAttribute('data-vl-sld');
  }
}

define('vl-map-wms-style', VlMapWmsStyle);
