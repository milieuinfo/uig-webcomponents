import { vlElement, define } from '../../../../utils/core';
import { VlMap } from '../../map';

export class VlMapAction extends vlElement(HTMLElement) {
  connectedCallback() {
    this.__defineLayer();
    this.__registerMapActionChangedCallback();
  }

  static isVlMapAction() {
    return true;
  }

  /**
   * Returns the vl-mapactions map action.
   *
   * @return {Object}
   */
  get action() {
    return this._action;
  }

  get _mapElement() {
    return this.closest('vl-map');
  }

  get _defaultActive() {
    return this.hasAttribute('default-active');
  }

  get _callback() {
    return (...args) => (this.__callback ? this.__callback(...args) : null);
  }

  /**
   * Activate the map action on the map.
   */
  activate() {
    this._mapElement.activateAction(this.action);
  }

  _createAction() {
    console.warn('implementatie van _createAction ontbreekt');
  }

  _processAction() {
    if (this.action) {
      this._mapElement.addAction(this.action);
      if (this._defaultActive) {
        this.activate();
      }
    }
  }

  __registerMapActionChangedCallback() {
    this._mapElement.addEventListener(VlMap.EVENTS.action.activated, () => {
      this.setAttribute('active', this._mapElement.activeAction === this.action);
    });
  }

  __defineLayer() {
    if (this._layerElement) {
      this.layer = this._layerElement.layer;
    }
  }
}

define('vl-map-action', VlMapAction);
