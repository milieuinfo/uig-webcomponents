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
    description: 'Attribuut wordt gebruikt om de actie standaard te activeren.',
    table: {
      defaultValue: { summary: 'false' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
  layer: {
    name: 'data-vl-layer',
    type: { summary: TYPES.STRING },
    description: 'Attribuut wordt gebruikt om via het naam attribuut de actie te koppelen aan een kaartlaag.',
    table: {
      defaultValue: { summary: '' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
  snapping: {
    name: 'data-vl-snapping',
    type: { summary: TYPES.STRING },
    description:
      'Attribuut wordt gebruikt om aan te geven dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.',
    table: {
      defaultValue: { summary: 'false' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
  snappingPixelTolerance: {
    name: 'data-vl-snapping-pixel-tolerance',
    type: { summary: TYPES.STRING },
    description: 'Attribuut om aan te geven binnen de hoeveel pixel van een feature er gesnapped mag worden.',
    table: {
      defaultValue: { summary: '10' },
      category: CATEGORIES.ATTRIBUTES,
    },
    control: { disable: true },
  },
};
