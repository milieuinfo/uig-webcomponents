import { html, LitElement, css, unsafeCSS } from "lit";
import { wrap } from "../../wrap";
import "../../../src/components/typography";
import "../../../src/components/grid";
import gridStyles from "../../../src/components/grid/styles.scss";
import "../../../src/components/titles";
import titleStyles from "../../../src/components/titles/styles.scss";
import introStyles from "../../../src/components/introduction/styles.scss";
import { removeStorybooksDefaultStyling } from "../../../.storybook/utils.js";

const block = ({ title, children }) => html`
  <div is="vl-column" data-vl-size="8">
    <h2 is="vl-h2" style="margin-bottom: 3rem">${title}</h2>
    ${children}
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

  connectedCallback() {
    super.connectedCallback();
    removeStorybooksDefaultStyling();
  }

  render() {
    return wrap({
      title: "Introduction",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan, maximus purus sit amet, suscipit elit. Vivamus egestas a diam a luctus. Sed et viverra nibh. Nam sed ipsum felis.",
      children: html`<vl-typography
        ><div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
            ${block({
              title: "Getting started",
              children: html`<p>
                To get started, you need to install our package. To do so, run
                <code>npm install uig-webcomponents</code>. After the
                installation is done, you are ready to go.
              </p>`,
            })}
            ${block({
              title: "Usage",
              children: html`<p>
                  You can now import and use our components in your project. The
                  following example shows how to import a component.
                </p>
                <p>
                  <code
                    >import "uig-webcomponents/lib/components/accordion"</code
                  >
                </p>
                <br />
                <p>
                  The styling of all the custom elements is encapsulated by
                  default. To use a native element from our library, you'll need
                  to import the css file manually. The following example shows
                  how to import a native component with its styling.
                </p>
                <p>
                  <code>import "uig-webcomponents/lib/components/button"</code>
                </p>
                <p>
                  <code
                    >import
                    "uig-webcomponents/lib/components/button/styles.css"</code
                  >
                </p>`,
            })}
            ${block({
              title: "Explore",
              children: html`<p>
                To get started, you need to install our package. To do so, run
                <code>npm install uig-webcomponents</code>. After the
                installation is done, you are ready to go.
              </p>`,
            })}
          </div>
        </div></vl-typography
      >`,
    });
  }
}

customElements.define("docs-introduction", Introduction);
