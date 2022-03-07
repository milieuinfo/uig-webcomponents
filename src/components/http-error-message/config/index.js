import { docsIntro, TYPES, CATEGORIES } from '../../../../.storybook/utils';

export const args = {
  title: undefined,
  image: undefined,
  alt: undefined,
  textSlotText: undefined,
  actionsSlotText: undefined,
};

export const argTypes = {
  title: {
    name: 'data-vl-title',
    type: { name: TYPES.STRING, required: false },
    description: 'Changes the title of the error message.',
    table: {
      type: { summary: TYPES.STRING },
      defaultValue: { summary: undefined },
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  image: {
    name: 'data-vl-image',
    type: { name: TYPES.STRING, required: false },
    description: 'Changes the URL of the image that is shown.',
    table: {
      type: { summary: TYPES.STRING },
      defaultValue: { summary: undefined },
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  alt: {
    name: 'data-vl-image-alt',
    type: { name: TYPES.STRING, required: false },
    description: 'Changes the alternative text of the image.',
    table: {
      type: { summary: TYPES.STRING },
      defaultValue: { summary: undefined },
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  textSlotText: {
    name: 'text',
    type: { name: TYPES.STRING, required: false },
    description: 'Changes the descriptive text that is shown under the title.',
    table: {
      category: CATEGORIES.SLOTS,
      defaultValue: { summary: undefined },
    },
  },
  actionsSlotText: {
    name: 'actions',
    type: { name: TYPES.STRING, required: false },
    description: 'Defines the actions that need to be shown.',
    table: {
      category: CATEGORIES.SLOTS,
      defaultValue: { summary: undefined },
    },
  },
};

export const parameters = (errorCode = '') => ({
  controls: { hideNoControlsWarning: true },
  docs: {
    description: {
      component: docsIntro({
        root: 'http-error-message',
        intro: `Use the HTTP ${`${errorCode} `}error message to show an explanatory message for a HTTP ${`${errorCode} `}error.`,
      }),
    },
  },
});
