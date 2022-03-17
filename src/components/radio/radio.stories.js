import { html } from 'lit-html';
import '../radio';
import { action } from '@storybook/addon-actions';
import { CATEGORIES, docsIntro, TYPES } from '../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-radio',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
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
    checkedProp: false,
    disabledProp: false,
    change: action('change'),
  },
  argTypes: {
    label: {
      name: 'data-vl-label',
      description: 'Used to detemine the label text.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    value: {
      name: 'data-vl-value',
      description: 'Used to determine the label value.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    name: {
      name: 'data-vl-name',
      description:
        'Used to group multiple sibling radio buttons so only one radio button in the group can be selected.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    block: {
      name: 'data-vl-block',
      description: 'Used to show the radio as a block element and follow the width of the parent element.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      name: 'data-vl-checked',
      description: 'Used to default select the radio.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      name: 'data-vl-disabled',
      description: 'Used to prevent the user from selecting the radio.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      name: 'data-vl-error',
      description: 'Used to indicate that the radio contains an error.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    single: {
      name: 'data-vl-single',
      description: 'Used to show a radio without a label.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: false },
      },
    },
    labelSlotText: {
      name: 'label',
      description: 'Used to detemine the label text.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: '' },
      },
    },
    checkedProp: {
      name: 'checked',
      description: 'The property that determines whether the radio is checked or not.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.PROPERTIES,
        defaultValue: { summary: 'false' },
      },
    },
    disabledProp: {
      name: 'disabled',
      description: 'The property that determines whether the radio is disabled or not.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.PROPERTIES,
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export const Default = ({
  label,
  value,
  name,
  block,
  checked,
  disabled,
  error,
  single,
  checkedProp,
  disabledProp,
}) => html`<vl-radio
  data-vl-label=${label}
  data-vl-value=${value}
  data-vl-name=${name}
  ?data-vl-block=${block}
  ?data-vl-checked=${checked}
  ?data-vl-disabled=${disabled}
  ?data-vl-error=${error}
  ?data-vl-single=${single}
  .checked=${checkedProp}
></vl-radio>`;

export const WithBlockLayout = ({ block, change }) => html`<vl-radio
    data-vl-label="Ja"
    data-vl-value="yes"
    data-vl-name="radio"
    ?data-vl-block=${block}
    @change=${(event) => change(event.target.value)}
  ></vl-radio>
  <vl-radio
    data-vl-label="Nee"
    data-vl-value="no"
    data-vl-name="radio"
    ?data-vl-block=${block}
    @change=${(event) => change(event.target.value)}
  ></vl-radio>`;

WithBlockLayout.args = {
  block: true,
};

WithBlockLayout.argTypes = {
  label: { control: { disable: true } },
  value: { control: { disable: true } },
  name: { control: { disable: true } },
  checked: { control: { disable: true } },
  disabled: { control: { disable: true } },
  error: { control: { disable: true } },
  single: { control: { disable: true } },
};

export const WithLabelSlot = ({
  value,
  name,
  block,
  checked,
  disabled,
  error,
  single,
  labelSlotText,
  checkedProp,
  disabledProp,
}) => html`<vl-radio
  data-vl-value=${value}
  data-vl-name=${name}
  ?data-vl-block=${block}
  ?data-vl-checked=${checked}
  ?data-vl-disabled=${disabled}
  ?data-vl-error=${error}
  ?data-vl-single=${single}
>
  <span>${labelSlotText}</span>
</vl-radio>`;

WithLabelSlot.args = { labelSlotText: 'Ja' };
WithLabelSlot.argTypes = {
  label: { control: { disable: true } },
};
