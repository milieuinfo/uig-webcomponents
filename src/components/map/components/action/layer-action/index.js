import { define } from '../../../../../utils/core';
import { VlMapAction } from '../../action';

export class VlMapLayerAction extends VlMapAction {
  static get _observedAttributes() {
    return ['layer'];
  }

  connectedCallback() {
    super.connectedCallback();
    this._layerChangedCallback();
  }

  /**
   * Returns the OL6 map layer.
   *
   * @return {Object}
   */
  get layer() {
    return this._layer;
  }

  /**
   * Set the map layer.
   *
   * @param {Object} layer OL6 map layer
   */
  set layer(layer) {
    this._layer = layer;
    this._processAction();
  }

  get _layerElement() {
    return (
      this._mapElement.querySelector(`[data-vl-is-layer][data-vl-name="${this.dataset.vlLayer}"]`) ||
      this.closest('[data-vl-is-layer]')
    );
  }

  _layerChangedCallback() {
    if (this._layerElement) {
      this.layer = this._layerElement.layer;
    }
  }

  _processAction() {
    this._mapElement.ready.then(() => {
      if (this._action) {
        this._mapElement.removeAction(this._action);
      }

      if (this.layer) {
        this._action = this._createAction(this.layer);
        super._processAction();
      }
    });
  }
}

define('vl-map-layer-action', VlMapLayerAction);
