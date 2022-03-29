import { define, nativeVlElement } from '../../utils/core';
import './lib';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-core/dist/js/core.js';

export class VlToaster extends nativeVlElement(HTMLDivElement) {
  static get _observedAttributes() {
    return ['fadeout'];
  }

  static get _observedClassAttributes() {
    return ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  }

  static get _dressedAttributeName() {
    return 'data-vl-toaster-dressed';
  }

  connectedCallback() {
    this.classList.add('vl-toaster');
    this._dress();
  }

  get _classPrefix() {
    return 'vl-toaster--';
  }

  get toasterFadeClass() {
    return 'vl-alert--fade-out';
  }

  get _dressed() {
    return !!this.getAttribute(VlToaster._dressedAttributeName);
  }

  /**
   *
   * Toont een alert
   *
   * @return {void}
   * @param {HTMLElement} alert
   */
  push(alert) {
    setTimeout(() => {
      this._element.appendChild(alert);
    });
  }

  /**
   *
   * Verwijdert een alert uit hun parent
   * @return {void}
   * @param {HTMLElement} alert
   */
  closeAlert(alert) {
    vl.util.addClass(alert, this.toasterFadeClass);
    window.setTimeout(() => {
      alert.remove();
    }, 300);
  }

  _fadeoutChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._element.setAttribute('data-vl-toaster-fadeout', true);
    } else {
      this._element.removeAttribute('data-vl-toaster-fadeout');
    }
  }

  _dress() {
    if (!this._dressed) {
      vl.toaster.dress(this);
    }
  }
}

define('vl-toaster', VlToaster, { extends: 'div' });
