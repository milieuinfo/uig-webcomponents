import { html, LitElement, css, unsafeCSS } from 'lit';
import { change } from './change';
import { wrap } from '../../wrap';
import titleStyles from '../../../src/components/titles/styles.scss';
import introStyles from '../../../src/components/introduction/styles.scss';
import { removeStorybooksDefaultStyling } from '../../../.storybook/utils';

const unreleased = [
  {
    version: '2.2.6',
    date: '?',
    children: html`<ul>
      <li>
        <p><code>vl-info-tile</code></p>
        <p>When migrating the info tile, we made the toggleable feature reactive.</p>
      </li>
      <li>
        <p><code>vl-upload</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-radio</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-tabs</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-action-group</code></p>
        <p>Adjusted the stylesheet in order to work with the implementation of the legacy <code>vl-modal</code>.</p>
      </li>
      <li>
        <p><code>vl-button</code></p>
        <p>
          Removed the <code>vl-button-link</code> extension from the stylesheet. Moved it to the right component, the
          <code>vl-link</code>.
        </p>
      </li>
      <li>
        <p><code>vl-link</code></p>
        <p>Removed the <code>vl-button</code> styles from the stylesheet.</p>
      </li>
      <li>
        <p><code>vl-modal</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
];

const changes = [
  ...unreleased,
  {
    version: '2.2.5',
    date: '17/3/2022',
    children: html`<ul>
      <li>
        <p><code>vl-http-error-message</code></p>
        <p>Fixed an import error for the styling of the button that is used in the components.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.2.4',
    date: '7/3/2022',
    children: html`<ul>
      <li>
        <p><code>vl-http-error-message</code></p>
        <p>
          The components and its presets were migrated. Using actual slots now instead of copying and pasting the
          content of components with the slot attribute.
        </p>
      </li>
      <li>
        <p><code>vl-description-data</code> &#x1F4A5;</p>
        <p>
          When migrating the description data, we mentioned that the right styles where only applied on load. When the
          components children changed, the styles did not change correspondingly.
        </p>
      </li>
      <li>
        <p><code>vl-video-player</code></p>
        <p>The component has been migrated.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.2.3',
    date: '18/2/2022',
    children: html`<ul>
      <li>
        <p><code>vl-breadcrumb</code> &#x1F4A5;</p>
        <p>
          When migrating the breadcrumb, we mentioned that the right styles where only applied on load. When the
          components children changed, the styles did not change correspondingly.
        </p>
      </li>
      <li>
        <p><code>vl-doormat</code></p>
        <p>
          When migrating the doormat, we fixed a bug with the <code>data-vl-graphic</code> attribute that was not
          rendering the component correctly on load.
        </p>
      </li>
    </ul>`,
  },
  {
    version: '2.2.2',
    date: '11/2/2022',
    children: html`<ul>
      <li>
        <p>An icon mismatch bug is fixed.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.2.1',
    date: '9/2/2022',
    children: html`<ul>
      <li>
        <p>Added <code>"type": "module"</code> to our package.json, as requested.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.2.0',
    date: '28/1/2022',
    children: html`<ul>
      <li>
        <p><code>vl-pill</code></p>
        <p>
          If a type was set and you added another attribute, the type styling was removed. We took this opportunity to
          refactor the component using Lit, and fix the bug.
        </p>
      </li>
      <li>
        <p><code>vl-header</code></p>
        <p>All the urls are now fully configurable via attributes.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.1.2',
    date: '6/1/2022',
    children: html`<ul>
      <li>
        <p>
          From now on, you can find a test wrapper in the folder of the component to use in your tests. Some customers
          depended on it, that's why we included it.
        </p>
      </li>
    </ul>`,
  },
  {
    version: '2.1.1',
    date: '15/12/2021',
    children: html`<ul>
      <li>
        <p><code>vl-action-group</code></p>
        <p>The stylesheet of the component was not included. Now, it is.</p>
      </li>
      <li>
        <p><code>vl-button</code></p>
        <p>Removed a confusing attribute from the docs. Use the native disabled attribute to disable a button.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.1.0',
    date: '26/11/2021',
    children: html`<ul>
      <li>
        <p><code>vl-share-buttons</code></p>
        <p>A new component is introduced.</p>
      </li>
      <li>
        <p><code>vl-input-field</code></p>
        <p>Removed a confusing attribute from the docs. Use the native disabled attribute to disable an input-field.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.0.3',
    date: '18/11/2021',
    children: html`<ul>
      <li>
        <p><code>vl-pager</code></p>
        <p>
          Fixed a bug where the
          <code>data-vl-pagination-disabled</code>
          attribute was not behaving in a reactive way.
        </p>
      </li>
      <li>
        <p><code>vl-progress-bar</code></p>
        <p>Introduced a new dependency, called @govflanders/vl-ui-progress-bar.</p>
      </li>
      <li>
        <p><code>vl-data-table</code> &#x1F4A5;</p>
        <p>
          The data-table contained a wrong attribute. The <code>data-vl-lined</code> attribute has been changed to
          <code>data-vl-grid</code>.
        </p>
      </li>
    </ul>`,
  },
  {
    version: '2.0.2',
    date: '10/11/2021',
    children: html`<ul>
      <li>
        <p><code>vl-wizard</code> &#x1F4A5;</p>
        <p>The wizard is refactored, and an outline styling bug is fixed.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.0.1',
    date: '8/11/2021',
    children: html`<ul>
      <li>
        <p><code>vl-map</code></p>
        <p>The layers that extend the baselayer, no longer set their properties via attributes.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.0.0',
    date: '4/11/2021',
    children: html`<ul>
      <li>
        <p><code>vl-tooltip</code></p>
        <p>The tooltip and its attributes behave reactive from now on, and it undresses when it disconnects.</p>
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
    version: '1.1.1',
    date: '18/10/2021',
    children: html`<ul>
      <li>
        <p><code>vl-map</code></p>
        <p>From now on the map component uses the actions from a new dependency, called vl-mapactions.</p>
      </li>
    </ul>`,
  },
  {
    version: '1.1.0',
    date: '6/10/2021',
    children: html`<ul>
      <li>
        <p><code>vl-accessibility</code></p>
        <p>
          The accessibility statement got some content updates, uses the new link properties and its limitation
          possibilities are extended.
        </p>
      </li>
      <li>
        <p><code>vl-side-navigation</code></p>
        <p>
          The click events from the anchor elements are now added in the toggle components themselves instead of in the
          side-navigation. The previous approach assumed that all anchor elements where there on load, but this is not
          always the case.
        </p>
      </li>
      <li>
        <p><code>vl-link</code> & <code>vl-button-link</code></p>
        <p>
          The link and the button-link are expanded with a few new features. From now on you can use inline, small,
          large and bold variants.
        </p>
      </li>
    </ul>`,
  },
  {
    version: '1.0.1',
    date: '1/10/2021',
    children: html`<ul>
      <li>
        <p><code>vl-header</code></p>
        <p>
          It is no longer an obligation to use the header inside a vl-body, from now on it can be used inside a standard
          body too.
        </p>
      </li>
    </ul>`,
  },
  {
    version: '1.0.0',
    date: '30/09/2021',
    children: html`<p>We have a lift-off! &#x1F680;</p>
      <ul>
        <li>
          <p><code>vl-accessibility</code></p>
          <p>
            The accessibility statement got an update. You can now provide limitations, a compliancestatus and an
            evaluationstatus. The changes are not breaking, but we recommend taking a look at the new documentation
            because the evaluationstatus is default 'not-evaluated'.
          </p>
        </li>
        <li>
          <p><code>vl-privacy</code></p>
          <p>The privacy statement is transformed into a lit-component and its attributes are now reactive.</p>
        </li>
        <li>
          <p><code>vl-header</code> & <code>vl-footer</code></p>
          <p>The header and footer are transformed into lit-components and their attributes are now reactive.</p>
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
      title: 'Changelog',
      children: html`
        <section is="vl-region">
          <div is="vl-layout">
            <div is="vl-grid" data-vl-is-stacked>
              ${changes.map(({ version, date, children }) =>
                change({
                  version,
                  date,
                  children,
                }),
              )}
            </div>
          </div>
        </section>
      `,
    });
  }
}

customElements.define('docs-changelog', Changelog);
