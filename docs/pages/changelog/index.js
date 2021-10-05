import { html, LitElement, css, unsafeCSS } from "lit";
import { change } from "./change";
import { wrap } from "../../wrap";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";
import { removeStorybooksDefaultStyling } from "../../../.storybook/utils";

const changes = [
  {
    version: "1.0.1",
    date: "1/10/2021",
    children: html`<ul>
      <li>
        <p><code>vl-header</code></p>
        <p>
          It is no longer an obligation to use the header inside a vl-body, from
          now on it can be used inside a standard body too.
        </p>
      </li>
    </ul>`,
  },
  {
    version: "1.0.0",
    date: "30/09/2021",
    children: html`<p>We have a lift-off! &#x1F680;</p>
      <ul>
        <li>
          <p><code>vl-accessibility</code></p>
          <p>
            The accessibility statement got an update. You can now provide
            limitations, a compliancestatus and an evaluationstatus. The changes
            are not breaking, but we recommend taking a look at the new
            documentation because the evaluationstatus is default
            'not-evaluated'.
          </p>
        </li>
        <li>
          <p><code>vl-privacy</code></p>
          <p>
            The privacy statement is transformed into a lit-component and its
            attributes are now reactive.
          </p>
        </li>
        <li>
          <p><code>vl-header</code> & <code>vl-footer</code></p>
          <p>
            The header and footer are transformed into lit-components and their
            attributes are now reactive.
          </p>
        </li>
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
      children: html`
        <section is="vl-region">
          <div is="vl-layout">
            <div is="vl-grid" data-vl-is-stacked>
              <!-- ${change({
                version: "Unreleased",
                date: "?",
                children: html`<ul>
                  <li>Unreleased item</li>
                </ul>`,
              })} -->
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
