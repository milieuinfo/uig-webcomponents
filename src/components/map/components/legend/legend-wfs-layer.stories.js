import { html } from 'lit-html';
import '../../index.js';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypes } from './config/index.js';
import { docsIntro } from '../../../../../.storybook/utils.js';
import { LEGEND_PLACEMENT } from './enums/index.js';

export default {
  title: 'custom-elements/vl-map/vl-map-legend/vl-map-legend-wfs-layer',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro:
            'De kaart legende voor kaart met één vl-map-features-layer met meerdere vl-map-layer-styles. ' +
            'Voeg de property styleId toe in de properties van elke feature om aan te geven met welke stijl ' +
            'de feature op de kaart moet getoond worden',
        }),
      },
    },
  },
  args: {
    placement: LEGEND_PLACEMENT.BOTTOM_RIGHT,
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  argTypes: {
    ...argTypes,
  },
};

export const Default = (props) => {
  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-wfs-layer
        data-vl-name="Oppervlaktewaterlichamen"
        data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
        data-vl-layers="owl_l"
        data-vl-max-resolution="8"
      >
        <vl-map-layer-circle-style
          data-vl-color="#ffe615"
          data-vl-size="5"
          data-vl-border-color="#000"
          data-vl-border-size="1"
        ></vl-map-layer-circle-style>
      </vl-map-wfs-layer>
      <vl-map-legend
        data-vl-placement="${props.placement}"
        top="${ifDefined(props.top)}"
        right="${ifDefined(props.right)}"
        bottom="${ifDefined(props.bottom)}"
        left="${ifDefined(props.left)}"
      ></vl-map-legend>
    </vl-map>
  `;
};
