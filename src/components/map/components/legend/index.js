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

    if (this.top) position.top = this.top;
    if (this.left) position.left = this.left;
    if (this.right) position.right = this.right;
    if (this.bottom) position.bottom = this.bottom;

    return position;
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
      if (layer._styles.length === 1) {
        const style = layer._styles[0];

        if (!style.name) {
          if (layer.name !== undefined && layer.name != null) {
            this.items.push(this.__createItem(style, layer.name));
          }
        } else {
          this.items.push(this.__createItem(style, style.name));
        }
      } else {
        this.items = layer._styles.filter((style) => style.name).map((style) => this.__createItem(style, style.name));
      }
    });
    this.requestUpdate();
  }

  __createItem(style, name) {
    const item = {};
    item.style = style;
    item.name = name;
    return item;
  }

  render() {
    if (!this.items) return null;

    return html`<div class="uig-map-legend" style="${this.__generateItemStyle()}">
      <div>
        <span class="uig-map-legend-text uig-map-legend-title">Legende: </span>
      </div>
      ${this.items.map(
        (item) => html`<div class="uig-map-legend-item">
          <div class="uig-map-legend-icon" style="${this.__generateIconStyle(item.style)}"></div>
          <span class="uig-map-legend-text">${item.name}</span>
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
