import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { action } from '@storybook/addon-actions';
import { stylesheet, docsIntro, TYPES, CATEGORIES } from '../../../.storybook/utils';
// import '../tabs';
import './new';
import styles from './styles.scss';

export default {
  title: 'native-elements/vl-tabs',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'tabs',
          stylesheets: ['tabs'],
          intro:
            "Use tab navigation to break related information into smaller chuncks of content. When working with tabs, some content is hidden. Therefore it's important to label the tabs wisely, allowing the user to know exactly what to expect in a tab. On mobile, tab navigation is transformed into a dropdown menu.",
        }),
      },
    },
  },
  args: {
    activeTab: undefined,
    responsiveLabel: undefined,
    alt: false,
    useHash: false,
    onClickTab: action('change'),
  },
  argTypes: {
    activeTab: {
      name: 'data-vl-active-tab',
      description: 'Sets the active tab on component load.',
      type: { name: TYPES.STRING, required: false },
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    responsiveLabel: {
      name: 'data-vl-responsive-label',
      description: 'Changes the label when no option is selected in the dropdown menu (on mobile).',
      type: { name: TYPES.STRING, required: false },
      table: {
        type: { summary: TYPES.STRING },
        defaultValue: { summary: 'Navigatie' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    alt: {
      name: 'data-vl-alt',
      description:
        'Used to show the alt variant of the tabs. The alt variant serves as a subnavigation under the functional header. Only use this as subnavigation at the top of the page. Apply .vl-u-no-overflow on the wrapping container element to prevent an overflow and thus a horizontal scroll.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
        category: CATEGORIES.ATTRIBUTES,
      },
      control: { disable: true },
    },
    useHash: {
      name: 'data-vl-use-hash',
      table: {
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    onClickTab: {
      name: 'change',
      // description:
      //   'The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.',
      table: { category: CATEGORIES.EVENTS },
    },
  },
};

export const Default = ({ responsiveLabel, onClickTab, activeTab, useHash }) => html`
  <vl-tabs-new
    @change=${(event) => onClickTab(event.detail)}
    data-vl-responsive-label=${ifDefined(responsiveLabel)}
    data-vl-active-tab=${ifDefined(activeTab)}
    ?data-vl-use-hash=${useHash}
  >
    <vl-tabs-pane-new data-vl-id="trein" data-vl-title="Trein">
      Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor
      ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere
      velit aliquet.
    </vl-tabs-pane-new>
    <vl-tabs-pane-new data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
      Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
      magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </vl-tabs-pane-new>
    <vl-tabs-pane-new data-vl-id="fiets" data-vl-title="Fiets">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo
      quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas
      eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </vl-tabs-pane-new>
  </vl-tabs-new>
`;

export const WithActiveTab = ({ responsiveLabel, onClickTab, activeTab, useHash }) => html`<vl-tabs-new
  @change=${(event) => onClickTab(event.detail)}
  data-vl-responsive-label=${ifDefined(responsiveLabel)}
  data-vl-active-tab=${ifDefined(activeTab)}
  ?data-vl-use-hash=${useHash}
>
  <vl-tabs-pane-new data-vl-id="trein" data-vl-title="Trein">
    Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor
    ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere
    velit aliquet.
  </vl-tabs-pane-new>
  <vl-tabs-pane-new data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
    Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
    magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </vl-tabs-pane-new>
  <vl-tabs-pane-new data-vl-id="fiets" data-vl-title="Fiets">
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget
    quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
  </vl-tabs-pane-new>
</vl-tabs-new>`;

WithActiveTab.args = {
  activeTab: 'fiets',
};

export const AltVariant = ({ responsiveLabel, onClickTab, activeTab, useHash, alt }) => html`<section
  is="vl-grid"
  class="vl-u-no-overflow"
>
  <vl-tabs-new
    id="tabs-alt"
    @change=${(event) => onClickTab(event.detail)}
    data-vl-responsive-label=${ifDefined(responsiveLabel)}
    data-vl-active-tab=${ifDefined(activeTab)}
    ?data-vl-use-hash=${useHash}
    ?data-vl-alt=${alt}
  >
    <vl-tabs-pane-new data-vl-id="trein" data-vl-title="Trein">
      Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor
      ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere
      velit aliquet.
    </vl-tabs-pane-new>
    <vl-tabs-pane-new data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
      Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
      magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </vl-tabs-pane-new>
    <vl-tabs-pane-new data-vl-id="fiets" data-vl-title="Fiets">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo
      quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas
      eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </vl-tabs-pane-new>
  </vl-tabs-new>
</section>`;

AltVariant.args = {
  alt: true,
};

AltVariant.argTypes = {
  alt: {
    control: {
      disable: false,
    },
  },
};
