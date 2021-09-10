import { html, LitElement, css, unsafeCSS } from "lit";
import "./change.js";
import { docsWrap } from "../../templates";
import gridStyles from "../../../src/components/grid/styles.scss";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";

export class Changelog extends LitElement {
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
      title: "Changelog",
      children: html`
        <div is="vl-layout">
          <docs-change version="1.0.0" date="09/09/2021">
            <ul>
              <li>Launch!</li>
              <li>Launch!</li>
              <li>Launch!</li>
            </ul>
          </docs-change>
          <docs-change version="0.1.0" date="09/09/2021">
            <ul>
              <li>Launch!</li>
              <li>Launch!</li>
              <li>Launch!</li>
            </ul>
          </docs-change>
          <docs-change version="0.0.1" date="09/09/2021">
            <ul>
              <li>Launch!</li>
              <li>Launch!</li>
              <li>Launch!</li>
            </ul>
          </docs-change>
        </div>
      `,
    });
  }
}

customElements.define("docs-changelog", Changelog);
