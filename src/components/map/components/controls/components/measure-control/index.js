import { LitElement } from 'lit';
import { VlMapControl } from '../../mixin';
import '../../../../../toggle-button';
import { CONTROL_TYPE, IDENTIFIER } from '../../../../enums';

export class VlMapMeasureControl extends VlMapControl(LitElement) {
  constructor() {
    super();

    this.controlElement = document.createElement('vl-toggle-button');
    // this.controlElement.icon = 'ruler';
    // this.controlElement.textHidden = true;
    this.controlElement.innerText = 'Meten';

    this.controlElement.addEventListener('click', this.handleMeasureControlClick.bind(this), false);

    this.identifier = IDENTIFIER.MEASURE;

    this.type = CONTROL_TYPE.ACTION;
  }

  handleMeasureControlClick() {
    const measureAction = this.map.getActionWithIdentifier(this.identifier);

    if (measureAction) {
      if (this.controlElement.active) {
        measureAction.element.deactivate();
      } else {
        measureAction.element.activate();
      }
    }
  }

  setActive(set) {
    this.controlElement.active = set;
  }
}

customElements.define('vl-map-measure-control', VlMapMeasureControl);
