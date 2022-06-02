import { TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';
import { args as actionArgs, argTypes as actionArgTypes } from '../../config';

export const args = {
  ...actionArgs,
  snapping: false,
  snappingPixelTolerance: 1000,
};

export const argTypes = {
  ...actionArgTypes,
  snapping: {
    name: 'data-vl-snapping',
    type: { summary: TYPES.BOOLEAN },
    description:
      'Indicates if snapping is allowed when drawing, either on the layer being drawn on (if no vl-map-wfs-layer(s) as child elements), or on the supplied vl-map-wfs-layers.',
    table: {
      defaultValue: { summary: 'false' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
  snappingPixelTolerance: {
    name: 'data-vl-snapping-pixel-tolerance',
    type: { summary: TYPES.STRING },
    description: 'Indicates within how many pixels of a feature can be snapped.',
    table: {
      defaultValue: { summary: '10' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
};
