import { html } from "lit-html";
import "../map/index.js";
import "./mapactions";
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

const mapWrapper = (props, children) => {
  return html`
    ${stylesheet}
    <div is="vl-grid">${children}</div>
  `;
};

export const Default = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-baselayer-grb-gray
          id="baselayer-grb-gray"
        ></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb id="baselayer-grb"></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      </vl-map>
    `
  )}
`;

export const MapWithoutEscapeButton = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map" data-vl-disable-escape-key="">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      </vl-map>
    `
  )}
`;

export const MapWithoutRotate = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map" data-vl-disable-rotation="">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      </vl-map>
    `
  )}
`;

export const MapWithoutMouseWheelZoom = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map" data-vl-disable-mouse-wheel-zoom="">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      </vl-map>
    `
  )}
`;

export const MapWithFullScreen = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map" data-vl-allow-fullscreen="">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      </vl-map>
    `
  )}
`;

export const MapWithFeatureAndCircle = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }] }';

  return html`
    ${mapWrapper(
      props,
      html`
        <vl-map id="map">
          <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
          <vl-map-baselayer-grb></vl-map-baselayer-grb>
          <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
          <vl-map-features-layer
            data-vl-name="laag"
            data-vl-features=${features}
          >
            <vl-map-layer-circle-style
              id="map-standard-circle-style"
            ></vl-map-layer-circle-style>
          </vl-map-features-layer>
        </vl-map>
      `
    )}
  `;
};

export const MapWithFeatureAndCustomizedCircle = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }] }';

  return html`
    ${mapWrapper(
      props,
      html`
        <vl-map id="map">
          <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
          <vl-map-baselayer-grb></vl-map-baselayer-grb>
          <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
          <vl-map-features-layer
            data-vl-name="laag"
            data-vl-features=${features}
          >
            <vl-map-layer-circle-style
              id="map-modified-circle-style"
              data-vl-color="#ffe615"
              data-vl-size="5"
              data-vl-border-color="#000"
              data-vl-border-size="1"
            ></vl-map-layer-circle-style>
          </vl-map-features-layer>
        </vl-map>
      `
    )}
  `;
};

export const MapWithClusteredFeatures = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }, { "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [149055.0,199908.0] } }, { "type" : "Feature" , "geometry" : { "type" : "Point" , "coordinates" : [151055.0,201908.0] } }]} ';

  return html`
    ${mapWrapper(
      props,
      html`
        <vl-map id="map">
          <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
          <vl-map-baselayer-grb></vl-map-baselayer-grb>
          <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
          <vl-map-features-layer
            data-vl-name="laag"
            data-vl-features=${features}
            data-vl-cluster-distance="100"
          >
            <vl-map-layer-circle-style></vl-map-layer-circle-style>
          </vl-map-features-layer>
        </vl-map>
      `
    )}
  `;
};

export const MapWithDelete = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [210000,190000] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "LineString" , "coordinates" : [[170000,170000], [150000,206000]] } }, { "type" : "Feature" , "id" : 3, "geometry" : { "type" : "Polygon" , "coordinates" : [[[44000,171000],[100000,171000],[100000,205000],[44000,205000],[44000,171000]]] } }] }';

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer
        id="layer"
        data-vl-name="Laag"
        data-vl-features=${features}
      >
        <vl-map-delete-action
          id="delete-action"
          data-vl-default-active=""
        ></vl-map-delete-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const MapWithDeleteWithCustomizedStyle = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [210000,190000] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "LineString" , "coordinates" : [[170000,170000], [150000,206000]] } }, { "type" : "Feature" , "id" : 3, "geometry" : { "type" : "Polygon" , "coordinates" : [[[44000,171000],[100000,171000],[100000,205000],[44000,205000],[44000,171000]]] } }] }';

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer
        id="layer"
        data-vl-name="Laag"
        data-vl-features=${features}
      >
        <vl-map-delete-action id="delete-action" data-vl-default-active="">
          <vl-map-layer-style
            data-vl-text-color="#000"
            data-vl-color="#FFE615"
            data-vl-border-color="#FFE615"
          ></vl-map-layer-style>
        </vl-map-delete-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
