import { vlElement, define } from '../../utils/core';
import { vlRadioGroup } from './components/vl-radio-group';

import styles from './styles.scss';

export class VlRadio extends vlElement(HTMLElement) {
  static get formAssociated() {
    return true;
  }

  static get _observedAttributes() {
    return ['label', 'name', 'value', 'checked'];
  }

  static get _observedChildClassAttributes() {
    return ['block', 'single', 'disabled', 'error'];
  }

  constructor() {
    super(`
      <style>
      ${styles}
      </style>
      
      <label class="vl-radio" for="radio">
        <input class="vl-radio__toggle" type="radio" id="radio" name="radio"/>
        <div class="vl-radio__label">
          <span id="label-text">
            <slot></slot>
          </span>
        </div>
      </label>
    `);

    Object.assign(this, vlRadioGroup);
    if (this.attachInternals) {
      this._internals = this.attachInternals();
    }
  }

  connectedCallback() {
    this._inputElement.addEventListener('change', () => this._check());
    this._registerChangeEvent();
    setTimeout(() => {
      this.registerKeyEvents(this._radios);
      this.transmitFocus(this._radios);
    });
  }

  // Called when the form is reset
  formResetCallback() {
    this.checked = this.hasAttribute('checked');
  }

  // Returns a reference to the parent <form> element
  get form() {
    return this._internals?.form;
  }

  // Returns the element's current validity state
  get validity() {
    return this._internals?.validity;
  }

  // Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willvalidate is false), or it satisfies its constraints. This value can be set by the setCustomValidity method.
  get validationMessage() {
    return this._internals?.validationMessage;
  }

  // Returns whether the element is a candidate for constraint validation.
  get willValidate() {
    return this._internals?.willValidate;
  }

  get value() {
    return this._inputElement.value;
  }

  get checked() {
    return this._inputElement.checked;
  }

  get disabled() {
    return this._inputElement.disabled;
  }

  get hasFocus() {
    return this._inputElement === this._getActiveElement();
  }

  set checked(value) {
    this._inputElement.checked = value;
    if (value) {
      this._check();
    }
    return value;
  }

  set disabled(value) {
    this._inputElement = value;
    return this._inputElement.disabled;
  }

  get _classPrefix() {
    return 'vl-radio--';
  }

  get _inputElement() {
    return this._element.querySelector('input');
  }

  get _labelText() {
    return this._element.querySelector('#label-text');
  }

  get _radios() {
    const isSlot = this.assignedSlot != undefined;
    const rootNode = isSlot ? this.closest('vl-radio-group') : this.getRootNode();
    return [...(rootNode || this.getRootNode()).querySelectorAll(`vl-radio[data-vl-name='${this.dataset.vlName}']`)];
  }

  check() {
    this._inputElement.click();
  }

  focus() {
    this._inputElement.focus();
  }

  _check() {
    this.focus();
    this._inputElement.tabIndex = 0;
    this._radios
      .filter((radio) => radio.checked)
      .filter((radio) => radio !== this)
      .forEach((radio) => {
        radio.checked = false;
      });
    this._radios
      .filter((radio) => !radio.checked)
      .forEach((radio) => {
        radio._inputElement.tabIndex = '-1';
      });
  }

  _labelChangedCallback(oldValue, newValue) {
    this._labelText.textContent = newValue;
  }

  _valueChangedCallback(oldValue, newValue) {
    this._inputElement.value = newValue;
  }

  _nameChangedCallback(oldValue, newValue) {
    if (this._inputElement.name !== newValue) {
      this._inputElement.name = newValue;
      this.setAttribute('name', newValue);
    }
  }

  _checkedChangedCallback(oldValue, newValue) {
    this._inputElement.checked = newValue != null;
  }

  _disabledChangedCallback(oldValue, newValue) {
    this._inputElement.disabled = newValue != null;
  }

  _singleChangedCallback(oldValue, newValue) {
    this._toggleClass(this._labelText, newValue, 'vl-u-visually-hidden');
  }

  _getActiveElement(element = document) {
    if (element.activeElement && element.activeElement.shadowRoot) {
      return this._getActiveElement(element.activeElement.shadowRoot);
    }
    return element.activeElement || element;
  }

  _registerChangeEvent() {
    this._inputElement.addEventListener('change', () => this.dispatchEvent(new Event('change')));
  }
}

define('vl-radio', VlRadio);
