import { TYPES, CATEGORIES } from '../../../../../../.storybook/utils.js';

export const args = {
  defaultActive: true,
  layer: '',
  snapping: false,
  snappingPixelTolerance: 1000,
};

export const argTypes = {
  defaultActive: {
    name: 'data-vl-default-active',
    type: { summary: TYPES.BOOLEAN },
    description: 'Used to trigger the action by default.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 'false' },
    },
    control: { disable: true },
  },
  layer: {
    name: 'data-vl-layer',
    type: { summary: TYPES.STRING },
    description: 'Used to link the action to a map layer via the name attribute.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '' },
    },
    control: { disable: true },
  },
  snapping: {
    name: 'data-vl-snapping',
    type: { summary: TYPES.STRING },
    description:
      'Used to indicate that snapping is allowed when drawing, either on the layer being drawn on (if no vl-map-wfs-layer(s) as child elements), or on the supplied vl-map-wfs layers.',
    table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
    control: { disable: true },
  },
  snappingPixelTolerance: {
    name: 'data-vl-snapping-pixel-tolerance',
    type: { summary: TYPES.STRING },
    description: 'Used to indicate within how many pixels of a feature can be snapped.',
    table: {
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: '10' },
    },
    control: { disable: true },
  },
};
