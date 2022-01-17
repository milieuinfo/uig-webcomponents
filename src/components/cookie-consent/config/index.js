import { action } from '@storybook/addon-actions';
import { CATEGORIES } from '../../../../.storybook/utils';

export const args = {
  analytics: false,
  extraOptIns: [],
  submitted: action('vl-submitted'),
  open: false,
};

export const argTypes = {
  analytics: {
    name: 'data-vl-analytics',
    description: 'Attribute that determines whether analytics should be added on consent or not.',
    table: { category: CATEGORIES.ATTRIBUTES },
    type: { summary: 'boolean' },
  },
  extraOptIns: {
    table: { category: CATEGORIES.PROPERTIES },
    description: '',
  },
  submitted: {
    name: 'vl-submitted',
    table: { category: CATEGORIES.EVENTS },
    description: '',
  },
  open: {
    table: { category: CATEGORIES.PROPERTIES },
    control: {
      disable: true,
    },
    type: { summary: 'boolean' },
    description: '',
  },
};
