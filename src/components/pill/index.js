import { html, css, LitElement, unsafeCSS } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import styles from './styles.scss';
import { classMap } from 'lit/directives/class-map.js';
import { TYPE } from './enums';

export class VlPill extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        attribute: 'data-vl-disabled',
        reflect: true,
      },
      type: {
        type: String,
        attribute: 'data-vl-type',
        reflect: true,
      },
      closable: {
        type: Boolean,
        attribute: 'data-vl-closable',
        reflect: true,
      },
      checkable: {
        type: Boolean,
        attribute: 'data-vl-checkable',
        reflect: true,
      },
      checked: {
        type: Boolean,
        attribute: 'data-vl-checked',
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.disabled = false;
    this.closable = false;
    this.checkable = false;
    this.checked = false;
    this.checkboxRef = createRef();
    this.closeRef = createRef();
  }

  setChecked() {
    this.checked = !this.checked;

    this.dispatchEvent(
      new CustomEvent('check', {
        bubbles: true,
        composed: true,
        detail: { checked: this.checked },
      }),
    );
  }

  render() {
    const classes = {
      'vl-pill': true,
      'vl-pill--disabled': this.disabled,
      'vl-pill--data-vl-disabled': this.disabled,
      'vl-pill--success': this.type === TYPE.SUCCESS,
      'vl-pill--warning': this.type === TYPE.WARNING,
      'vl-pill--error': this.type === TYPE.ERROR,
    };

    const closableClasses = {
      ...classes,
      'vl-pill--closable': this.closable,
    };

    const checkableClasses = {
      ...classes,
      'vl-pill--checkable': this.checkable,
    };

    if (this.closable) {
      return html`
        <div class="${classMap(closableClasses)}">
            <slot></slot>
            <button
              ${ref(this.closeRef)}
              class="vl-pill__close"
              type="button"
              @click=${() => this.dispatchEvent(new CustomEvent('close'))}
            >
              <span class="vl-u-visually-hidden">Optie verwijderen</span>
            </button>
          </div>
        </div>
      `;
    }

    if (this.checkable) {
      return html`
        <label class="${classMap(checkableClasses)}" for="checkbox">
          <input
            class="vl-pill--checkable__checkbox"
            type="checkbox"
            id="checkbox"
            name="checkbox"
            ?checked=${this.checked}
            ${ref(this.checkboxRef)}
            value="checked"
            @change=${() => this.setChecked()}
          />
          <span></span> <slot></slot>
        </label>
      `;
    }

    return html`
      <span class="${classMap(classes)}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('vl-pill', VlPill);
