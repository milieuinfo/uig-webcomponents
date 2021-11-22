import { CATEGORIES } from '../../../../.storybook/utils.js';

export const args = {
  title: 'Lorem ipsum',
  alt: false,
  mobileModal: false,
  mobileModalTitle: 'Lorem ipsum dolor set',
  maxWidth: '800px',
};

export const argTypes = {
  title: {
    name: 'data-vl-title',
    description: 'The title of this search filter.',
    table: {
      type: { summary: 'string' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '' },
    },
  },
  alt: {
    name: 'data-vl-alt',
    description: 'Alternative (transparent) background.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  mobileModal: {
    name: 'data-vl-mobile-modal',
    description: 'Activates optimized display for mobile devices.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  mobileModalTitle: {
    name: 'data-vl-mobile-modal-title',
    description:
      'The title of this search filter on mobile devices. If not declared, the value of data-vl-title will be used.',
    table: {
      type: { summary: 'string' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '' },
    },
  },
  maxWidth: {
    table: {
      disable: true,
    },
  },
};
