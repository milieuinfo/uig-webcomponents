import { html, LitElement, css, unsafeCSS } from "lit";
import { wrap } from "../../wrap";
import "../../../src/components/typography";
import "../../../src/components/grid";
import gridStyles from "../../../src/components/grid/styles.scss";
import "../../../src/components/titles";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";

const block = ({ title, text }) => html`
  <div is="vl-column" data-vl-size="8">
    <h2 is="vl-h2" style="margin-bottom: 3rem">${title}</h2>
    <p>${text}</p>
  </div>
`;

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
    return wrap({
      title: "Introduction",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.",
      children: html` <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          ${block({
            title: "Single source of truth",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.",
          })}
          ${block({
            title: "Getting started",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.",
          })}
          ${block({
            title: "Basic usage",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.",
          })}
        </div>
      </div>`,
    });
  }
}

customElements.define("docs-introduction", Introduction);
