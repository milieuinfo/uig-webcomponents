import {css, html, LitElement, unsafeCSS} from 'lit';
import {VlMapVectorLayer} from "../../../layer/vector-layer/index.js";
import styles from './styles.scss';

export class VlMapLegendControl extends LitElement {

  static get properties() {
    return {
      left: { type: String, reflect: true },
      top: { type: String, reflect: true },
      right: { type: String, reflect: true },
      bottom: { type: String, reflect: true },
    };
  }
  
   static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }
  
  set left(left)
  {
    this._left = left;
  }

  set right(right)
  {
    this._right = right;
  }

  set top(top)
  {
    this._top = top;
  }

  set bottom(bottom)
  {
    this._bottom = bottom;
  }

  connectedCallback() {
    super.connectedCallback();
    this._mapElement = this.closest('vl-map');
    const layers = this._mapElement.featuresLayers;

    layers.forEach((layer) => {
      layer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, () => {
        this.updateLegendItems(layers)
      });
    });
  }

  updateLegendItems(layers) {
    this.items = [];
    layers.forEach((layer) => {
      layer._styles.forEach((style) => {
        this.items.push(style);
      });
    });
    this.requestUpdate();
  }

  render() {
    return html`<div class="uig-map-legend" style="${this.generateStyle()}">
        ${this.items.map((item) => html`<div style="display:inline-block"><div class="uig-map-legend-icon" style="border: 1px solid ${  item.borderColor  }; background-color:${item.color};"></div>
        <span class="uig-map-legend-text">${item.legendText}</span></div>`)}
    </div>`;
  }

  generateStyle() {
    return (this._left?`;left:${this._left}`:"") + (this._top?`;top:${this._top}`:"") + (this._right?`;right:${this._right}`:"") + (this._bottom?`;bottom:${this._bottom}`:"");
  }
}

customElements.define('vl-map-legend-control', VlMapLegendControl);