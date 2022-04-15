import { html, css, LitElement, unsafeCSS } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.scss';
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
      opacity: {
        type: Number,
        attribute: 'data-vl-opacity',
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
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'checked':
          if (this.checkboxRef.value) {
            this.checkboxRef.value.checked = this.checked;
          }
          break;
        default:
          break;
      }
    });
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
        <div class="${classMap(closableClasses)}" style="opacity: ${ifDefined(this.opacity)}">
            <slot></slot>
            <button
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
        <label class="${classMap(checkableClasses)}" for="checkbox" style="opacity: ${ifDefined(this.opacity)}">
          <input
            class="vl-pill--checkable__checkbox"
            type="checkbox"
            id="checkbox"
            name="checkbox"
            ?checked=${this.checked}
            ${ref(this.checkboxRef)}
            value="checked"
            @input=${(event) => {
              this.checked = event.target.checked;
              this.dispatchEvent(
                new CustomEvent('check', {
                  bubbles: true,
                  composed: true,
                  detail: { checked: this.checked },
                }),
              );
            }}
          />
          <span></span> <slot></slot>
        </label>
      `;
    }

    return html`
      <span class="${classMap(classes)}" style="opacity: ${ifDefined(this.opacity)}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('vl-pill', VlPill);
