import { CATEGORIES } from '../../../../.storybook/utils.js';

export const args = {
  validate: true,
};

export const argTypes = {
  validate: {
    name: 'data-vl-validate',
    description: 'Attribute is used to indicate that the input fields validation should be enabled.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
    control: {
      disable: true,
    },
  },
};
