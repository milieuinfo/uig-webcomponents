import { html, css, LitElement, unsafeCSS } from "lit";
import "../wizard";
import "../progress-bar";
import "../titles";
import "../button";
import "../form-grid";
import "../form-message";
import "../input-field";
import "../action-group";
import "../link";
import "../icon";
import "../checkbox";
import "../grid";
import titleStyles from "../titles/styles.scss";
import gridStyles from "../grid/styles.scss";
import buttonStyles from "../button/styles.scss";
import formGridStyles from "../form-grid/styles.scss";
import formMessageStyles from "../form-message/styles.scss";
import inputFieldStyles from "../input-field/styles.scss";
import actionGroupStyles from "../action-group/styles.scss";
import linkStyles from "../link/styles.scss";
import iconStyles from "../icon/styles.scss";

export class VlWizardExample extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(titleStyles)}
      `,
      css`
        ${unsafeCSS(gridStyles)}
      `,
      css`
        ${unsafeCSS(buttonStyles)}
      `,
      css`
        ${unsafeCSS(formGridStyles)}
      `,
      css`
        ${unsafeCSS(formMessageStyles)}
      `,
      css`
        ${unsafeCSS(inputFieldStyles)}
      `,
      css`
        ${unsafeCSS(actionGroupStyles)}
      `,
      css`
        ${unsafeCSS(linkStyles)}
      `,
      css`
        ${unsafeCSS(iconStyles)}
      `,
    ];
  }

  static properties = {
    activeStep: { type: Number },
  };

  constructor() {
    super();
    this.activeStep = 1;
    this.steps = [
      {
        number: 1,
        title: "Stap 1",
        component: html` <h3 is="vl-h3">Stap 1</h3>
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="12">
              <div is="vl-form-grid" data-vl-is-stacked>
                <div is="vl-form-column" data-vl-size="12">
                  <label is="vl-form-label" for="naam" data-vl-block
                    >Naam</label
                  >
                  <input id="naam" is="vl-input-field" data-vl-block />
                </div>
              </div>
            </div>

            <div is="vl-column">
              <button
                is="vl-button"
                type="button"
                @click=${() => this.nextStep()}
              >
                Volgende
              </button>
            </div>
          </div>`,
      },
      {
        number: 2,
        title: "Stap 2",
        component: html` <h3 is="vl-h3">Stap 2</h3>
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="12">
              <div is="vl-form-grid" data-vl-is-stacked>
                <div is="vl-form-column" data-vl-size="12">
                  <label is="vl-form-label" for="years" data-vl-block
                    >Aantal jaren dienst</label
                  >
                  <input id="years" is="vl-input-field" data-vl-block />
                </div>
              </div>
            </div>
            <div is="vl-column">
              <button
                is="vl-button-link"
                type="button"
                @click=${() => this.previousStep()}
              >
                <span
                  is="vl-icon"
                  data-vl-icon="arrow-left-fat"
                  data-vl-before
                ></span>
                Vorige
              </button>
            </div>
          </div>`,
      },
    ];
    this.nextStep = () => (this.activeStep += 1);
    this.previousStep = () => (this.activeStep -= 1);
  }

  render() {
    return html`<vl-wizard>
      <h2 slot="title" is="vl-h2">Wizard title</h2>
      <p slot="header">You're a wizard Harry</p>
      <vl-progress-bar
        slot="progress-bar"
        data-vl-numeric
        data-vl-active-step=${this.activeStep}
        .steps=${this.steps.map((step) => step.title)}
        @vl-click-step=${(event) => (this.activeStep = event.detail.number)}
      ></vl-progress-bar>
      <div slot="pane">
        ${this.steps.find((step) => step.number === this.activeStep).component}
      </div>
    </vl-wizard>`;
  }
}
customElements.define("vl-wizard-example", VlWizardExample);
