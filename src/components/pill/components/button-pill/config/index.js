import { TYPE } from '../../../enums';
import { CATEGORIES } from '../../../../../../.storybook/utils.js';

export const args = {
  type: '',
};

export const argTypes = {
  type: {
    name: 'data-vl-type',
    description: 'Attribute determines the type of warning, error message, problem message, or success message. ',
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
};
