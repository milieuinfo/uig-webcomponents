import { html } from 'lit-html';
import '../..';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The map component.',
        }),
      },
    },
  },
  args: {
    allowFullscreen: false,
    disableEscape: false,
    disableRotation: false,
    disableMousewheelZoom: false,
  },
  argTypes: {
    allowFullscreen: {
      name: 'data-vl-allow-fullscreen',
      type: { summary: TYPES.BOOLEAN },
      description: 'Used to allow the user to visualize the map in full screen.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableEscape: {
      name: 'data-vl-disable-escape-key',
      type: { summary: TYPES.BOOLEAN },
      description: 'Used to ensure that the escape key cannot be used.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableRotation: {
      name: 'data-vl-disable-rotation',
      type: { summary: TYPES.BOOLEAN },
      description: 'Used to ensure that it is not possible to rotate the card.',
      table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
      control: { disable: true },
    },
    disableMousewheelZoom: {
      name: 'data-vl-disable-mouse-wheel-zoom',
      type: { summary: TYPES.BOOLEAN },
      description: 'Used to ensure that it is not possible to zoom the map with the mouse wheel.',
      table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'false' } },
      control: { disable: true },
    },
  },
};

const Template = ({ allowFullscreen, disableEscape, disableRotation, disableMousewheelZoom }) => html`
  <vl-map
    id="map"
    ?data-vl-allow-fullscreen=${allowFullscreen}
    ?data-vl-disable-escape-key=${disableEscape}
    ?data-vl-disable-rotation=${disableRotation}
    ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
  >
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-baselayer-grb></vl-map-baselayer-grb>
    <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
  </vl-map>
`;

export const Default = Template.bind({});
export const AllowFullscreen = Template.bind({});
AllowFullscreen.args = { allowFullscreen: true };
export const DisableMousewheelZoom = Template.bind({});
DisableMousewheelZoom.args = { disableMousewheelZoom: true };
