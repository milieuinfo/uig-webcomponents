import { PILL_TYPE } from '../../../enums';
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
};
