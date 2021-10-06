import { html, css, LitElement, unsafeCSS } from "lit";
import styles from "./styles.scss";

const props = {
  label: "data-vl-label",
  name: "data-vl-name",
  value: "data-vl-value",
  checked: "data-vl-checked",
  vlSwitch: "data-vl-switch",
  block: "data-vl-block",
  single: "data-vl-single",
  disabled: "data-vl-disabled",
  error: "data-vl-error",
};

const {
  label,
  name,
  value,
  checked,
  vlSwitch,
  block,
  single,
  disabled,
  error,
} = props;
export class VlCheckbox extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      [label]: { type: String },
      [name]: { type: String },
      [value]: { type: String },
      [checked]: {
        type: Boolean,
      },
      [vlSwitch]: { type: Boolean },
      [block]: { type: Boolean },
      [single]: { type: Boolean },
      [disabled]: { type: Boolean },
      [error]: { type: Boolean },
    };
  }

  /**
   * Callback called when the form is reset.
   */
  // formResetCallback() {
  //   this.checked = this.hasAttribute("checked");
  // }

  get checked() {
    return this.shadowRoot.querySelector("#checkbox").checked;
  }

  /**
   * Zet de waarde van het checkbox input element.
   *
   * @param {boolean} value
   */
  set checked(value) {
    return (this.shadowRoot.querySelector("#checkbox").checked = value);
  }

  constructor() {
    super();
    this[vlSwitch] = false;
    this[name] = "checkbox";
  }

  _handleChange() {
    this.dispatchEvent(new Event("change"));
  }

  render() {
    console.log(this._internals);
    const classes = `vl-checkbox ${
      this[disabled] && "vl-checkbox--disabled vl-checkbox--data-vl-disabled"
    } ${this[block] && "vl-checkbox--block vl-checkbox--data-vl-block"} ${
      this[error] && "vl-checkbox--error vl-checkbox--data-vl-error"
    }`;

    // if (this.attachInternals) {
    //   this._internals = this.attachInternals();
    // } else {
    //   this._internals = null;
    // }

    return this[vlSwitch]
      ? html`<div class="vl-checkbox--switch__wrapper">
          <input
            class="vl-checkbox--switch"
            type="checkbox"
            id="checkbox"
            value=${this[value]}
            value=${this[value]}
          />
          <label class="vl-checkbox__label" for="checkbox">
            <span class="vl-checkbox--switch__label">
              <span aria-hidden></span>
            </span>
            <span>
              <slot>${this[label]}</slot>
            </span>
          </label>
        </div>`
      : html`<label class=${classes} for="checkbox">
          <input
            id="checkbox"
            ?disabled=${this[disabled]}
            class="vl-checkbox__toggle"
            type="checkbox"
            name=${this[name]}
            value=${this[value]}
            .checked=${this[checked]}
            @change=${() => this._handleChange()}
          />
          <div class="vl-checkbox__label">
            <i class="vl-checkbox__box" aria-hidden></i>
            <span class=${this[single] && "vl-u-visually-hidden"}>
              <slot>${this[label]}</slot>
            </span>
          </div>
        </label>`;
  }
}

customElements.define("vl-checkbox", VlCheckbox);
