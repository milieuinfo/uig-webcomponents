import { html, css, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./styles.scss";
import "@govflanders/vl-ui-util/dist/js/util.js";
import ProgressBar from "@govflanders/vl-ui-progress-bar/dist/js/progress-bar.js";
import "../tooltip";

export class VlProgressBar extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      numeric: { type: Boolean, attribute: "data-vl-numeric", reflect: true },
      activeStep: {
        type: Number,
        attribute: "data-vl-active-step",
        reflect: true,
      },
      focusOnChange: {
        type: Boolean,
        attribute: "data-vl-focus-on-change",
        reflect: true,
      },
      steps: { type: Array },
    };
  }

  constructor() {
    super();
    this.numeric = false;
    this.focusOnChange = false;
    this.activeStep = 1;
    this.progressBar = new ProgressBar();
    this.steps = [];
  }

  updated() {
    this.progressBar.updateStep(
      this.shadowRoot,
      this.activeStep,
      this.focusOnChange
    );
  }

  render() {
    const classes = {
      "vl-progress-bar": true,
      "vl-progress-bar--numeric": this.numeric,
      "vl-progress-bar--data-vl-numeric": this.numeric,
    };
    return html`<div class=${classMap(classes)}>
      ${this.steps.map(
        (step, index) => html`<div class="vl-progress-bar__step">
          <button
            @click=${() =>
              this.dispatchEvent(
                new CustomEvent("vl-click-step", {
                  bubbles: true,
                  composed: true,
                  detail: { step, number: index + 1 },
                })
              )}
            class="vl-progress-bar__bullet"
            aria-label=${step}
          >
            <vl-tooltip placement="top">${step}</vl-tooltip>
            <span class="vl-u-visually-hidden">${step}</span>
          </button>
        </div>`
      )}
    </div>`;
  }
}
customElements.define("vl-progress-bar", VlProgressBar);
