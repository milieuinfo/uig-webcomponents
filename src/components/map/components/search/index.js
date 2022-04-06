import OlOverlay from 'ol/Overlay';
import { vlElement, define } from '../../../../utils/core';
import '../../../search';
import '../select-location';
import LambertCoordinaat from '../../utils/lambert-coordinaat/lambert-coordinaat';
import styles from './styles.scss';

class VlMapSearch extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['placeholder', 'search-placeholder', 'search-empty-text', 'search-no-results-text'];
  }

  constructor() {
    super(`
      <style>
        ${styles}
        :host {
          display: block;
        }
      </style>
      <vl-search id="search" data-vl-inline>
        <select is="vl-select-location" slot="input"></select>
      </vl-search>
    `);
    this._configure();
    this._addSelectChangeListener();
  }

  get _selectElement() {
    return this._shadow.querySelector('select');
  }

  bindMap(map) {
    this._map = map;
  }

  /**
   * Define callback that will be executed when selecting a location via the map search.
   *
   * @param {Function} callback
   */
  onSelect(callback) {
    this._onSelect = callback;
  }

  _zoomTo(boundingBox) {
    this._map.zoomTo(boundingBox, 14);
  }

  _configure() {
    customElements.whenDefined('vl-map').then(() => {
      if (this.parentNode && this.parentNode.map) {
        this._map = this.parentNode._shadow.host;
        this._map.map.addOverlay(
          new OlOverlay({
            className: 'vl-map-search__overlaycontainer',
            element: this,
          }),
        );
      }
    });
  }

  _addSelectChangeListener() {
    this._selectElement.addEventListener('change', (e) => {
      if (e.target.location) {
        e.target.location.then((location) => {
          if (this._onSelect) {
            this._onSelect(location);
          } else {
            this._zoomTo(location);
          }
        });
      }
    });
  }

  _placeholderChangedCallback(oldValue, newValue) {
    this._dispatchSelectAttribute('placeholder', newValue);
  }

  _searchPlaceholderChangedCallback(oldValue, newValue) {
    this._dispatchSelectAttribute('search-placeholder', newValue);
  }

  _searchEmptyTextChangedCallback(oldValue, newValue) {
    this._dispatchSelectAttribute('search-empty-text', newValue);
  }

  _searchNoResultsTextChangedCallback(oldValue, newValue) {
    this._dispatchSelectAttribute('search-no-results-text', newValue);
  }

  _dispatchSelectAttribute(attribute, value) {
    if (value != undefined) {
      this._selectElement.setAttribute(`${VlMapSearch.attributePrefix}${attribute}`, value);
    } else {
      this._selectElement.removeAttribute(`${VlMapSearch.attributePrefix}${attribute}`);
    }
  }
}

export { LambertCoordinaat, VlMapSearch };

define('vl-map-search', VlMapSearch);
