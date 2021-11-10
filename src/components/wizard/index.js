import { html, css, LitElement, unsafeCSS } from "lit";
import styles from "./styles.scss";
import "../progress-bar";
import "./components/pane";

export class VlWizard extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static properties = {
    panes: { type: Array },
    activeStep: {
      type: Number,
      attribute: "data-vl-active-step",
      reflect: true,
    },
  };

  constructor() {
    super();
    this.panes = [];
    this.activeStep = 1;
  }

  onSlotChange() {
    this.panes = [...this.querySelectorAll("vl-wizard-pane")];
  }

  updated() {
    this.panes.forEach((pane, index) => {
      pane.isActive = this.activeStep === index + 1;
    });
  }

  render() {
    return html`
      <section class="vl-wizard" data-vl-wizard>
        <header class="vl-wizard__heading" role="none">
          <slot name="title"></slot>
          <slot name="header"></slot>
        </header>
        <vl-progress-bar
          data-vl-active-step=${this.activeStep}
          .steps=${this.panes.map((pane) => pane.name)}
        ></vl-progress-bar>
        <div class="vl-wizard__panes">
          <section class="vl-wizard__pane">
            <slot @slotchange=${this.onSlotChange}></slot>
          </section>
        </div>
      </section>
    `;
  }
}

customElements.define("vl-wizard", VlWizard);
