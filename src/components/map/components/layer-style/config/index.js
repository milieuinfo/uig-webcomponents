import { CATEGORIES, TYPES } from '../../../../../../.storybook/utils';

export const argTypes = {
  color: {
    name: 'data-vl-color',
    type: { summary: TYPES.STRING },
    description: 'Attribuut wordt gebruikt om aan te geven wat de kleur is van de kaartlaagstijl.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'rgba(2, 85, 204, 0.8)' },
    },
    control: { disable: true },
  },
  borderColor: {
    name: 'data-vl-border-color',
    type: { summary: TYPES.STRING },
    description: 'Attribuut wordt gebruikt om aan te geven wat de kleur van de rand is van de kaartlaagstijl.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'rgba(2, 85, 204, 1)' },
    },
    control: { disable: true },
  },
  borderSize: {
    name: 'data-vl-border-size',
    type: { summary: TYPES.NUMBER },
    description: 'Attribuut wordt gebruikt om aan te geven wat de grootte van de rand is van de kaartlaagstijl.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 1 },
    },
    control: { disable: true },
  },
  backgroundColor: {
    name: 'data-vl-background-color',
    type: { summary: TYPES.STRING },
    description: 'Attribuut wordt gebruikt om aan te geven wat de kleur is van de achtergrond van de tekst.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'rgba(0, 0, 0, 0)' },
    },
    control: { disable: true },
  },
  textBorderColor: {
    name: 'data-vl-border-color',
    type: { summary: TYPES.STRING },
    description: 'Attribuut wordt gebruikt om aan te geven wat de kleur is van de rand van de tekst.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'rgba(255, 255, 255, 0)' },
    },
    control: { disable: true },
  },
  textBorderSize: {
    name: 'data-vl-border-size',
    type: { summary: TYPES.NUMBER },
    description: 'Attribuut wordt gebruikt om aan te geven wat de grootte is van de rand van de tekst.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 1 },
    },
    control: { disable: true },
  },
  textColor: {
    name: 'data-vl-text-color',
    type: { summary: TYPES.STRING },
    description: 'Attribuut wordt gebruikt om aan te geven wat de kleur is van de tekst.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '#FFF' },
    },
    control: { disable: true },
  },
  textFeatureAttributeName: {
    name: 'data-vl-text-feature-attribute-name',
    type: { summary: TYPES.STRING },
    description:
      'Attribuut wordt gebruikt om aan te geven wat de naam van het attribuut van de feature van de stijl is, die gebruikt wordt om de tekst te tonen.',
    control: { disable: true },
    table: {
      category: CATEGORIES.ATTRIBUTES,
    },
  },
  textOffsetX: {
    name: 'data-vl-text-offset-x',
    type: { summary: TYPES.NUMBER },
    description: 'Attribuut wordt gebruikt om aan te geven wat de offset op de x-as is van de tekst.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 0 },
    },
    control: { disable: true },
  },
  textOffsetY: {
    name: 'data-vl-text-offset-y',
    type: { summary: TYPES.NUMBER },
    description: 'Attribuut wordt gebruikt om aan te geven wat de offset op de y-as is van de tekst.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 0 },
    },
    control: { disable: true },
  },
  textSize: {
    name: 'data-vl-text-size',
    type: { summary: TYPES.STRING },
    description:
      'Attribuut wordt gebruikt om aan te geven wat de grootte is van de tekst in CSS font-size eenheden (medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit).',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '10px' },
    },
    control: { disable: true },
  },
};
