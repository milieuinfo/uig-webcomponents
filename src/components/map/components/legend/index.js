import { css, html, LitElement, unsafeCSS } from 'lit';
import { VlMapVectorLayer } from '../layer/vector-layer/index.js';
import styles from './styles.scss';
import { LEGEND_PLACEMENT } from './enums/index.js';
import { VlMapLayerCircleStyle } from '../layer-style/layer-circle-style/index.js';

export class VlMapLegend extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  constructor() {
    super();
    this.placement = LEGEND_PLACEMENT.BOTTOM_RIGHT;
  }

  static get properties() {
    return {
      left: { type: String, reflect: true },
      top: { type: String, reflect: true },
      right: { type: String, reflect: true },
      bottom: { type: String, reflect: true },
      placement: {
        type: String,
        attribute: 'data-vl-placement',
        reflect: true,
      },
    };
  }

  __getPosition() {
    const position = {};

    switch (this.placement) {
      case LEGEND_PLACEMENT.TOP_LEFT:
        position.top = '10px';
        position.left = '10px';
        position.right = undefined;
        position.bottom = undefined;
        break;
      case LEGEND_PLACEMENT.TOP_RIGHT:
        position.top = '10px';
        position.left = undefined;
        position.right = '10px';
        position.bottom = undefined;
        break;
      case LEGEND_PLACEMENT.BOTTOM_LEFT:
        position.top = undefined;
        position.left = '8px';
        position.right = undefined;
        position.bottom = '40px';
        break;
      case LEGEND_PLACEMENT.BOTTOM_RIGHT:
        position.top = undefined;
        position.left = undefined;
        position.right = '58px';
        position.bottom = '10px';
        break;
      default:
        break;
    }

    if (this._top !== undefined) position.top = this._top;
    if (this._left) position.left = this._left;
    if (this._right) position.right = this._right;
    if (this._bottom) position.bottom = this._bottom;

    return position;
  }

  set left(left) {
    this._left = left;
  }

  set right(right) {
    this._right = right;
  }

  set top(top) {
    this._top = top;
  }

  set bottom(bottom) {
    this._bottom = bottom;
  }

  connectedCallback() {
    super.connectedCallback();
    this._mapElement = this.closest('vl-map');
    this._featuresLayers = this._mapElement.featuresLayers;

    this._featuresLayers.forEach((layer) => {
      layer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, () => {
        this.updateLegendItems(this._featuresLayers);
      });
    });
  }

  getFeaturesLayers() {
    return this._featuresLayers;
  }

  updateLegendItems(layers) {
    this.items = [];
    layers.forEach((layer) => {
      layer._styles.forEach((style) => {
        if (style.legendText) {
          this.items.push(style);
        }
      });
    });
    this.requestUpdate();
  }

  render() {
    if (!this.items) return null;

    return html`<div class="uig-map-legend" style="${this.__generateItemStyle()}">
      <div>
        <span class="uig-map-legend-text uig-map-legend-title">Legende: </span>
      </div>
      ${this.items.map(
        (item) => html`<div class="uig-map-legend-item">
          <div class="uig-map-legend-icon" style="${this.__generateIconStyle(item)}"></div>
          <span class="uig-map-legend-text">${item.legendText}</span>
        </div>`,
      )}
    </div>`;
  }

  __generateItemStyle() {
    const position = this.__getPosition();
    return (
      (position.left ? `;left:${position.left}` : '') +
      (position.top ? `;top:${position.top}` : '') +
      (position.right ? `;right:${position.right}` : '') +
      (position.bottom ? `;bottom:${position.bottom}` : '')
    );
  }

  __generateIconStyle(item) {
    let borderRadius = ``;
    if (item instanceof VlMapLayerCircleStyle) {
      borderRadius = 'border-radius: 50%;';
    }

    return `border: ${item.borderSize}px solid ${item.borderColor}; background-color:${item.color};${borderRadius}`;
  }
}

customElements.define('vl-map-legend', VlMapLegend);
