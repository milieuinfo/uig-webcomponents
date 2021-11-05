import { html, css, LitElement, unsafeCSS } from "lit";
import styles from "./styles.scss";
import "../progress-bar";
import "./lib";
import { ref, createRef } from "lit/directives/ref.js";
import { VlWizardPane } from "./components/pane";

export class VlWizardNew extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  constructor() {
    super();
    this.callback = { callbackFn: Promise.resolve(true) };
  }

  static properties = {
    nextPanesDisabled: { type: Boolean },
    previousPanesDisabled: { type: Boolean },
  };

  progressBarRef = createRef();

  updated(updated) {
    console.log({ updated });
    console.log(
      this.progressBarRef.value.shadowRoot.querySelectorAll(
        ".vl-progress-bar__bullet"
      )
    );
    // vl.wizard.dress(
    //   this.shadowRoot,
    //   this.callback,
    //   this.querySelectorAll("vl-wizard-pane"),
    //   this._progressBar.buttons,
    //   this.progressBarRef.value
    // );
  }

  render() {
    return html`<section class="vl-wizard" data-vl-wizard>
      <header class="vl-wizard__heading" role="none">
        <slot name="title"></slot>
        <slot name="header"></slot>
      </header>
      <vl-progress-bar
        .steps=${["step 1", "step 2"]}
        ${ref(this.progressBarRef)}
      ></vl-progress-bar>
      <div class="vl-wizard__panes">
        <slot name="panes"></slot>
      </div>
    </section>`;
  }
}

customElements.define("vl-wizard-new", VlWizardNew);
