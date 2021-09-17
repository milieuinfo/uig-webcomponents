import { html } from "lit-html";
import "../../../index.js";
import "../../../mapactions";
import styles from "../../map/styles.scss";
import { defaultArgs, defaultArgTypes } from "../config";

export default {
  title: "custom-elements/vl-map/vl-map-wms-layer",
  args: {
    ...defaultArgs,
    url: "",
    layers: "",
    styles: "",
    version: "",
    opacity: 1,
  },
  argTypes: {
    ...defaultArgTypes,
    url: {
      name: "data-vl-url",
      type: { summary: "string" },
      description: "Attribuut bepaalt de WMS url. Verplicht.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    layers: {
      name: "data-vl-layers",
      type: { summary: "string" },
      description: "Attribuut bepaalt de layers van de WMS. Verplicht.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    styles: {
      name: "data-vl-styles",
      type: { summary: "string" },
      description: "Attribuut bepaalt de WMS stijlen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    version: {
      name: "data-vl-version",
      type: { summary: "string" },
      description: "Attribuut bepaalt de WMS versie.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    opacity: {
      name: "data-vl-opacity",
      type: { summary: "number" },
      description: "Attribuut bepaalt de WMS transparantie.",
      table: {
        defaultValue: { summary: "" },
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

export const Default = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        <vl-map-tiled-wms-layer
          data-vl-name="Gemeentegrenzen"
          data-vl-version="1.3.0"
          data-vl-opacity="1"
          data-vl-url="https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms"
          data-vl-layers="GEM_GRENS"
        >
        </vl-map-tiled-wms-layer>
      </vl-map>
    `
  )}
`;

export const WithImageWMSLayer = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-image-wms-layer
          data-vl-name="Beschermingszones"
          data-vl-version="1.3.0"
          data-vl-opacity="0.7"
          data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
          data-vl-layers="grondwater:beschermingszones_2014"
        >
        </vl-map-image-wms-layer>
      </vl-map>
    `
  )}
`;

export const WithCustomStyledLayerDescriptior = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-tiled-wms-layer
          data-vl-name="Overstromingsgevaarkaarten"
          data-vl-version="1.1.0"
          data-vl-opacity="0.7"
          data-vl-url="https://geoservice.waterinfo.be/wms"
          data-vl-layers="Overstromingsgevaarkaarten-PLUVIAAL:overstroombaar_gebied_PLU_noCC,Overstromingsgevaarkaarten-FLUVIAAL:overstroombaar_gebied_FLU_noCC"
        >
          <vl-map-wms-style
            data-vl-sld='<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
                <NamedLayer>
                    <Name>Overstromingsgevaarkaarten-PLUVIAAL:overstroombaar_gebied_PLU_noCC</Name>
                    <UserStyle>
                        <FeatureTypeStyle>
                            <Rule>
                                <RasterSymbolizer>
                                    <Opacity>1</Opacity>
                                    <ColorMap type="values">
                                        <ColorMapEntry color="#800080" quantity="10.0"/>
                                        <ColorMapEntry color="#FFFFFF" quantity="100.0" opacity="0"/>
                                        <ColorMapEntry color="#FFFFFF" quantity="1000.0" opacity="0"/>
                                    </ColorMap>
                                </RasterSymbolizer>
                            </Rule>
                        </FeatureTypeStyle>
                    </UserStyle>
                </NamedLayer>
                <NamedLayer>
                    <Name>Overstromingsgevaarkaarten-FLUVIAAL:overstroombaar_gebied_FLU_noCC</Name>
                    <UserStyle>
                        <FeatureTypeStyle>
                            <Rule>
                                <RasterSymbolizer>
                                    <Opacity>1</Opacity>
                                    <ColorMap type="values">
                                        <ColorMapEntry color="#800080" quantity="10.0"/>
                                        <ColorMapEntry color="#FFFFFF" quantity="100.0" opacity="0"/>
                                        <ColorMapEntry color="#FFFFFF" quantity="1000.0" opacity="0"/>
                                    </ColorMap>
                                </RasterSymbolizer>
                            </Rule>
                        </FeatureTypeStyle>
                    </UserStyle>
                </NamedLayer>
            </StyledLayerDescriptor>'
          ></vl-map-wms-style>
        </vl-map-tiled-wms-layer>
      </vl-map>
    `
  )}
`;
