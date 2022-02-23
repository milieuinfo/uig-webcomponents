import { html } from 'lit-html';
import { stylesheet, wrapWidth, docsIntro, TYPES, CATEGORIES } from '../../../../../.storybook/utils';
import './index';
import styles from '../../styles.scss';

export default {
  title: 'native-elements/vl-tabs/vl-tabs-pane',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'tabs',
          stylesheets: ['tabs'],
          intro:
            'This component is a collection of vl-tab and vl-tab section and will automatically generate these components.',
        }),
      },
    },
  },
  args: {
    id: 'trein',
    title: 'Trein',
    titleSlotText: 'Trein',
  },
  argTypes: {
    id: {
      name: 'data-vl-id',
      description: 'Gives an id to the tab.',
      table: {
        type: { summary: TYPES.STRING },
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    title: {
      name: 'data-vl-title',
      description: 'Adds a title to the tab.',
      table: {
        type: { summary: TYPES.STRING },
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    titleSlotText: {
      name: 'title',
      description: 'Adds a title to the tab.',
      table: {
        type: { summary: TYPES.STRING },
        defaultValue: { summary: '' },
        category: CATEGORIES.SLOTS,
      },
    },
  },
};

export const Default = ({ id, title }) => html` <div style="max-width: ${wrapWidth}">
  <vl-tabs id="tabs">
    <vl-tabs-pane data-vl-id=${id} data-vl-title=${title}>
      Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor
      ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere
      velit aliquet.
    </vl-tabs-pane>
  </vl-tabs>
</div>`;

Default.argTypes = {
  titleSlotText: {
    control: {
      disable: true,
    },
  },
};

export const WithTitleSlot = ({ id, titleSlotText }) => html` <div style="max-width: ${wrapWidth}">
  <vl-tabs id="tabs-slotted">
    <vl-tabs-pane data-vl-id=${id}>
      <span slot="title">${titleSlotText}</span>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </vl-tabs-pane>
  </vl-tabs>
</div>`;

WithTitleSlot.argTypes = {
  title: {
    control: {
      disable: true,
    },
  },
};
