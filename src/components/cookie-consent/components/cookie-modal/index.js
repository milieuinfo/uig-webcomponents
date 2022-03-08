import { vlElement, define, awaitUntil } from '../../../../utils/core';
import '../../../grid';
import '../../../icon';
import '../../../button';
import '../../../action-group';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-core/dist/js/core.js';
import '../../../modal/lib';
import styles from '../../styles.scss';

export class VlCookieModal extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['id', 'title', 'closable', 'not-cancellable', 'open', 'not-auto-closable', 'allow-overflow'];
  }

  static get _closableAttribute() {
    return 'data-vl-modal-closable';
  }

  static get _closeAttribute() {
    return 'data-vl-modal-close';
  }

  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <div class="vl-modal">
        <dialog class="vl-modal-dialog" data-vl-modal tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="modal-toggle-title" aria-describedby="modal-toggle-description">
          <div is="vl-grid" data-vl-is-stacked>
            <div id="modal-toggle-description" is="vl-column" data-vl-size="12" data-vl-medium-size="12" class="vl-modal-dialog__content">
              <slot name="content">Modal content</slot>
            </div>
          </div>
        </dialog>
      </div>
    `);
  }

  connectedCallback() {
    this.dress();
  }

  get _dialogElement() {
    return this._element.querySelector('dialog');
  }

  get _titleElement() {
    return this._element.querySelector('#modal-toggle-title');
  }

  get _actionGroupElement() {
    return this._element.querySelector('#modal-action-group');
  }

  get _cancelElement() {
    return this._element.querySelector('#modal-toggle-cancellable');
  }

  get _slotButtonElement() {
    return this._element.querySelector('slot[name="button"]');
  }

  get _dressed() {
    return !!this.getAttribute('data-vl-modal-dressed');
  }

  /**
   * Initialiseer de modal config.
   */
  dress() {
    if (!this._dressed) {
      vl.modal.dress(this._dialogElement);
    }
  }

  /**
   * Handmatig openen van modal.
   */
  open() {
    vl.modal.lastClickedToggle = this._dialogElement;
    if (!this._dialogElement.hasAttribute('open')) {
      awaitUntil(() => this._dialogElement.isConnected).then(() => {
        vl.modal.toggle(this._dialogElement);
      });
    }
  }

  /**
   * Handmatig sluiten van modal.
   */
  close() {
    if (this._dialogElement.hasAttribute('open')) {
      vl.modal.toggle(this._dialogElement);
    }
  }

  /**
   * Mogelijkheid om functies toe te voegen op events die op de dialog voorkomen.
   * @param {String} event
   * @param {Function} callback
   */
  on(event, callback) {
    this._dialogElement.addEventListener(event, callback);
  }

  _getCloseButtonTemplate() {
    return this._template(`
      <button id="close" type="button" class="vl-modal-dialog__close" data-vl-modal-close>
        <i class="vl-modal-dialog__close__icon vl-vi vl-vi-cross" aria-hidden="true"></i>
        <span class="vl-u-visually-hidden">Venster sluiten</span>
      </button>
    `);
  }

  _getTitleTemplate(titel) {
    return this._template(`
      <h2 class="vl-modal-dialog__title" id="modal-toggle-title">${titel}</h2>`);
  }

  _getCancelTemplate() {
    return this._template(`
      <button is="vl-button-link" data-vl-modal-close id="modal-toggle-cancellable">
          <span is="vl-icon" icon="cross" before data-vl-modal-close></span>Annuleer
      </button>`);
  }

  _idChangedCallback(oldValue, newValue) {
    this._dialogElement.id = newValue;
  }

  _titleChangedCallback(oldValue, newValue) {
    if (newValue) {
      if (this._titleElement) {
        this._titleElement.innerText = newValue;
      } else {
        this._dialogElement.prepend(this._getTitleTemplate(newValue));
      }
    } else if (this._titleElement) {
      this._titleElement.remove();
    }
  }

  _notCancellableChangedCallback(oldValue, newValue) {
    if (newValue == undefined && !this._cancelElement) {
      this._actionGroupElement.append(this._getCancelTemplate());
    } else if (newValue != undefined && this._cancelElement) {
      this._cancelElement.remove();
    }
  }

  _openChangedCallback(oldValue, newValue) {
    this._dialogElement.setAttribute('open', newValue);
  }

  _closableChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._closeButtonElement = this._getCloseButtonTemplate();
      this._dialogElement.setAttribute(VlModal._closableAttribute, '');
      this._dialogElement.appendChild(this._closeButtonElement);
    } else if (this._closeButtonElement) {
      this._closeButtonElement.remove();
      this._dialogElement.removeAttribute(VlModal._closableAttribute);
    }
  }

  _notAutoClosableChangedCallback(oldValue, newValue) {
    if (newValue == undefined && !this._slotButtonElement.hasAttribute(VlModal._closeAttribute)) {
      this._slotButtonElement.setAttribute(VlModal._closeAttribute, '');
    } else if (newValue != undefined && this._slotButtonElement.hasAttribute(VlModal._closeAttribute)) {
      this._slotButtonElement.removeAttribute(VlModal._closeAttribute);
    }
  }
}

define('vl-cookie-modal', VlCookieModal);
