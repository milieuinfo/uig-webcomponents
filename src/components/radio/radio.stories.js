import { html } from 'lit-html';
import '../radio';
import { CATEGORIES, docsIntro, TYPES } from '../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-radio',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['radio'],
          root: 'radio',
          intro:
            'A radio button allows a user to select a single option from a list. Avoid preselecting a radio button because it is important for the user to make a conscious selection.',
        }),
      },
    },
  },
  args: {
    label: 'Ja',
    value: 'yes',
    name: 'group-0',
    block: false,
    checked: false,
    disabled: false,
    error: false,
    single: false,
  },
  argTypes: {
    label: {
      name: 'data-vl-label',
      description: 'Used to detemine the label text.',
      table: {
        type: TYPES.STRING,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    value: {
      name: 'data-vl-value',
      description: 'Used to determine the label value.',
      table: {
        type: TYPES.STRING,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    name: {
      name: 'data-vl-name',
      description:
        'Used to group multiple sibling radio buttons so only one radio button in the group can be selected.',
      table: {
        type: TYPES.STRING,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    block: {
      name: 'data-vl-block',
      description: 'Used to show the radio as a block element and follow the width of the parent element.',
      table: {
        type: TYPES.BOOLEAN,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      name: 'data-vl-checked',
      description: 'Used to default select the radio.',
      table: {
        type: TYPES.BOOLEAN,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      name: 'data-vl-disabled',
      description: 'Used to prevent the user from selecting the radio.',
      table: {
        type: TYPES.BOOLEAN,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      name: 'data-vl-error',
      description: 'Used to indicate that the radio contains an error.',
      table: {
        type: TYPES.BOOLEAN,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    single: {
      name: 'data-vl-single',
      description: 'Used to show a radio without a label.',
      table: {
        type: TYPES.BOOLEAN,
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: false },
      },
    },
    labelSlotText: {
      name: 'label',
      description: 'Used to detemine the label text.',
      table: {
        type: TYPES.STRING,
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: '' },
      },
    },
  },
};

export const Default = ({ label, value, name, block, checked, disabled, error, single }) => html`<vl-radio
    data-vl-label=${label}
    data-vl-value=${value}
    data-vl-name=${name}
    ?data-vl-block=${block}
    ?data-vl-checked=${checked}
    ?data-vl-disabled=${disabled}
    ?data-vl-error=${error}
    ?data-vl-single=${single}
  ></vl-radio>
  <vl-radio data-vl-label="Nee" data-vl-value="no" data-vl-name=${name} ?data-vl-block=${block}></vl-radio>`;

export const WithLabelSlot = ({ value, name, block, checked, disabled, error, single, labelSlotText }) => html`<vl-radio
    data-vl-value=${value}
    data-vl-name=${name}
    ?data-vl-block=${block}
    ?data-vl-checked=${checked}
    ?data-vl-disabled=${disabled}
    ?data-vl-error=${error}
    ?data-vl-single=${single}
  >
    <span>${labelSlotText}</span>
  </vl-radio>
  <vl-radio data-vl-label="Nee" data-vl-value="no" data-vl-name=${name} ?data-vl-block=${block}
    ><span>Nee</span></vl-radio
  >`;

WithLabelSlot.args = { labelSlotText: 'Ja' };
WithLabelSlot.argTypes = {
  label: { control: { disable: true } },
};
