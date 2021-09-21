import { html } from "lit-html";
import "../../../map";

export default {
  title: "custom-elements/vl-map",
  args: {
    fullscreen: false,
    escape: false,
    rotation: false,
    mousewheelzoom: false,
  },
  argTypes: {
    fullscreen: {
      name: "data-vl-allow-fullscreen",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om de gebruiker de mogelijkheid te geven om de kaart in fullscreen te visualiseren.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
    escape: {
      name: "data-vl-disable-escape-key",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat de escape toets niet gebruikt kan worden.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
    rotation: {
      name: "data-vl-disable-rotation",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart te draaien.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
    mousewheelzoom: {
      name: "data-vl-disable-mouse-wheel-zoom",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart in te zoomen met het muiswiel.",
      table: {
        defaultValue: { summary: "false" },
      },
      control: { disable: true },
    },
  },
};

export const Default = ({
  fullscreen,
  escape,
  rotation,
  mousewheelzoom,
}) => html`
  <vl-map
    id="map"
    ?data-vl-allow-fullscreen=${fullscreen}
    ?data-vl-disable-escape-key=${escape}
    ?data-vl-disable-rotation=${rotation}
    ?data-vl-disable-mouse-wheel-zoom=${mousewheelzoom}
  >
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-baselayer-grb></vl-map-baselayer-grb>
    <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
  </vl-map>
`;
