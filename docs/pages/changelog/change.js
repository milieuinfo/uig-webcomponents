import { html, css, LitElement, unsafeCSS } from "lit";
import "../../../src/components/typography";

import "../../../src/components/grid";
import gridStyles from "../../../src/components/grid/styles.scss";

import "../../../src/components/titles";
import titleStyles from "../../../src/components/titles/styles.scss";

export class Change extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(titleStyles)}
      `,
      css`
        ${unsafeCSS(gridStyles)}
      `,
    ];
  }

  static get properties() {
    return {
      version: {
        type: String,
      },
      date: {
        type: String,
      },
    };
  }

  render() {
    return html`<div is="vl-grid">
      <div is="vl-column" data-vl-size="8">
        <h2 is="vl-h2" style="margin-bottom: 3rem">
          ${this.version} - ${this.date}
        </h2>
        <vl-typography><slot></slot></vl-typography>
      </div>
    </div>`;
  }
}

customElements.define("docs-change", Change);
