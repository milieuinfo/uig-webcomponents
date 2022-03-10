import { vlElement, define } from '../../../../utils/core';

// Mixin to add logic to a group of radio elements
export const vlRadioGroup = {
  setKeyEventsRegistered() {
    const parent = this._parentElement();
    parent.setAttribute('data-vl-key-events-registered', '');
  },

  hasKeyEventsRegistered() {
    const parent = this._parentElement();
    return parent.hasAttribute('data-vl-key-events-registered');
  },

  setFocusTransmitted() {
    const parent = this._parentElement();
    parent.setAttribute('data-vl-focus-transmitted', '');
  },

  hasFocusTransmitted() {
    const parent = this._parentElement();
    return parent.hasAttribute('data-vl-focus-transmitted');
  },

  registerKeyEvents(radios) {
    if (!this.hasKeyEventsRegistered()) {
      const keys = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
      };
      const parent = this._parentElement();
      parent.addEventListener('keydown', (event) => {
        const enabledRadios = radios.filter((radio) => !radio.disabled);
        const includesArrowKey = Object.values(keys).includes(event.keyCode);
        if (includesArrowKey) {
          event.preventDefault();
          const focusedRadio = enabledRadios.find((radio) => radio.hasFocus);
          const firstRadio = enabledRadios[0];
          const lastRadio = enabledRadios[enabledRadios.length - 1];
          switch (event.keyCode) {
            case keys.up:
            case keys.left: {
              const previousRadio = enabledRadios[enabledRadios.indexOf(focusedRadio) - 1];
              (previousRadio || lastRadio).check();
              break;
            }
            case keys.down:
            case keys.right: {
              const nextRadio = enabledRadios[enabledRadios.indexOf(focusedRadio) + 1];
              (nextRadio || firstRadio).check();
              break;
            }
            default:
              break;
          }
        }
      });
    }
    this.setKeyEventsRegistered();
  },

  transmitFocus(radios) {
    if (!this.hasFocusTransmitted()) {
      const parent = this._parentElement();
      parent.addEventListener('focus', () => {
        const enabledRadios = radios.filter((radio) => !radio.disabled);
        parent.addEventListener(
          'keyup',
          (event) => {
            if (event.shiftKey) {
              const checkedRadio = enabledRadios.find((radio) => radio.checked);
              const latestRadio = enabledRadios[enabledRadios.length - 1];
              (checkedRadio || latestRadio).focus();
            }
          },
          { once: true },
        );
        const checkedRadio = enabledRadios.find((radio) => radio.checked);
        const firstRadio = enabledRadios[0];
        if (checkedRadio || firstRadio) {
          (checkedRadio || firstRadio).focus();
        }
      });
    }
    this.setFocusTransmitted();
  },

  _parentElement() {
    return this.parentElement || this.getRootNode().host || this.getRootNode();
  },
};

export class VlRadioGroup extends vlElement(HTMLElement) {
  constructor() {
    super(`<slot></slot>`);
    Object.assign(this, vlRadioGroup);
  }

  connectedCallback() {
    this._groupRadios();
    this._processTabIndex();
    this._transmitFocus();
  }

  get radios() {
    return [...this.querySelectorAll('vl-radio')];
  }

  get checkedRadio() {
    return this.radios.find((radio) => radio.checked);
  }

  _groupRadios() {
    this.radios.forEach((radio) => radio.setAttribute('data-vl-name', 'radio'));
  }

  _processTabIndex() {
    this.tabIndex = 0;
    this.radios.forEach((radio) =>
      radio.addEventListener('focus', () => {
        this.tabIndex = -1;
      }),
    );
    this.radios.forEach((radio) =>
      radio.addEventListener('blur', () => {
        this.tabIndex = 0;
      }),
    );
  }

  _transmitFocus() {
    this.tabIndex = 0;
    this.addEventListener('focus', () => {
      this.addEventListener(
        'keyup',
        (event) => {
          if (event.shiftKey) {
            this.radios[this.radios.length - 1].focus();
          }
        },
        { once: true },
      );
      this.radios[0].focus();
    });
    this.radios.forEach((radio) =>
      radio.addEventListener('focus', () => {
        this.tabIndex = -1;
      }),
    );
    this.radios.forEach((radio) =>
      radio.addEventListener('blur', () => {
        this.tabIndex = 0;
      }),
    );
  }
}

define('vl-radio-group', VlRadioGroup);
