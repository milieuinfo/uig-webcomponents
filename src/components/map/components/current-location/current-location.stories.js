import { html } from 'lit-html';
import '../../index.js';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../.storybook/utils.js';
import { DEFAULT_ZOOM } from '../current-location';

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
  },
};

//--------------------------

const Template = ({ zoom }) => html`<vl-map id="map">
  <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
  <vl-map-current-location data-vl-zoom="${zoom}"></vl-map-current-location>
</vl-map> `;

export const Default = Template.bind({});

//--------------------------
