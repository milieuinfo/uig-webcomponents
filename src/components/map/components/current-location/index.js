import { css, html, LitElement, unsafeCSS } from 'lit';
import proj4 from 'proj4';
import styles from './styles.scss';
import '../../../icon';
import iconStyles from '../../../icon/styles.scss';

export const DEFAULT_ZOOM = 10;
export const DEFAULT_TOOLTIP = 'Current location ddd';

export class VlMapCurrentLocation extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}}
      `,
      css`
        ${unsafeCSS(iconStyles)}}
      `,
    ];
  }

  static get properties() {
    return {
      zoom: {
        type: Number,
        attribute: 'data-vl-zoom',
        reflect: true,
      },
      tooltip: {
        type: String,
        attribute: 'data-vl-tooltip',
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.zoom = DEFAULT_ZOOM;
    this.tooltip = DEFAULT_TOOLTIP;
  }

  connectedCallback() {
    super.connectedCallback();
    this._mapElement = this.closest('vl-map');
  }

  _currentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const source = new proj4.Proj('EPSG:4326');
      const dest = new proj4.Proj(this._mapElement.map.projection.getCode());

      const point = new proj4.Point(position.coords.longitude, position.coords.latitude);
      const transformedPoint = proj4.transform(source, dest, point);

      this._mapElement.map.getView().setCenter([transformedPoint.x, transformedPoint.y]);
      this._mapElement.map.getView().setZoom(this.zoom);
    });
  }

  render() {
    return html`<div class="uig-map-current-location">
      <button @click=${() => this._currentLocation()} type="button" title="${this.tooltip}">
        <span is="vl-icon" data-vl-icon="location-gps"></span>
      </button>
    </div>`;
  }
}

customElements.define('vl-map-current-location', VlMapCurrentLocation);
