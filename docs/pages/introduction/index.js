import { html, LitElement, css, unsafeCSS } from "lit";
import { docsWrap } from "../../templates";
import "../../../src/components/typography";
import "../../../src/components/grid";
import gridStyles from "../../../src/components/grid/styles.scss";
import "../../../src/components/titles";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";

export class Introduction extends LitElement {
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
      title: "Introduction",
      children: html` <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div is="vl-column" data-vl-size="8">
            <h2 is="vl-h2" style="margin-bottom: 3rem">Getting started</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus
              egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.
            </p>
          </div>
          <div is="vl-column" data-vl-size="8">
            <h2 is="vl-h2" style="margin-bottom: 3rem">Basic usage</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus
              egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.
            </p>
          </div>
        </div>
      </div>`,
    });
  }
}

customElements.define("docs-introduction", Introduction);
