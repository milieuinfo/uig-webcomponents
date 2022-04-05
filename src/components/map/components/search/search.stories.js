import { html } from 'lit-html';
import '../../../map';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-search',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'De kaart zoek op adres component.',
        }),
      },
    },
  },
};

export const Default = () =>
  html`
    <vl-map id="map">
      <vl-map-search></vl-map-search>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
  `;

export const WithSeparateSearchFunctionality = () => html`
  <vl-map-search id="bind-map-search"></vl-map-search>
  <br />
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-baselayer-grb></vl-map-baselayer-grb>
    <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
  </vl-map>
  <script>
    document.querySelector('#bind-map-search').bindMap(document.querySelector('#map'));
  </script>
`;
