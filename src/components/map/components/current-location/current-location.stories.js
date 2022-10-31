import { html } from 'lit-html';
import '../../index.js';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../.storybook/utils.js';
import { DEFAULT_ZOOM, DEFAULT_TOOLTIP } from '../current-location';

export default {
  title: 'custom-elements/vl-map/vl-map-current-location',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro:
            'Toont een huidige locatie icoon boven de zoom-in en zoom-out icoontjes de huidige locatie centraal op de kaart te tonen en in te zoomen.',
        }),
      },
    },
  },
  args: {
    zoom: 10,
    tooltip: 'Huidige locatie',
  },
  argTypes: {
    zoom: {
      name: 'zoom',
      type: { summary: TYPES.NUMBER, required: false },
      description:
        'Attribuut wordt gebruikt om te bepalen hoever er ingezoomd moet worden wanneer de gebruiker op de current location knop drukt om huidige locatie centraal op de kaart te tonen.',
      control: { type: 'range', min: 1, max: 13, step: 1 },
      table: {
        defaultValue: { summary: DEFAULT_ZOOM },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    tooltip: {
      name: 'tooltip',
      type: { summary: TYPES.STRING, required: false },
      description: 'Bepaalt de text van de tooltip van de huidige locatie knop.',
      table: {
        defaultValue: { summary: DEFAULT_TOOLTIP },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
  },
};

//--------------------------

const Template = ({ zoom, tooltip }) => html`<vl-map
  id="map"
  data-vl-zoomInTooltip="Zoom in"
  data-vl-zoomOutTooltip="Zoom uit"
>
  <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
  <vl-map-current-location data-vl-zoom="${zoom}" data-vl-tooltip="${tooltip}"></vl-map-current-location>
</vl-map> `;

export const Default = Template.bind({});

//--------------------------
