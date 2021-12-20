import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from './styles.scss';

const props = {
  disabled: 'data-vl-disabled',
  type: 'data-vl-type',
  closable: 'data-vl-closable',
  checkable: 'data-vl-checkable',
};

const { disabled, type, closable, checkable } = props;

export class VlPill extends LitElement {
  static get EVENTS() {
    return {
      close: 'close',
      check: 'check',
    };
  }

  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      [disabled]: { type: Boolean },
      [type]: { type: String },
      [closable]: { type: Boolean },
      [checkable]: { type: Boolean },
    };
  }

  constructor() {
    super();
    this[type] = '';
    this[disabled] = false;
    this[closable] = false;
    this[checkable] = false;
  }

  checked() {
    const checkbox = this._checkbox;
    if (checkbox) {
      return !!checkbox.checked;
    }
  }

  setChecked() {
    const checkbox = this._checkbox;
    if (checkbox) {
      checkbox.checked = checked;
      this._checked();
    }
  }

  _checkbox() {
    return this.shadowRoot.querySelector('#checkbox');
  }

  _closeButton() {
    return this.shadowRoot.querySelector('#close');
  }

  _isDisabled() {
    return this.hasAttribute('data-vl-disabled');
  }

  render() {
    const disabledClasses = this[disabled] ? 'vl-pill--disabled vl-pill--data-vl-disabled' : '';
    const typeClasses = this[type] !== '' ? `vl-pill--${this[type]}` : '';

    if (this[closable]) {
      return html`
        <div class="vl-pill vl-pill--closable ${disabledClasses} ${typeClasses}">
          <slot></slot>
          <button
            id="close"
            class="vl-pill__close"
            type="button"
            @click=${() => this.dispatchEvent(new CustomEvent(VlPill.EVENTS.close))}
          >
            <span class="vl-u-visually-hidden">Optie verwijderen</span>
          </button>
        </div>
      `;
    }

    if (this[checkable]) {
      return html`
        <label class="vl-pill vl-pill--checkable ${disabledClasses} ${typeClasses}" for="checkbox">
          <input
            class="vl-pill--checkable__checkbox"
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value="checked"
            @click=${() =>
          this.dispatchEvent(
            new CustomEvent('check', {
              bubbles: true,
              composed: true,
            }),
          )}
          />
          <span></span> <slot></slot>
        </label>
      `;
    }

    return html`
      <span class="vl-pill ${disabledClasses} ${typeClasses}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('vl-pill', VlPill);
