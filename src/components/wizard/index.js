import { html, css, LitElement, unsafeCSS } from "lit";
import styles from "./styles.scss";

export class VlWizard extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  render() {
    return html`<section class="vl-wizard" data-vl-wizard>
      <header class="vl-wizard__heading" role="none">
        <slot name="title"></slot>
        <slot name="header"></slot>
      </header>
      <slot name="progress-bar"></slot>
      <div class="vl-wizard__panes">
        <section class="vl-wizard__pane"><slot name="pane"></slot></section>
      </div>
    </section>`;
  }
}

customElements.define("vl-wizard", VlWizard);
