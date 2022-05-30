import { CATEGORIES, TYPES } from '../../../../../../.storybook/utils';

export const args = {
  type: 'wmts',
  url: '',
  layer: '',
  title: '',
};

// to do: remove attributes at preset baselayers docs, add story for custom baselayer with custom attributes
export const argTypes = {
  type: {
    name: 'data-vl-type',
    type: 'select',
    options: ['wmts', 'wfs'],
    description: 'Attribuut wordt gebruikt om aan te geven wat het type is van de kaartlaag.',
    table: { category: CATEGORIES.ATTRIBUTES, type: { summary: 'string' }, defaultValue: { summary: '' } },
    control: { disable: true },
  },
  url: {
    name: 'data-vl-url',
    type: { summary: TYPES.STRING },
    description: 'Attribuut geeft aan via welke URL gebruikt wordt om de kaartlaag op te halen.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '' },
    },
    control: { disable: true },
  },
  layer: {
    name: 'data-vl-layer',
    type: { summary: TYPES.STRING },
    description: 'Attribuut geeft aan wat de kaartlaag identifier is.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '' } },
    control: { disable: true },
  },
  title: {
    name: 'data-vl-title',
    type: { summary: TYPES.STRING },
    description: 'Attribuut bepaalt de titel van de kaartlaag.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '' } },
    control: { disable: true },
  },
};
