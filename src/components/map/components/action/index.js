import { LitElement } from 'lit';

export class VlMapAction extends LitElement {
  static get properties() {
    return {
      active: { type: Boolean },
      _action: {},
      defaultActive: { type: Boolean, attribute: 'data-vl-default-active', reflect: true },
    };
  }

  constructor() {
    super();
    // this.isVlMapAction = true;
    this._mapElement = this.closest('vl-map');
    this._active = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // this.__defineLayer();
  }

  isVlMapAction() {
    return true;
  }

  // get active() {
  //   return this._active;
  // }

  activateRightAction() {
    // TODO: implement prevvalue active
    if (this.active || this.defaultActive) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  activate() {
    this._mapElement.activateAction(this._action);
  }

  deactivate() {
    this._mapElement.deactivateAction(this._action);
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      switch (propName) {
        case 'active':
          // this._active = this.active;
          this.activateRightAction();
          break;
        case '_action':
          this._action.element = this;
          this._mapElement.addAction(this._action);
          // to confirm
          this.action = this._action;
          this.activateRightAction();
          break;
        default:
          break;
      }
    });
  }

  _callback() {
    return (...args) => (this.__callback ? this.__callback(...args) : null);
  }

  _createAction() {
    console.warn('implementatie van _createAction ontbreekt');
  }

  // _processAction() {
  //   if (this._action) {
  //     this._action.element = this;
  //     this._mapElement.addAction(this._action);

  //     if (this.defaultActive) {
  //       this.activate();
  //     }
  //   }
  // }

  __defineLayer() {
    if (this._layerElement) {
      this.layer = this._layerElement.layer;
    }
  }
}

customElements.define('vl-map-action', VlMapAction);
