import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from './styles.scss';
import '../button';
import { ICON_PLACEMENT } from './enums';

export class VlToggleButton extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  createRenderRoot() {
    const root = super.createRenderRoot();
    root.addEventListener('click', (event) => {
      const { disabled } = this;
      if (disabled) {
        event.stopPropagation();
      }
    });
    return root;
  }

  constructor() {
    super();
    this.iconPlacement = ICON_PLACEMENT.AFTER;
    this.textHidden = false;
    this.disabled = false;
  }

  static get properties() {
    return {
      icon: {
        type: String,
        attribute: 'data-vl-icon',
        reflect: true,
      },
      iconPlacement: {
        type: String,
        attribute: 'data-vl-icon-placement',
        reflect: true,
      },
      textHidden: {
        type: Boolean,
        attribute: 'data-vl-text-hidden',
        reflect: true,
      },
      error: {
        type: Boolean,
        attribute: 'data-vl-error',
        reflect: true,
      },
      block: {
        type: Boolean,
        attribute: 'data-vl-block',
        reflect: true,
      },
      large: {
        type: Boolean,
        attribute: 'data-vl-large',
        reflect: true,
      },
      wide: {
        type: Boolean,
        attribute: 'data-vl-wide',
        reflect: true,
      },
      narrow: {
        type: Boolean,
        attribute: 'data-vl-narrow',
        reflect: true,
      },
      loading: {
        type: Boolean,
        attribute: 'data-vl-loading',
        reflect: true,
      },
      disabled: {
        type: Boolean,
        attribute: 'disabled',
        reflect: true,
      },
      _active: {
        type: Boolean,
        state: true,
      },
      active: {
        type: Boolean,
        attribute: 'active',
      },
    };
  }

  _isControlled() {
    return this.active !== undefined;
  }

  _fireChange() {
    this.dispatchEvent(new CustomEvent('change', { detail: { isActive: this._active } }));
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'active':
          if (this._isControlled()) {
            this._active = this.active;
          }
          break;
        case '_active':
          this._fireChange();
          break;
        default:
          break;
      }
    });
  }

  _buttonWrap(children) {
    return html`
      <button
        is="vl-button"
        ?data-vl-error=${this._active && this.error}
        ?data-vl-block=${this.block}
        ?data-vl-large=${this.large}
        ?data-vl-wide=${this.wide}
        ?data-vl-narrow=${this.narrow}
        ?data-vl-loading=${this.loading}
        ?disabled=${this.disabled}
        ?data-vl-tertiary=${!this._active}
        @click=${() => {
          if (!this._isControlled()) {
            this._active = !this._active;
          }
        }}
      >
        ${children}
      </button>
    `;
  }

  _iconTemplate() {
    if (this.textHidden) {
      return html`${this._buttonWrap(
        html`<span is="vl-icon" data-vl-icon=${this.icon}></span>
          <span is="vl-text" data-vl-visually-hidden><slot></slot></span>`,
      )}`;
    }
    if (this.iconPlacement === ICON_PLACEMENT.BEFORE) {
      return html`${this._buttonWrap(
        html`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span><slot></slot>`,
      )}`;
    }
    return html`${this._buttonWrap(
      html`<slot></slot><span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`,
    )}`;
  }

  render() {
    return this.icon ? this._iconTemplate() : html`${this._buttonWrap(html`<slot></slot>`)}`;
  }
}

customElements.define('vl-toggle-button', VlToggleButton);
