import { html, LitElement, css, unsafeCSS } from "lit";
import { change } from "./change";
import { wrap } from "../../wrap";
import gridStyles from "../../../src/components/grid/styles.scss";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";

const changes = [
  {
    version: "1.O.O",
    date: "09/09/2021",
    children: html`<ul>
      <li>Launch!</li>
      <li>Launch!</li>
      <li>Launch!</li>
    </ul>`,
  },
  {
    version: "0.0.1",
    date: "09/09/2021",
    children: html`<p>Some extra text</p>
      <ul>
        <li>Launch!</li>
      </ul>`,
  },
];

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
    return wrap({
      title: "Changelog",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.",
      children: html`
        <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
            ${change({
              version: "Unreleased",
              date: "?",
              children: html`<ul>
                <li>Unreleased item</li>
              </ul>`,
            })}
            ${changes.map(({ version, date, children }) =>
              change({
                version,
                date,
                children,
              })
            )}
          </div>
        </div>
      `,
    });
  }
}

customElements.define("docs-changelog", Changelog);
