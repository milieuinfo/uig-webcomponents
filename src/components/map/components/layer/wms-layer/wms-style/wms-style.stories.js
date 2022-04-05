import { html } from 'lit-html';
import '../../../../../map';
import { docsIntro } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-wms-style',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Klasse voor een WMS laag te stijlen via een SLD.',
        }),
      },
    },
  },
  argTypes: {
    sld: {
      name: 'data-vl-sld',
      type: { summary: 'string' },
      control: { disable: true },
      description:
        'Attribuut bepaalt de body van een WMS laag. Deze XML kan gebruikt worden om de WMS server side te stijlen. (http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd|Styled Layer Descriptor)',
    },
  },
};

export const Default = () => html`
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
`;
