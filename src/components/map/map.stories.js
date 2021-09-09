import { html } from "lit-html";
import "../map/vl-map";
import styles from "./styles.scss";

const defaultArgs = {};

export default {
  title: "custom-elements/vl-map",
  args: { ...defaultArgs },
  argTypes: {},
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const mapWrap = () => {
  return html`
    ${stylesheet}
    <vl-map id="map">
      <vl-map-baselayer-grb-gray
        id="baselayer-grb-gray"
      ></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb id="baselayer-grb"></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
  `;
};

export const Default = (props) => html`${mapWrap(props, props.content)}`;
