import { action } from '@storybook/addon-actions';
import { CATEGORIES, TYPES } from '../../../../.storybook/utils';

export const args = {
  analytics: false,
  extraOptIns: [],
  submitted: action('vl-submitted'),
  open: false,
};

// to do, better generic description method for more complex properties
export const argTypes = {
  analytics: {
    name: 'data-vl-analytics',
    description: 'Attribute that determines whether analytics should be added on consent or not.',
    table: { category: CATEGORIES.ATTRIBUTES },
    type: { summary: TYPES.BOOLEAN },
  },
  extraOptIns: {
    table: { category: CATEGORIES.PROPERTIES },
    description:
      'Property that determines additional opt ins. Opt ins are passed via an array with objects. <br/>' +
      `[{` +
      '<br/>`name:` `string` Determines the name of the opt in. This is used in the name of the cookie set on consent.' +
      '<br/>`label:` `string` Determines the label of the opt in, that is displayed in the consent for the user.' +
      '<br/>`description:` `string` Determines the description of the opt in. This is optional.' +
      '<br/>`defaultChecked:` `boolean` Determines wheter the checkbox of the opt in is checked by default or not.' +
      `<br/>},]`,

    type: { summary: TYPES.ARRAY },
  },
  submitted: {
    name: 'vl-submitted',
    table: { category: CATEGORIES.EVENTS },
    description:
      'The custom event fired on submit of the consent. In the detail of the event, you can find an array with the cookies that are set, and the values.',
  },
  open: {
    table: { category: CATEGORIES.PROPERTIES },
    control: {
      disable: true,
    },
    type: { summary: TYPES.BOOLEAN },
    description:
      'If not set, the cookie consent opens when there is no consent given in the past according to the cookies and it closes on consent. To overwrite this default behaviour, the open state can be manipulated via this property.',
  },
};
