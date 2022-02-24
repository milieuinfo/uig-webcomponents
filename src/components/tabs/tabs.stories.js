import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { stylesheet, wrapWidth, docsIntro, TYPES, CATEGORIES } from '../../../.storybook/utils';
import './index';
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
    alt: true,
  },
  argTypes: {
    activeTab: {
      name: 'data-vl-active-tab',
      description: 'Sets the active tab on component load.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
      },
      control: {
        disable: true,
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
    },
  },
};

export const Default = ({ responsiveLabel }) => html`<div style="max-width: ${wrapWidth}">
  <vl-tabs id="tabs" data-vl-responsive-label=${ifDefined(responsiveLabel)}>
    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein">
      Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor
      ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere
      velit aliquet.
    </vl-tabs-pane>
    <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
      Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
      magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </vl-tabs-pane>
    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo
      quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas
      eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </vl-tabs-pane>
  </vl-tabs>
</div>`;

export const WithActiveTab = ({ responsiveLabel }) => html`<div style="max-width: ${wrapWidth}">
  <vl-tabs id="tabs" data-vl-active-tab="fiets" data-vl-responsive-label=${ifDefined(responsiveLabel)}>
    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein">
      Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor
      ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere
      velit aliquet.
    </vl-tabs-pane>
    <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
      Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
      magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </vl-tabs-pane>
    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo
      quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas
      eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </vl-tabs-pane>
  </vl-tabs>
</div>`;

Default.argTypes = {
  alt: { control: { disable: true } },
};

export const AltVariant = ({ alt, responsiveLabel }) => html`<div style="max-width: ${wrapWidth}">
  <section is="vl-grid" class="vl-u-no-overflow">
    <vl-tabs id="tabs-alt" data-vl-responsive-label=${ifDefined(responsiveLabel)} ?data-vl-alt=${alt}>
      <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein">
        Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor
        ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet.
      </vl-tabs-pane>
      <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
        Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
        malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </vl-tabs-pane>
      <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </vl-tabs-pane>
    </vl-tabs>
  </section>
</div>`;

AltVariant.argTypes = {
  alt: {
    control: {
      disable: false,
    },
  },
};
