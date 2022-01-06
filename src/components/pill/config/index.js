import { action } from '@storybook/addon-actions';
import { TYPE } from '../enums';
import { CATEGORIES } from '../../../../.storybook/utils.js';

export const args = {
  closable: false,
  checkable: false,
  checked: false,
  disabled: false,
  close: action('close'),
  check: action('check'),
};

export const argTypes = {
  closable: {
    name: 'data-vl-closable',
    description:
      'The attribute that determines whether the pill can be removed or not (cannot be used in combination with checkable).',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  checkable: {
    name: 'data-vl-checkable',
    description:
      'the attribute that determines whether the pill can be checked or not (cannot be used in combination with closable).',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  checked: {
    name: 'checked',
    description: 'The property that determines whether the pill is checked or not.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.PROPERTIES,
      defaultValue: { summary: 'false' },
    },
  },
  type: {
    name: 'data-vl-type',
    description: 'The attribute that determines the type. ',
    control: {
      type: 'select',
      options: [TYPE.SUCCESS, TYPE.WARNING, TYPE.ERROR],
    },
    table: {
      type: {
        summary: `${TYPE.SUCCESS} | ${TYPE.WARNING} | ${TYPE.ERROR}`,
      },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '' },
    },
  },
  disabled: {
    name: 'data-vl-disabled',
    description: 'The attribute that determines whether the pill is disabled or not.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  close: {
    name: 'close',
    description: "The custom event that is triggered on click of the pill's close button.",
    table: { category: CATEGORIES.EVENTS },
  },
  check: {
    name: 'check',
    description:
      "The custom event that is triggered on input of the pill's checkbox. In the detail of the event you can find whether the pill is getting checked or unchecked.",
    table: { category: CATEGORIES.EVENTS },
  },
};
