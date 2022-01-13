import { action } from '@storybook/addon-actions';
import { CATEGORIES } from '../../../../.storybook/utils';

export const args = {
  functionalOptinDisabled: false,
  owner: 'Departement Omgeving',
  autoOpenDisabled: true,
  link: 'https://www.omgevingvlaanderen.be/privacy',
  analytics: false,
  extraOptIns: [],
  submitted: action('vl-submitted'),
  open: true,
};

export const argTypes = {
  functionalOptinDisabled: {
    name: 'data-vl-auto-opt-in-functional-disabled',
    table: {
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  analytics: { table: { category: CATEGORIES.ATTRIBUTES } },
  owner: { table: { category: CATEGORIES.ATTRIBUTES } },
  autoOpenDisabled: { table: { category: CATEGORIES.ATTRIBUTES } },
  link: { table: { category: CATEGORIES.ATTRIBUTES } },
  extraOptIns: { table: { category: CATEGORIES.PROPERTIES } },
  submitted: { name: 'vl-submitted', table: { category: CATEGORIES.EVENTS } },
  open: { table: { category: CATEGORIES.PROPERTIES } },
};
