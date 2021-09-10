import { html, LitElement, css, unsafeCSS } from "lit";
import { docsWrap } from "../../templates";
import gridStyles from "../../../src/components/grid/styles.scss";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";

export class Contribute extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(titleStyles)}
      `,
      css`
        ${unsafeCSS(gridStyles)}
      `,
      css`
        ${unsafeCSS(introStyles)}
      `,
    ];
  }
  render() {
    return docsWrap({
      title: "Contribute",
      children: html``,
    });
  }
}

customElements.define("docs-contribute", Contribute);
