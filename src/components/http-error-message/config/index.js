import { docsIntro, TYPES, CATEGORIES } from '../../../../.storybook/utils';

export const args = {
  title: 'Niets gevonden hiervoor.',
  image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
  alt: 'Niets gevonden',
  textSlotText: 'Sorry, er liep iets onverwachts mis.',
  actionsSlotText: 'Opnieuw opstarten',
};

export const argTypes = {
  title: {
    name: 'data-vl-title',
    description: 'Changes the title of the error message.',
    table: {
      type: { summary: TYPES.STRING },
      defaultValue: { summary: '' },
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  image: {
    name: 'data-vl-image',
    description: 'Changes the URL of the image that is shown.',
    table: {
      type: { summary: TYPES.STRING },
      defaultValue: { summary: '' },
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  alt: {
    name: 'data-vl-image-alt',
    description: 'Changes the alternative text of the image.',
    table: {
      type: { summary: TYPES.STRING },
      defaultValue: { summary: '' },
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  textSlotText: {
    name: 'text',
    description: '',
    table: {
      category: CATEGORIES.SLOTS,
    },
    control: {
      disable: true,
    },
  },
  actionsSlotText: {
    name: 'actions',
    description: '',
    table: {
      category: CATEGORIES.SLOTS,
    },
    control: {
      disable: true,
    },
  },
};

export const parameters = (errorCode) => ({
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
