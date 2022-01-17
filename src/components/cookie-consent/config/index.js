import { action } from '@storybook/addon-actions';
import { CATEGORIES } from '../../../../.storybook/utils';

export const args = {
  autoOpenDisabled: false,
  analytics: false,
  extraOptIns: [],
  submitted: action('vl-submitted'),
  open: true,
};

export const argTypes = {
  analytics: { table: { category: CATEGORIES.ATTRIBUTES } },
  autoOpenDisabled: { table: { category: CATEGORIES.ATTRIBUTES } },
  extraOptIns: { table: { category: CATEGORIES.PROPERTIES } },
  submitted: { name: 'vl-submitted', table: { category: CATEGORIES.EVENTS } },
  open: { table: { category: CATEGORIES.PROPERTIES } },
};
