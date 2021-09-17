import { html } from "lit-html";
import "../../../../index.js";
import "../../../../mapactions";
import styles from "../../../map/styles.scss";
import { defaultArgs, defaultArgTypes } from "../config";

export default {
  title: "custom-elements/vl-map/vl-map-draw-point-action",
  args: defaultArgs,
  argTypes: defaultArgTypes,
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

export const Default = (props) => {
  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer id="point-layer">
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
        <vl-map-draw-point-action
          id="draw-point-action"
          data-vl-default-active=""
        ></vl-map-draw-point-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const WithSnapping = (props) => {
  return html`
    <vl-map id="map">
      <vl-map-side-sheet>
        <vl-map-layer-switcher></vl-map-layer-switcher>
      </vl-map-side-sheet>
      <vl-map-search></vl-map-search>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer id="point-layer">
        <vl-map-layer-circle-style
          data-vl-color="rgba(34, 39, 255, 0.4)"
          data-vl-border-color="rgba(0, 5, 218, 1)"
          data-vl-border-size="1"
        ></vl-map-layer-circle-style>
        <vl-map-layer-style
          data-vl-color="rgba(34, 39, 255, 0.4)"
          data-vl-border-color="rgba(0, 5, 218, 1)"
          data-vl-border-size="1"
        ></vl-map-layer-style>
        <vl-map-draw-point-action
          id="draw-point-snap-action"
          data-vl-default-active=""
          data-vl-snapping=""
          data-vl-snapping-pixel-tolerance="1000"
        >
          <vl-map-wfs-layer
            data-vl-name="Stromend waterlichamen"
            data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
            data-vl-layers="owl_l"
            data-vl-max-resolution="4"
          >
            <vl-map-layer-style
              data-vl-color="rgba(6, 163, 247, 0.4)"
              data-vl-border-size="4"
              data-vl-border-color="rgba(6, 163, 247, 1)"
            ></vl-map-layer-style>
          </vl-map-wfs-layer>

          <vl-map-wfs-layer
            data-vl-name="Stilstaand waterlichamen"
            data-vl-url="https://gisservices.inbo.be/arcgis/services/Watervlakken/MapServer/WFSServer?service=wfs"
            data-vl-layers="Watervlakken"
            data-vl-max-resolution="4"
          >
            <vl-map-layer-style
              data-vl-color="rgba(6, 163, 247, 0.4)"
              data-vl-border-size="4"
              data-vl-border-color="rgba(6, 163, 247, 1)"
            >
            </vl-map-layer-style>
          </vl-map-wfs-layer>
        </vl-map-draw-point-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
