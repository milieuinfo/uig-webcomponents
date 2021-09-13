import { html } from "lit-html";
import "../../index.js";
import "../../mapactions";
import styles from "./styles.scss";

const defaultArgs = {
  fullscreen: false,
  escape: false,
  rotation: false,
  mousewheelzoom: false,
};

export default {
  title: "custom-elements/vl-map",
  args: { ...defaultArgs },
  argTypes: {
    fullscreen: {
      name: "data-vl-allow-fullscreen",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om de gebruiker de mogelijkheid te geven om de kaart in fullscreen te visualiseren.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    escape: {
      name: "data-vl-disable-escape-key",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat de escape toets niet gebruikt kan worden.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    rotation: {
      name: "data-vl-disable-rotation",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart te draaien.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    mousewheelzoom: {
      name: "data-vl-disable-mouse-wheel-zoom",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart in te zoomen met het muiswiel.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const mapWrapper = (props, children) => {
  return html`
    ${stylesheet}
    <div is="vl-grid">${children}</div>
  `;
};

export const BaseMap = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map
        id="map"
        ?data-vl-allow-fullscreen=${props.fullscreen}
        ?data-vl-disable-escape-key=${props.escape}
        ?data-vl-disable-rotation=${props.rotation}
        ?data-vl-disable-mouse-wheel-zoom=${props.mousewheelzoom}
      >
        <vl-map-baselayer-grb-gray
          id="baselayer-grb-gray"
        ></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb id="baselayer-grb"></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      </vl-map>
    `
  )}
`;
