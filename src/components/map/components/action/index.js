import { vlElement, define } from '../../../../utils/core';
import { EVENTS } from '../../enums';

/**
 * VlMapAction
 * @class
 * @classdesc De abstracte kaart actie component.
 *
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-default-active - Attribuut wordt gebruikt om de actie standaard te activeren.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-delete-action.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-modify-actions.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-select-action.html|Demo}
 */
export class VlMapAction extends vlElement(HTMLElement) {
  connectedCallback() {
    this.__defineLayer();
    // this.__registerMapActionChangedCallback();
  }

  static isVlMapAction() {
    return true;
  }

  /**
   * Geeft de vl-mapactions kaart actie.
   *
   * @return {Object}
   */
  get action() {
    return this._action;
  }

  get _mapElement() {
    return this.closest('vl-map');
  }

  get defaultActive() {
    return this.hasAttribute('default-active');
  }

  get _callback() {
    return (...args) => (this.__callback ? this.__callback(...args) : null);
  }

  get active() {
    return this.getAttribute('active') && this.getAttribute('active') === 'true';
  }

  set active(value) {
    if (value) {
      this._mapElement.map.activateAction(this.action);
      this._mapElement.dispatchEvent(new Event(EVENTS.ACTIVATED));
    } else {
      this._mapElement.map.deactivateAction(this.action);
      this._mapElement.dispatchEvent(new Event(EVENTS.DEACTIVATED));
    }
  }

  /**
   * Activeer de kaart actie op de kaart.
   */
  activate() {
    this.active = true;
  }

  /**
   * Deactiveer de kaart actie op de kaart.
   */
  deactivate() {
    this.active = false;
  }

  _createAction() {
    console.warn('implementatie van _createAction ontbreekt');
  }

  _processAction() {
    if (this.action) {
      this._mapElement.addAction(this.action, this.defaultActive);
      if (this.defaultActive) {
        this.activate();
      }
    }
  }

  // __registerMapActionChangedCallback() {
  //   this._mapElement.addEventListener(EVENTS.ACTIVATED, () => {
  //     console.log('active EVENT');
  //     this.setAttribute('active', this._mapElement.activeAction === this.action);
  //   });

  //   this._mapElement.addEventListener(EVENTS.DEACTIVATED, () => {
  //     this.setAttribute('active', this._mapElement.activeAction === this.action);
  //   });
  // }

  __defineLayer() {
    if (this._layerElement) {
      this.layer = this._layerElement.layer;
    }
  }
}

define('vl-map-action', VlMapAction);
