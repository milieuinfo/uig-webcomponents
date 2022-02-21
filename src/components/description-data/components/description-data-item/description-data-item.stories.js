import { html } from 'lit-html';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../.storybook/utils.js';
import '.';

export default {
  title: 'custom-elements/vl-description-data/vl-description-data-item',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'description-data',
          intro:
            'Use the description data component to give more information about the content on the page, for example about a contact person, an entity or a publication.',
        }),
      },
    },
  },
  args: {
    label: 'Uitgever',
    value: 'Kind en Gezin',
    labelSlotText: 'Uitgever',
    valueSlotText: 'Kind en Gezin',
  },
  argTypes: {
    label: {
      name: 'data-vl-label',
      description: 'Changes the label of the data item.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    value: {
      name: 'data-vl-value',
      description: 'Changes the value of the data item.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    labelSlotText: {
      name: 'label (slot)',
      description: 'Changes the label of the data item.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: '' },
      },
      control: {
        disable: true,
      },
    },
    valueSlotText: {
      name: 'value (slot)',
      description: 'Changes the value of the data item.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: '' },
      },
      control: {
        disable: true,
      },
    },
  },
};

export const Default = ({ label, value }) =>
  html`<vl-description-data-item data-vl-label=${label} data-vl-value=${value}></vl-description-data-item>`;

export const WithSlotElements = ({ label, value }) =>
  html`<vl-description-data-item>
    <span slot="label">${label}</span>
    <span slot="value">${value}</span>
  </vl-description-data-item>`;

WithSlotElements.argTypes = {
  label: {
    control: {
      disable: true,
    },
  },
  value: {
    control: {
      disable: true,
    },
  },
  labelSlotText: {
    control: {
      disable: false,
    },
  },
  valueSlotText: {
    control: {
      disable: false,
    },
  },
};
