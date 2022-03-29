import { html, LitElement, css, unsafeCSS } from 'lit';
import { wrap } from '../../wrap';
import { removeStorybooksDefaultStyling } from '../../../.storybook/utils.js';
import '../../../src/components/typography';
import '../../../src/components/grid';
import '../../../src/components/titles';
import titleStyles from '../../../src/components/titles/styles.scss';
import introStyles from '../../../src/components/introduction/styles.scss';

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
      title: 'Introduction',
      intro:
        'We offer a library of web components that is build upon the design system of Digitaal Vlaanderen. It is designed to work with any framework, or even without one. We guarantee consistency between the components.',
      children: html`<section is="vl-region">
        <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
            ${block({
              title: 'Getting started',
              children: html`<p>
                To get started, you need to install our package. To do so, run
                <vl-typography><code>npm install uig-webcomponents</code></vl-typography
                >. Once the installation is done, you are ready to go.
              </p>`,
            })}
            ${block({
              title: 'Usage',
              children: html`
                <p>
                  You can now import and use our components in your project. Each component has a docs page, where you
                  find what needs to be imported in order to use it.
                </p>
              `,
            })}
            ${block({
              title: 'Migrating from legacy packages',
              children: html`
                <vl-typography>
                  <p>
                    If you are migrating from the legacy packages to this package, we recommend to carefully read the
                    docs and the changelog. Every breaking change across from the legacy package is mentioned in the
                    changelog with a '&#x1F4A5;'. We use semantic versioning for our own changes.
                  </p>
                  <p>
                    Components that are categorized under legacy were migrated as is from the legacy packages to make
                    them available in this package. Not all functionality may be reactive and legacy bugs may still be
                    present.
                  </p>
                </vl-typography>
              `,
            })}
            ${block({
              title: 'Getting in touch',
              children: html`
                <vl-typography>
                  <p>
                    We use our internal Rocket.Chat as our main communication-channel. We have two channels that each
                    serve a specific purpose. Feel free to join the ones that are applicable to you.
                  </p>
                  <ul>
                    <li><code>#uig-development</code> for all development related questions and assistance.</li>
                    <li><code>#uig-releases</code> to get notified when the package launches a new release.</li>
                  </ul>
                </vl-typography>
              `,
            })}
          </div>
        </div>
      </section>`,
    });
  }
}

customElements.define('docs-introduction', Introduction);
