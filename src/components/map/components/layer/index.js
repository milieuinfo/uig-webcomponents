import { vlElement } from '../../../../utils/core';

export class VlMapLayer extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['hidden'];
  }

  constructor() {
    super();
    VlMapLayer._counter = 0;
    this.__counter = ++VlMapLayer._counter;
    this.__ready = false;
  }

  async connectedCallback() {
    this.__setIsLayerMarkerAttribute();
    if (this.mapElement) {
      await this.mapElement.ready;
      this.mapElement.addLayer(this._layer);
    }
    this.__markAsReady();
  }

  static get _counter() {
    return this.__counter;
  }

  static set _counter(counter) {
    this.__counter = counter;
  }

  /**
   * Returns the OpenLayers map layer.
   *
   * @return {ol.layer.Layer}
   */
  get layer() {
    return this._layer;
  }

  /**
   * Returns the OpenLayers map layer source.
   *
   * @return {ol.source}
   */
  get source() {
    return this._source;
  }

  /**
   * Returns whether the map layer is visible or not.
   *
   * @return {Boolean}
   */
  get visible() {
    return this._layer.getVisible();
  }

  /**
   * Returns the map layer title.
   *
   * @return {String}
   */
  get title() {
    return this.get('title');
  }

  /**
   * Set the visibility of the map layer.
   *
   * @param {Boolean} value
   */
  set visible(value) {
    this._layer.setVisible(value);
    this.rerender();
  }

  get mapElement() {
    if (this.parentNode && this.parentNode.map) {
      return this.parentNode;
    }
    return null;
  }

  get ready() {
    return this.__ready;
  }

  get _name() {
    return this.getAttribute('name') || 'kaartlaag';
  }

  get _minResolution() {
    return this.getAttribute('min-resolution') || 0;
  }

  get _maxResolution() {
    return this.getAttribute('max-resolution') || Infinity;
  }

  get _visible() {
    return this.getAttribute('hidden') == undefined;
  }

  /**
   * Returns the value based on a key.
   *
   * @param {String} key
   * @return {Object}
   */
  get(key) {
    return this._layer.get(key);
  }

  rerender() {
    if (this.mapElement) {
      this.mapElement.rerender();
    }
  }

  isVisibleAtResolution(resolution) {
    const maxResolution = parseFloat(this._layer.getMaxResolution());
    const minResolution = parseFloat(this._layer.getMinResolution());
    return resolution >= minResolution && resolution < maxResolution;
  }

  _hiddenChangedCallback(oldValue, newValue) {
    if (this._layer) {
      this.visible = newValue == undefined;
    }
  }

  __setIsLayerMarkerAttribute() {
    this.dataset.vlIsLayer = true;
  }

  __markAsReady() {
    this.__ready = true;
  }
}
