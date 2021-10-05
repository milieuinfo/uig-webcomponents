import { html } from "lit-html";
import "../../../map";
import { docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map",
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "De kaart component.",
        }),
      },
    },
  },
  args: {
    allowFullscreen: false,
    disableEscape: false,
    disableRotation: false,
    disableMousewheelzoom: false,
    extent: "[9928, 66928, 272072, 329072]",
  },
  argTypes: {
    allowFullscreen: {
      name: "data-vl-allow-fullscreen",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om de gebruiker de mogelijkheid te geven om de kaart in fullscreen te visualiseren.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
    disableEscape: {
      name: "data-vl-disable-escape-key",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat de escape toets niet gebruikt kan worden.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
    disableRotation: {
      name: "data-vl-disable-rotation",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart te draaien.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
    disableMousewheelzoom: {
      name: "data-vl-disable-mouse-wheel-zoom",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart in te zoomen met het muiswiel.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
    extent: {
      name: "data-vl-extent",
      type: "select",
      options: [
        "[9928, 66928, 272072, 329072]",
        "[-73122.443418, -23915.714632, 347445.354629, 297624.297341]",
      ],
      description:
        "Attribuut wordt gebruikt de grootte van de kaart view te bepalen.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "[9928, 66928, 272072, 329072]" },
      },
    },
  },
};

const Template = ({
  allowFullscreen,
  disableEscape,
  disableRotation,
  disableMousewheelzoom,
  extent,
}) => html`
  <vl-map
    id="map"
    data-vl-extent=${extent}
    ?data-vl-allow-fullscreen=${allowFullscreen}
    ?data-vl-disable-escape-key=${disableEscape}
    ?data-vl-disable-rotation=${disableRotation}
    ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelzoom}
  >
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-baselayer-grb></vl-map-baselayer-grb>
    <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
  </vl-map>
`;

export const Default = Template.bind({});

export const AllowFullscreen = Template.bind({});
AllowFullscreen.args = { allowFullscreen: true };

export const DisabledMouseweelZoom = Template.bind({});
DisabledMouseweelZoom.args = { disableMousewheelzoom: true };
