import { html, LitElement, css, unsafeCSS } from "lit";
import { change } from "./change";
import { wrap } from "../../wrap";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";
import { removeStorybooksDefaultStyling } from "../../../.storybook/utils";

const changes = [
  {
    version: "2.0.0",
    date: "4/11/2021",
    children: html`<ul>
      <li>
        <p><code>vl-tooltip</code></p>
        <p>
          The tooltip and its attributes behave reactive from now on, and it
          undresses when it disconnects.
        </p>
      </li>
      <li>
        <p><code>vl-progress-bar</code> &#x1F4A5;</p>
        <p>The progress bar is refactored.</p>
      </li>
      <li>
        <p><code>vl-accessibility</code> &#x1F4A5;</p>
        <p>The limitations must now be set via a property.</p>
      </li>
    </ul>`,
  },
  {
    version: "1.1.1",
    date: "18/10/2021",
    children: html`<ul>
      <li>
        <p><code>vl-map</code></p>
        <p>
          From now on the map component uses the actions from a new dependency,
          called vl-mapactions.
        </p>
      </li>
    </ul>`,
  },
  {
    version: "1.1.0",
    date: "6/10/2021",
    children: html`<ul>
      <li>
        <p><code>vl-accessibility</code></p>
        <p>
          The accessibility statement got some content updates, uses the new
          link properties and its limitation possibilities are extended.
        </p>
      </li>
      <li>
        <p><code>vl-side-navigation</code></p>
        <p>
          The click events from the anchor elements are now added in the toggle
          components themselves instead of in the side-navigation. The previous
          approach assumed that all anchor elements where there on load, but
          this is not always the case.
        </p>
      </li>
      <li>
        <p><code>vl-link</code> & <code>vl-button-link</code></p>
        <p>
          The link and the button-link are expanded with a few new features.
          From now on you can use inline, small, large and bold variants.
        </p>
      </li>
    </ul>`,
  },
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
                children: html``,
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
