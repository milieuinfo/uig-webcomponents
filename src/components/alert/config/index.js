import { action } from '@storybook/addon-actions';
import { ALERT_SIZE, ALERT_TYPE, ALERT_ICON } from '../enums';
import { CATEGORIES } from '../../../../.storybook/utils';

export const sharedArgs = {
  title: 'Lorem ipsum',
  closable: false,
};

export const args = {
  ...sharedArgs,
  content:
    'Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.',
  onClose: action('vl-close'),
};

export const sharedArgTypes = {
  title: {
    name: 'data-vl-title',
    type: { summary: 'string' },
    description: 'Attribuut wordt gebruikt om de titel te bepalen.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  icon: {
    name: 'data-vl-icon',
    type: {
      summary: 'string',
    },
    description:
      'Attribuut wordt gebruikt om het icoon type te bepalen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
    control: {
      type: 'select',
      options: [ALERT_ICON.WARNING, ALERT_ICON.CHECK, ALERT_ICON.INFO_CIRCLE],
    },
    table: {
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  size: {
    name: 'data-vl-size',
    type: {
      summary: `${ALERT_SIZE.SMALL} | ${ALERT_SIZE.LARGE}`,
    },
    description: 'Attribuut activeert een variant van de waarschuwing maar kleiner.',
    control: {
      type: 'select',
      options: [ALERT_SIZE.SMALL, ALERT_SIZE.LARGE],
    },
    table: {
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  type: {
    name: 'data-vl-type',
    type: {
      summary: `${ALERT_TYPE.INFO} | ${ALERT_TYPE.SUCCESS} | ${ALERT_TYPE.WARNING} | ${ALERT_TYPE.ERROR}`,
    },
    description: 'Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.',
    control: {
      type: 'select',
      options: [ALERT_TYPE.INFO, ALERT_TYPE.SUCCESS, ALERT_TYPE.WARNING, ALERT_TYPE.ERROR],
    },
    table: {
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  closable: {
    name: 'data-vl-closable',
    type: { summary: 'boolean' },
    description:
      'Attribuut wordt gebruikt om de optie toe te voegen om de waarschuwing te sluiten door op het sluit icoon te klikken in de rechterbovenhoek.',
    table: {
      defaultValue: { summary: 'false' },
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  titleSlotText: {
    name: 'title',
    description: '',
    table: {
      category: CATEGORIES.SLOTS,
    },
  },
  buttonSlotText: {
    name: 'actions',
    description: '',
    table: {
      category: CATEGORIES.SLOTS,
    },
  },
  content: {
    name: 'content (for demo purposes)',
    description: '',
  },
};

export const argTypes = {
  ...sharedArgTypes,
  open: {
    table: {
      defaultValue: { summary: 'false' },
      category: CATEGORIES.PROPERTIES,
    },
  },
};
