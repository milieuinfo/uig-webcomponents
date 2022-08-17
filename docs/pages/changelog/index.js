import { html, LitElement, css, unsafeCSS } from 'lit';
import { change } from './change';
import { wrap } from '../../wrap';
import titleStyles from '../../../src/components/titles/styles.scss';
import introStyles from '../../../src/components/introduction/styles.scss';
import { removeStorybooksDefaultStyling } from '../../../.storybook/utils';

const unreleased = [];

const changes = [
  ...unreleased,
  {
    version: '3.0.10',
    date: '17/8/2022',
    children: html`<ul>
      <li>
        <p><code>vl-cookie-statement</code></p>
        <p>Fixed an issue where the properties lists had no styling.</p>
      </li>
      <li>
        <p><code>vl-textarea</code></p>
        <p>Fixed broken wysiwyg implementation.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.9',
    date: '17/8/2022',
    children: html`<ul>
      <li>
        <p><code>vl-core</code></p>
        <p>Added a fix for the icon issues. Icons should now render correctly throughout the library.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.8',
    date: '16/8/2022',
    children: html`<ul>
      <li>
        <p><code>vl-autocomplete</code></p>
        <p>Added as a autocomplete component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.7',
    date: '20/7/2022',
    children: html`<ul>
      <li>
        <p><code>vl-cookie-statement</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.6',
    date: '19/7/2022',
    children: html`<ul>
      <li>
        <p><code>vl-rich-data</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-rich-data-table</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-multiselect</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-cookie-consent</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.5',
    date: '12/7/2022',
    children: html`<ul>
      <li>
        <p><code>vl-proza-message</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.4',
    date: '4/7/2022',
    children: html`<ul>
      <li>
        <p><code>vl-datepicker</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.3',
    date: '29/6/2022',
    children: html`<ul>
      <li>
        <p><code>vl-steps</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.2',
    date: '16/6/2022',
    children: html`<ul>
      <li>
        <p><code>vl-textarea</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.1',
    date: '14/6/2022',
    children: html`<ul>
      <li>
        <p><code>vl-toaster</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-checkbox</code></p>
        <p>Added as a legacy component.</p>
      </li>
      <li>
        <p><code>vl-infotext</code></p>
        <p>Added as a legacy component.</p>
      </li>
    </ul>`,
  },
  {
    version: '3.0.0',
    date: '1/6/2022',
    children: html`<ul>
      <li>
        <p><code>vl-toggle-button</code></p>
        <p>Added the new <code>vl-toggle-button</code> component, which can be used controlled and uncontrolled.</p>
      </li>
      <li>
        <p><code>vl-mapactions</code></p>
        <p>
          Moved the <code>vl-mapactions</code> project inside the <code>vl-map</code> component. Changes that are made
          to the functionalities of the files that were in the <code>vl-mapactions</code> project will from now on be
          available under <code>vl-map</code> in these changelogs.
        </p>
      </li>
      <li>
        <p><code>vl-map</code> &#x1F4A5;</p>
        <p>
          This component now includes the <code>vl-mapactions</code> files, as these were moved into this project in
          this release (see previous list item).
        </p>
        <ul>
          <li><p>Upgraded OpenLayers dependency to v6.14.1 and jsts to v2.8.1.</p></li>
          <li>
            <p>
              Added <code>vl-map-action-controls</code> as a wrapper for map action controls which will be shown
              horizontally on the top right of the map.
            </p>
          </li>
          <li>
            <p>
              Added <code>vl-map-measure-control</code> to control the active state of the measure action. The control
              temporarily contains the text "Meten", but should change to a ruler icon when this becomes available.
            </p>
          </li>
          <li>
            <p>
              Fixed a bug where the tooltip overlay wouldn't show on the map when using the measure option on draw
              actions.
            </p>
          </li>
          <li>
            <p>
              Changed the existing measure action. The tooltip overlays use <code>vl-pill</code> to show the measurement
              now and are removable because of the closable functionality of the pill component. The measurement can now
              take place between two points only. The measure action can now optionally be controlled using the new
              <code>vl-map-measure-control</code> or controlling the active state of the measure action from outside the
              map.
            </p>
          </li>
          <li>
            <p>
              Made a change in the functionality of the <code>data-vl-default-active</code> attribute for map actions.
              From now on, the default active action will always be the action with this attribute, instead of the first
              action in the list of actions on the map.
            </p>
          </li>
          <li>
            <p>
              Made a change to the ESC functionality of the map. From now on, when an action is activate and the ESC key
              is pressed, its stop() implementation is triggered instead of deactivating the action and activating the
              default active action (with the old implementation as mentioned aboven which resulted in often
              re-activating the action that was already active). When there is no active action, the default active
              action is activated.
            </p>
          </li>
          <li>
            <p>
              Changed the map event <code>action-activated</code> to <code>vl-active-action-changed</code>, which now
              gives back the information of which action was deactivated and which action was activated. This event is
              internally used to handle the active state of both actions and their controls.
            </p>
          </li>
          <li>
            <p>
              Added the map event <code>vl-layer-visible-changed</code>, which provides the information of which layer
              had its visiblity changed and what the new state of that visibility is. This event is internally used to
              handle the active state of both actions and their controls.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p><code>vl-pill</code></p>
        Made the background of <code>vl-pill</code> transparent when it's used in <code>vl-map</code>.
      </li>
    </ul>`,
  },
  {
    version: '2.3.1',
    date: '15/4/2022',
    children: html`<ul>
      <li>
        <p><code>vl-tabs</code></p>
        <p>Added the missing dependency <code>@govflanders/vl-ui-tabs</code>.</p>
      </li>
    </ul>`,
  },
  {
    version: '2.3.0',
    date: '8/4/2022',
    children: html`<ul>
      <li>
        <p><code>vl-map</code></p>
        <p>
          Added the ability to configure snapping to one or more layer(s) when using the modify action. Upgraded
          <code>vl-mapactions</code> to v4.1.3.
        </p>
      </li>
    </ul>`,
  },
  {
    version: '2.2.6',
    date: '28/3/2022',
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
