import Control from 'ol/control/Control';
import { LitElement } from 'lit';
import { VlMeasureAction } from '../../../../actions/measure-action';
import { VlMapControl } from '../../mixin';
import '../../../../../toggle-button';

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

    this.active = false;
  }

  handleMeasureControlClick() {
    const measureAction = this.map.actions.find((action) => action instanceof VlMeasureAction);

    if (this.active) {
      this.map.deactivateAction(measureAction);
    } else {
      this.map.activateAction(measureAction);
    }

    this.active = !this.active;
  }
}

customElements.define('vl-map-measure-control', VlMapMeasureControl);
