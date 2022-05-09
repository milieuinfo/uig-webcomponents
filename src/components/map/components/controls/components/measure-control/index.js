import Control from 'ol/control/Control';
import { LitElement } from 'lit';
import { VlMeasureAction } from '../../../../actions/measure-action';
import { VlMapControl } from '../../mixin';
import '../../../../../toggle-button';
import { CONTROL_TYPE } from '../../enums';

export class VlMapMeasureControl extends VlMapControl(LitElement) {
  constructor(map, controlElement) {
    super(map);

    if (controlElement) {
      this.controlElement = controlElement;
      this.control = new Control({
        element: controlElement,
      });
    } else {
      this.controlElement = document.createElement('vl-toggle-button');
      // this.controlElement.icon = 'ruler';
      // this.controlElement.textHidden = true;
      this.controlElement.innerText = 'Meten';
    }

    this.controlElement.addEventListener('click', this.handleMeasureControlClick.bind(this), false);

    this.identifier = 'measure';

    this.type = CONTROL_TYPE.ACTION;
  }

  handleMeasureControlClick() {
    const measureAction = this.map.actions.find((action) => action instanceof VlMeasureAction);

    if (this.controlElement.active) {
      this.map.deactivateAction(measureAction);
      this.controlElement.active = false;
    } else {
      this.map.activateAction(measureAction);
      this.controlElement.active = true;
    }
  }

  deactivate() {
    this.controlElement.active = false;
  }
}

customElements.define('vl-map-measure-control', VlMapMeasureControl);
