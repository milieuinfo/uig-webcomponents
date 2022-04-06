import { TYPES, CATEGORIES } from '../../../../../../.storybook/utils.js';

export const argTypes = {
  url: {
    name: 'data-vl-url',
    type: { summary: TYPES.STRING },
    description: 'Determines the WMS url. Obligated.',
    control: { disable: true },
    table: { category: CATEGORIES.ATTRIBUTES },
  },
  layers: {
    name: 'data-vl-layers',
    type: { summary: TYPES.STRING },
    description: 'Determines the layers of the WMS. Obligated.',
    control: { disable: true },
    table: { category: CATEGORIES.ATTRIBUTES },
  },
  styles: {
    name: 'data-vl-styles',
    type: { summary: TYPES.STRING },
    description: 'Determines the WMS styles.',
    control: { disable: true },
    table: { category: CATEGORIES.ATTRIBUTES },
  },
  version: {
    name: 'data-vl-version',
    type: { summary: TYPES.STRING },
    description: 'Determines the WMS version.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '1.3.0' } },
    control: { disable: true },
  },
  opacity: {
    name: 'data-vl-opacity',
    type: { summary: TYPES.NUMBER },
    description: 'Determines the WMS transparency.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 1 } },
    control: { disable: true },
  },
};
