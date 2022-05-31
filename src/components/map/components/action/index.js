import { LitElement } from 'lit';
import { define } from '../../../../utils/core';

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
export class VlMapAction extends LitElement {
  constructor() {
    super();
    this._active = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.__defineLayer();
  }

  static isVlMapAction() {
    return true;
  }

  /**
   * Gives the vl-mapactions map action.
   * */
  get action() {
    return this._action;
  }

  get _mapElement() {
    return this.closest('vl-map');
  }

  get _callback() {
    return (...args) => (this.__callback ? this.__callback(...args) : null);
  }

  static get properties() {
    return {
      active: {
        type: Boolean,
        hasChanged: () => true, // Trigger update each time active setter is used
      },
      defaultActive: { type: Boolean, attribute: 'data-vl-default-active', reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'active':
          if (this.active) {
            this.activate();
          } else {
            this.deactivate();
          }
          break;
        default:
          break;
      }
    });
  }

  activate() {
    // Do not activate action if its layer is invisible
    if (this.action && this.action.layer.get('visible')) {
      this._mapElement.changeActiveAction(this.action);
    }
  }

  deactivate() {
    // Only deactivate if this action is currently active
    if (this.action && this.action === this._mapElement.activeAction) {
      // Do not activate default active action when the action to be deactivated IS the default active action
      // or when the layer of the default active action is invisible
      this._mapElement.changeActiveAction(
        this._mapElement.defaultAction &&
          this.action !== this._mapElement.defaultAction &&
          this._mapElement.defaultAction.layer.get('visible')
          ? this._mapElement.defaultAction
          : undefined,
      );
    }
  }

  _createAction() {
    console.warn('_createAction implementation is missing');
  }

  _processAction() {
    if (this.action) {
      this.action.element = this;
      this._mapElement.addAction(this.action);

      // Activate the action when
      // - the action is the default active action and no other action has yet been activated
      // - the controlled active state of the action is true
      if (
        (this.defaultActive && !this._mapElement.activeAction) /* || this._mapElement.activeAction === this.action */ ||
        this.active
      ) {
        this.activate();
      }
    }
  }

  __defineLayer() {
    if (this._layerElement) {
      this.layer = this._layerElement.layer;
    }
  }

  reset() {
    this._active = false;
  }
}

define('vl-map-action', VlMapAction);
