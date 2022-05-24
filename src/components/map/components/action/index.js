import { unByKey } from 'ol/Observable';
import { vlElement, define } from '../../../../utils/core';

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
    this._active = false;
  }

  static isVlMapAction() {
    return true;
  }

  /**
   * Geeft de vl-mapactions kaart actie.
   * */
  get action() {
    return this._action;
  }

  /**
   * Geeft de default active state van deze actie
   * */
  get defaultActive() {
    return this.hasAttribute('default-active');
  }

  /**
   * Geeft de activate state van deze actie
   * */
  get active() {
    return this._active;
  }

  get _mapElement() {
    return this.closest('vl-map');
  }

  get _callback() {
    return (...args) => (this.__callback ? this.__callback(...args) : null);
  }

  /**
   * Controlled active property for control outside op map component; Activates or deactivates an action on the map
   */
  set active(value) {
    if (value) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  /**
   * Activeer de kaart actie op de kaart.
   */
  activate() {
    this._mapElement.activateAction(this.action);
  }

  /**
   * Deactiveer de kaart actie op de kaart.
   */
  deactivate() {
    this._mapElement.deactivateAction(this.action);
  }

  _createAction() {
    console.warn('implementatie van _createAction ontbreekt');
  }

  _processAction() {
    if (this.action) {
      this.action.element = this;
      this._mapElement.addAction(this.action);

      if (this.defaultActive) {
        this.activate();
      }
    }
  }

  __defineLayer() {
    if (this._layerElement) {
      this.layer = this._layerElement.layer;
    }
  }
}

define('vl-map-action', VlMapAction);
