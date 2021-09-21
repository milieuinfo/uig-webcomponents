import { html, LitElement, css, unsafeCSS } from "lit";
import { change } from "./change";
import { wrap } from "../../wrap";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";
import { removeStorybooksDefaultStyling } from "../../../.storybook/utils";

const changes = [
  {
    version: "0.0.24",
    date: "09/09/2021",
    children: html`<p>Example</p>
      <ul>
        <li>Example</li>
        <li>Example</li>
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
        ${unsafeCSS(introStyles)}
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    removeStorybooksDefaultStyling();
  }

  render() {
    return wrap({
      title: "Changelog",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.",
      children: html`
        <section is="vl-region">
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
        </section>
      `,
    });
  }
}

customElements.define("docs-changelog", Changelog);
