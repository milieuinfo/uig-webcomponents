import { CATEGORIES } from '../../../../.storybook/utils.js';

export const args = {
  badge: false,
};

export const argTypes = {
  badge: {
    name: 'data-vl-badge',
    description: 'Attribute is used to create a badge. If omitted, no badge will be created.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  value: {
    name: 'data-vl-value',
    description:
      'Apply this attribute on a child of the vl-infotext component to apply the correct big text styling to an element.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.CHILD_ATTRIBUTES,
      defaultValue: { summary: 'true' },
    },
    control: {
      disable: true,
    },
  },
  text: {
    name: 'data-vl-text',
    description:
      'Apply this attribute on a child of the vl-infotext component to apply the correct small text styling to an element.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.CHILD_ATTRIBUTES,
      defaultValue: { summary: 'true' },
    },
    control: {
      disable: true,
    },
  },
};
