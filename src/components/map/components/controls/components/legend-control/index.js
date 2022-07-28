import { LitElement } from 'lit';
import { VlMapControl } from '../../mixin';
import {VlMapVectorLayer} from "../../../layer/vector-layer/index.js";

export class VlMapLegendControl extends VlMapControl(LitElement) {
  constructor() {
    super();
    this.controlElement = document.createElement('div');
  }

  connectedCallback() {
    super.connectedCallback();

    const layers = this._mapElement.featuresLayers;
    layers.forEach((layer) => {
      layer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, () => {
        this.updateLegend(layers)
      });
    });
  }

  updateLegend(layers) {
    this.controlElement.innerText = '';
    layers.forEach((layer) => {
      this.updateControlElement(layer._styles);
    });
  }

  createLegendIcon(style)
  {
    const icon = document.createElement('div');
    icon.setAttribute("style", `border: 1px solid ${  style.borderColor  }; background-color:${style.color}; height:20px; width:20px; margin-bottom:5px;display:inline-block`);

    const text = document.createElement('span');
    text.setAttribute("style", `margin-left: 3px; line-height: 20px; vertical-align: top;`);
    text.innerText = style.legendText;

    const div = document.createElement('div');
    div.appendChild(icon);
    div.appendChild(text);

    return div;
  }

  updateControlElement(styles) {
    styles.forEach((style) => {
      this.controlElement.appendChild(this.createLegendIcon(style));
    });
  }
}

customElements.define('vl-map-legend-control', VlMapLegendControl);