import { TYPES, CATEGORIES } from '../../../../../../.storybook/utils.js';

export const args = {
  defaultActive: true,
  layer: false,
  active: false,
};

export const argTypes = {
  active: {
    name: 'active',
    description: 'Controls the active state of the action.',
    table: {
      type: {
        summary: TYPES.BOOLEAN,
      },
      category: CATEGORIES.PROPERTIES,
    },
  },
  defaultActive: {
    name: 'data-vl-default-active',
    type: { summary: TYPES.BOOLEAN },
    description: 'Used to trigger the action by default.',
    table: {
      defaultValue: { summary: 'false' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
  layer: {
    name: 'data-vl-layer',
    type: { summary: TYPES.STRING },
    description: 'Used to link the action to a map layer via the name attribute.',
    table: {
      defaultValue: { summary: '' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
};
