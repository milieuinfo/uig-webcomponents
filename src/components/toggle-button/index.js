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

  constructor() {
    super();
    this.icon = undefined;
    this.iconPlacement = ICON_PLACEMENT.AFTER;
    this.text = '';
    this.textHidden = false;
    this.disabled = false;

    // Uncontrolled state
    this._active = false;

    // Controlled state
    this.active = undefined;
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
      text: {
        type: String,
        attribute: 'data-vl-text',
        reflect: true,
      },
      textHidden: {
        type: Boolean,
        attribute: 'data-vl-text-hidden',
        reflect: true,
      },
      disabled: {
        type: Boolean,
        attribute: 'data-vl-disabled',
        reflect: true,
      },
      _active: {
        type: Boolean,
        state: true,
      },
      active: {
        type: Boolean,
        attribute: 'active',
        relfect: true,
      },
    };
  }

  _fireChange() {
    this.dispatchEvent(new CustomEvent('change', { detail: `${this._active}` }));
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'active':
          if (this.active !== undefined) {
            this._active = this.active;
            this._fireChange();
          }
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
        ?disabled=${this.disabled}
        ?data-vl-tertiary=${!this._active}
        @click=${() => {
          if (this.active === undefined) {
            this._active = !this._active;
            this._fireChange();
          }
        }}
      >
        ${children}
      </button>
    `;
  }

  render() {
    if (this.icon) {
      if (this.iconPlacement === ICON_PLACEMENT.BEFORE) {
        return html`
          ${this._buttonWrap(html`<span is="vl-icon" data-vl-icon=${this.icon} data-vl-before></span>${this.text}`)}
        `;
      }
      if (this.textHidden) {
        return html`${this._buttonWrap(
          html`<span is="vl-icon" data-vl-icon=${this.icon}></span>
            <span is="vl-text" data-vl-visually-hidden="">${this.text}</span>`,
        )}`;
      }
      return html`
        ${this._buttonWrap(html`${this.text} <span is="vl-icon" data-vl-icon=${this.icon} data-vl-after></span>`)}
      `;
    }
    return html`${this._buttonWrap(this.text)}`;
  }
}

customElements.define('vl-toggle-button', VlToggleButton);
