import { html } from "lit-html";
import "../map/index.js";
import "./mapactions";
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
      <vl-map id="map" ?data-vl-allow-fullscreen=${props.fullscreen}>
        <vl-map-baselayer-grb-gray
          id="baselayer-grb-gray"
        ></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb id="baselayer-grb"></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      </vl-map>
    `
  )}
`;

// export const MapWithoutEscapeButton = (props) => html`
// ${mapWrapper(
// props,
// html`
// <vl-map id="map" data-vl-disable-escape-key="">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// </vl-map>
// `
// )}
// `;

// export const MapWithoutRotate = (props) => html`
// ${mapWrapper(
// props,
// html`
// <vl-map id="map" data-vl-disable-rotation="">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// </vl-map>
// `
// )}
// `;

// export const MapWithoutMouseWheelZoom = (props) => html`
// ${mapWrapper(
// props,
// html`
// <vl-map id="map" data-vl-disable-mouse-wheel-zoom="">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// </vl-map>
// `
// )}
// `;

// export const MapWithFullScreen = (props) => html`
// ${mapWrapper(
// props,
// html`
// <vl-map id="map" data-vl-allow-fullscreen="">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// </vl-map>
// `
// )}
// `;

// export const MapWithFeatureAndCircle = (props) => {
// const features =
// '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }] }';

// return html`
// ${mapWrapper(
// props,
// html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-baselayer-grb></vl-map-baselayer-grb>
// <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
// <vl-map-features-layer
// data-vl-name="laag"
// data-vl-features=${features}
// >
// <vl-map-layer-circle-style
// id="map-standard-circle-style"
// ></vl-map-layer-circle-style>
// </vl-map-features-layer>
// </vl-map>
// `
// )}
// `;
// };

// export const MapWithFeatureAndCustomizedCircle = (props) => {
// const features =
// '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }] }';

// return html`
// ${mapWrapper(
// props,
// html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-baselayer-grb></vl-map-baselayer-grb>
// <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
// <vl-map-features-layer
// data-vl-name="laag"
// data-vl-features=${features}
// >
// <vl-map-layer-circle-style
// id="map-modified-circle-style"
// data-vl-color="#ffe615"
// data-vl-size="5"
// data-vl-border-color="#000"
// data-vl-border-size="1"
// ></vl-map-layer-circle-style>
// </vl-map-features-layer>
// </vl-map>
// `
// )}
// `;
// };

// export const MapWithClusteredFeatures = (props) => {
// const features =
// '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }, { "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [149055.0,199908.0] } }, { "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [151055.0,201908.0] } }]} ';

// return html`
// ${mapWrapper(
// props,
// html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-baselayer-grb></vl-map-baselayer-grb>
// <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
// <vl-map-features-layer
// data-vl-name="laag"
// data-vl-features=${features}
// data-vl-cluster-distance="100"
// >
// <vl-map-layer-circle-style></vl-map-layer-circle-style>
// </vl-map-features-layer>
// </vl-map>
// `
// )}
// `;
// };

// export const MapWithDelete = (props) => {
// const features =
// '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [210000,190000] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "LineString" , "coordinates" : [[170000,170000], [150000,206000]] } }, { "type" : "Feature" , "id" : 3, "geometry" : { "type" : "Polygon" , "coordinates" : [[[44000,171000],[100000,171000],[100000,205000],[44000,205000],[44000,171000]]] } }] }';

// return html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-features-layer
// id="layer"
// data-vl-name="Laag"
// data-vl-features=${features}
// >
// <vl-map-delete-action
// id="delete-action"
// data-vl-default-active=""
// ></vl-map-delete-action>
// </vl-map-features-layer>
// </vl-map>
// `;
// };

// export const MapWithDeleteWithCustomizedStyle = (props) => {
// const features =
// '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [210000,190000] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "LineString" , "coordinates" : [[170000,170000], [150000,206000]] } }, { "type" : "Feature" , "id" : 3, "geometry" : { "type" : "Polygon" , "coordinates" : [[[44000,171000],[100000,171000],[100000,205000],[44000,205000],[44000,171000]]] } }] }';

// return html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-features-layer
// id="layer"
// data-vl-name="Laag"
// data-vl-features=${features}
// >
// <vl-map-delete-action id="delete-action" data-vl-default-active="">
// <vl-map-layer-style
// data-vl-text-color="#000"
// data-vl-color="#FFE615"
// data-vl-border-color="#FFE615"
// ></vl-map-layer-style>
// </vl-map-delete-action>
// </vl-map-features-layer>
// </vl-map>
// `;
// };

