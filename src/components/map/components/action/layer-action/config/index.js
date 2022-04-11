import { TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export const args = {
  defaultActive: false,
  layer: false,
};

export const argTypes = {
  defaultActive: {
    name: 'data-vl-default-active',
    type: { summary: TYPES.BOOLEAN },
    description: 'Used to trigger the action by default.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
    control: { disable: true },
  },
  layer: {
    name: 'data-vl-layer',
    type: { summary: TYPES.BOOLEAN },
    description: 'Used to link the action to a map layer via the name attribute.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
    control: { disable: true },
  },
};
