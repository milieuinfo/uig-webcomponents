import { TYPES, CATEGORIES } from '../../../../../.storybook/utils';

export const args = {
  type: 'wmts',
  url: '',
  layer: '',
  title: '',
};

export const argTypes = {
  type: {
    name: 'data-vl-type',
    type: 'select',
    options: ['wmts', 'wfs'],
    description: 'Used to indicate the type of the map layer.',
    table: {
      type: { summary: TYPES.STRING },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '' },
    },
    control: { disable: true },
  },
  url: {
    name: 'data-vl-url',
    type: { summary: TYPES.STRING },
    description: 'Indicates which URL is used to retrieve the map layer.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '' } },
    control: { disable: true },
  },
  layer: {
    name: 'data-vl-layer',
    type: { summary: TYPES.STRING },
    description: 'Specifies what the map layer identifier is.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '' } },
    control: { disable: true },
  },
  title: {
    name: 'data-vl-title',
    type: { summary: TYPES.STRING },
    description: 'Determines the title of the map layer.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '' } },
    control: { disable: true },
  },
};
