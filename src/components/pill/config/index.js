import { action } from '@storybook/addon-actions';
import { PILL_TYPE } from '../enums';
import { CATEGORIES } from '../../../../.storybook/utils.js';

export const args = {
  closable: false,
  checkable: false,
  type: '',
  disabled: false,
  close: action('close'),
  check: action('check'),
};

export const argTypes = {
  closable: {
    name: 'data-vl-closable',
    description: 'Attribute determines whether the pill can be removed (cannot be used in combination with checkable).',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  checkable: {
    name: 'data-vl-checkable',
    description: 'Attribute determines whether the pill can be checked (cannot be used in combination with closable).',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  type: {
    name: 'data-vl-type',
    description: 'Attribute determines the type of warning, error message, problem message, or success message. ',
    control: {
      type: 'select',
      options: [PILL_TYPE.SUCCESS, PILL_TYPE.WARNING, PILL_TYPE.ERROR],
    },
    table: {
      type: {
        summary: `${PILL_TYPE.SUCCESS} | ${PILL_TYPE.WARNING} | ${PILL_TYPE.ERROR}`,
      },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '' },
    },
  },
  disabled: {
    name: 'data-vl-disabled',
    description: 'Attribute determines whether the pill can be disabled.',
    table: {
      type: { summary: 'boolean' },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
  },
  close: {
    name: 'close',
    description: 'The custom event fired on click of the close button of the pill component.',
    table: { category: CATEGORIES.EVENTS },
  },
  check: {
    name: 'check',
    description:
      'The custom event fired when checking or unchecking the pill component. In the detail of the event you can find wether the pill is getting checked or unchecked',
    table: { category: CATEGORIES.EVENTS },
  },
};