// export const MapWithDrawPoint = (props) => {
// return html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-baselayer-grb></vl-map-baselayer-grb>
// <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
// <vl-map-features-layer id="point-layer">
// <vl-map-layer-circle-style></vl-map-layer-circle-style>
// <vl-map-draw-point-action
// id="draw-point-action"
// data-vl-default-active=""
// ></vl-map-draw-point-action>
// </vl-map-features-layer>
// </vl-map>
// `;
// };

// export const MapWithDrawLine = (props) => {
// return html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-baselayer-grb></vl-map-baselayer-grb>
// <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
// <vl-map-features-layer id="line-layer">
// <vl-map-layer-style></vl-map-layer-style>
// <vl-map-draw-line-action
// id="draw-line-action"
// data-vl-default-active=""
// ></vl-map-draw-line-action>
// </vl-map-features-layer>
// </vl-map>
// `;
// };

// export const MapWithDrawPolygon = (props) => {
// return html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-baselayer-grb></vl-map-baselayer-grb>
// <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
// <vl-map-features-layer id="polygon-layer">
// <vl-map-layer-style></vl-map-layer-style>
// <vl-map-draw-polygon-action
// id="draw-polygon-action"
// data-vl-default-active=""
// ></vl-map-draw-polygon-action>
// </vl-map-features-layer>
// </vl-map>
// `;
// };

// export const MapWithDrawPointSnapping = (props) => {
// return html`
// <vl-map id="map">
// <vl-map-side-sheet>
// <vl-map-layer-switcher></vl-map-layer-switcher>
// </vl-map-side-sheet>
// <vl-map-search></vl-map-search>
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-features-layer id="point-layer">
// <vl-map-layer-circle-style
// data-vl-color="rgba(34, 39, 255, 0.4)"
// data-vl-border-color="rgba(0, 5, 218, 1)"
// data-vl-border-size="1"
// ></vl-map-layer-circle-style>
// <vl-map-layer-style
// data-vl-color="rgba(34, 39, 255, 0.4)"
// data-vl-border-color="rgba(0, 5, 218, 1)"
// data-vl-border-size="1"
// ></vl-map-layer-style>
// <vl-map-draw-point-action
// id="draw-point-snap-action"
// data-vl-default-active=""
// data-vl-snapping=""
// data-vl-snapping-pixel-tolerance="1000"
// >
// <vl-map-wfs-layer
// data-vl-name="Stromend waterlichamen"
// data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
// data-vl-layers="owl_l"
// data-vl-max-resolution="4"
// >
// <vl-map-layer-style
// data-vl-color="rgba(6, 163, 247, 0.4)"
// data-vl-border-size="4"
// data-vl-border-color="rgba(6, 163, 247, 1)"
// ></vl-map-layer-style>
// </vl-map-wfs-layer>

// <vl-map-wfs-layer
// data-vl-name="Stilstaand waterlichamen"
// data-vl-url="https://gisservices.inbo.be/arcgis/services/Watervlakken/MapServer/WFSServer?service=wfs"
// data-vl-layers="Watervlakken"
// data-vl-max-resolution="4"
// >
// <vl-map-layer-style
// data-vl-color="rgba(6, 163, 247, 0.4)"
// data-vl-border-size="4"
// data-vl-border-color="rgba(6, 163, 247, 1)"
// >
// </vl-map-layer-style>
// </vl-map-wfs-layer>
// </vl-map-draw-point-action>
// </vl-map-features-layer>
// </vl-map>
// `;
// };

// export const MapWithTiledWMSLayer = (props) => {
// return html`
// <vl-map id="map">
// <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
// <vl-map-tiled-wms-layer
// data-vl-name="Gemeentegrenzen"
// data-vl-version="1.3.0"
// data-vl-opacity="1"
// data-vl-url="https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms"
// data-vl-layers="GEM_GRENS"
// >
// </vl-map-tiled-wms-layer>
// </vl-map>
// `;
// };

// export const MapWithImageWMSLayer = (props) => {
// return html`
// <vl-map id="map">
// <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
// <vl-map-image-wms-layer
// data-vl-name="Beschermingszones"
// data-vl-version="1.3.0"
// data-vl-opacity="0.7"
// data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
// data-vl-layers="grondwater:beschermingszones_2014"
// >
// </vl-map-image-wms-layer>
// </vl-map>
// `;
// };
