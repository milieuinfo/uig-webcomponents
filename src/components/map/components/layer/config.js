import { TYPES } from '../../../../../.storybook/utils';

export const argTypes = {
  name: {
    name: 'data-vl-name',
    type: { summary: TYPES.STRING },
    description: 'Determines the map layer name.',
    control: { disable: true },
  },
  hidden: {
    name: 'data-vl-hidden',
    type: { summary: TYPES.BOOLEAN },
    description: 'Determines whether the map layer is visible.',
    table: {
      defaultValue: { summary: 'false' },
    },
    control: { disable: true },
  },
  minResolution: {
    name: 'data-vl-min-resolution',
    type: { summary: TYPES.NUMBER },
    description: '',
    table: {
      defaultValue: { summary: 0 },
    },
    control: { disable: true },
  },
  maxResolution: {
    name: 'data-vl-max-resolution',
    type: { summary: TYPES.NUMBER },
    description: '',
    table: {
      defaultValue: { summary: Infinity },
    },
    control: { disable: true },
  },
};
