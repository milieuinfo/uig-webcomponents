import { html } from 'lit-html';
import { docsIntro, TYPES } from '../../../../../.storybook/utils.js';
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
};

export const WithAttributes = ({ label, value }) =>
  html`<vl-description-data-item data-vl-label=${label} data-vl-value=${value}></vl-description-data-item>`;

WithAttributes.args = {
  label: 'Uitgever',
  value: 'Kind en Gezin',
};

WithAttributes.argTypes = {
  label: {
    name: 'data-vl-label',
    description: 'Changes the label of the data item.',
    type: { summary: TYPES.STRING },
    defaultValue: { summary: '' },
  },
  value: {
    name: 'data-vl-value',
    description: 'Changes the value of the data item.',
    type: { summary: TYPES.STRING },
    defaultValue: { summary: '' },
  },
};

export const WithSlotElements = ({ label, value }) =>
  html`<vl-description-data-item>
    <span slot="label">${label}</span>
    <span slot="value">${value}</span>
  </vl-description-data-item>`;

WithSlotElements.args = {
  label: 'Uitgever',
  value: 'Kind en Gezin',
};

WithSlotElements.argTypes = {
  label: {
    name: 'label (for demo purposes)',
  },
  value: {
    name: 'value (for demo purposes)',
  },
};
