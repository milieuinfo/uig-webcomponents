import { html } from "lit-html";
import "../../index.js";
import "../../mapactions";
import styles from "../../styles.scss";
import "../../../form-message";
import "../../../button";
import "../../../select";

export default {
  title: "custom-elements/vl-map/vl-map-search",
  args: {},
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
        <vl-map-search></vl-map-search>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      </vl-map>
    `
  )}
`;

export const WithSeparateSearchFunctionality = (props) => html`
  ${mapWrapper(
    props,
    html`
      <label is="vl-form-label" data-vl-block="">Zoek op adres</label>
      <vl-map-search id="bind-map-search"></vl-map-search><br />
      <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho> </vl-map
      ><button
        id="bind-map-button"
        is="vl-button"
        type="button"
        onclick="document.querySelector('#bind-map-search').bindMap(document.querySelector('#map'))"
        slot="actions"
      >
        Koppel zoekbalk aan kaart
      </button>
    `
  )}
`;

export const WithCallback = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-search id="vl-map-search-select-callback"></vl-map-search>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      </vl-map>
      <script>
        Promise.all([
          customElements.whenDefined("vl-map"),
          customElements.whenDefined("vl-map-search"),
        ]).then(() => {
          document
            .querySelector("#vl-map-search-select-callback")
            .onSelect((data) => {
              document.querySelector("#vl-map-select-callback").zoomTo(data);
            });
        });
      </script>
    `
  )}
`;
