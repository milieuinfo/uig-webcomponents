import '../../../../../map';
import { argTypes } from '../../config.js';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-features-layer',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'This map layer allows you to set a set of features to display.',
        }),
      },
    },
  },
  argTypes: {
    ...argTypes,
    autoExtent: {
      name: 'data-vl-auto-extent',
      control: { disable: true },
      type: { summary: TYPES.BOOLEAN },
      description: 'Indicates whether the map layer is automatically zoomed so that all features are visible.',
      table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
    },
    autoExtentMaxZoom: {
      name: 'data-vl-max-zoom',
      control: { disable: true },
      type: { summary: TYPES.STRING },
      description: 'Indicates the maximum level to which automatic zooming is performed at an extent',
      table: { category: CATEGORIES.ATTRIBUTES },
    },
    cluster: {
      name: 'data-vl-cluster',
      control: { disable: true },
      type: { summary: TYPES.BOOLEAN },
      description: 'Specifies whether the features should be clustered or not.',
      table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
    },
    clusterDistance: {
      name: 'data-vl-cluster-distance',
      control: { disable: true },
      type: { summary: TYPES.STRING },
      description: 'Indicates from what distance between features it is allowed to cluster.',
      table: { category: CATEGORIES.ATTRIBUTES },
    },
    features: {
      name: 'data-vl-features',
      control: { disable: true },
      type: { summary: TYPES.STRING },
      description: 'Contains the map layer.',
      table: { category: CATEGORIES.ATTRIBUTES },
    },
  },
};

export { Default } from '../../../action/layer-action/delete-action/delete-action.stories.js';
