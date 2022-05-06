import { LitElement } from 'lit';
import { VlMapControl } from '../../mixin';
import '../../../../../toggle-button';

export class VlMapMeasureControl extends VlMapControl(LitElement) {
  constructor() {
    super();
    this.controlElement = document.createElement('vl-toggle-button');
    this.controlElement.icon = 'ruler';
    this.controlElement.textHidden = true;
    // this.controlElement.innerText = 'Meten';
  }
}

customElements.define('vl-map-measure-control', VlMapMeasureControl);
