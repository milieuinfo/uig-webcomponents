import { TYPES, CATEGORIES } from '../../../../../.storybook/utils';

export const argTypes = {
  color: {
    name: 'data-vl-color',
    type: { summary: TYPES.STRING },
    description: 'Used to indicate the color of the map layer style.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'rgba(2, 85, 204, 0.8)' } },
    control: { disable: true },
  },
  borderColor: {
    name: 'data-vl-border-color',
    type: { summary: TYPES.STRING },
    description: 'Used to indicate the border color of the map layer style.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'rgba(2, 85, 204, 1)' } },
    control: { disable: true },
  },
  borderSize: {
    name: 'data-vl-border-size',
    type: { summary: TYPES.NUMBER },
    description: 'Used to indicate the border size of the map layer style.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 1 } },
    control: { disable: true },
  },
  backgroundColor: {
    name: 'data-vl-background-color',
    type: { summary: TYPES.STRING },
    description: 'Used to indicate the color of the background of the text.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'rgba(0, 0, 0, 0)' } },
    control: { disable: true },
  },
  textBorderColor: {
    name: 'data-vl-border-color',
    type: { summary: TYPES.STRING },
    description: 'Used to indicate the color of the border of the text.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'rgba(255, 255, 255, 0)' } },
    control: { disable: true },
  },
  textBorderSize: {
    name: 'data-vl-border-size',
    type: { summary: TYPES.NUMBER },
    description: 'Used to indicate the size of the border of the text.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 1 } },
    control: { disable: true },
  },
  textColor: {
    name: 'data-vl-text-color',
    type: { summary: TYPES.STRING },
    description: 'Used to indicate the color of the text.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '#FFF' } },
    control: { disable: true },
  },
  textFeatureAttributeName: {
    name: 'data-vl-text-feature-attribute-name',
    type: { summary: TYPES.STRING },
    description:
      "Used to indicate the name of the attribute of the style's feature, which is used to display the text.",
    control: { disable: true },
    table: { category: CATEGORIES.ATTRIBUTES },
  },
  textOffsetX: {
    name: 'data-vl-text-offset-x',
    type: { summary: TYPES.NUMBER },
    description: 'Used to indicate the x-axis offset of the text.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 0 } },
    control: { disable: true },
  },
  textOffsetY: {
    name: 'data-vl-text-offset-y',
    type: { summary: TYPES.NUMBER },
    description: 'Used to indicate the y-axis offset of the text.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 0 } },
    control: { disable: true },
  },
  textSize: {
    name: 'data-vl-text-size',
    type: { summary: TYPES.STRING },
    description:
      'Used to indicate the size of the text in CSS font-size units (medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit).',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '10px' } },
    control: { disable: true },
  },
};
