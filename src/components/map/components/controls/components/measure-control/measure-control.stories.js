import { html } from 'lit-html';
import '../../../map';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-controls/vl-measure-control',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Measure control on the map component to activate or deactivate the measure action.',
        }),
      },
    },
  },
  args: { active: undefined },
  argTypes: {
    active: {
      name: 'active',
      description: 'Controls the active state of the measure action.',
      table: {
        type: {
          summary: TYPES.BOOLEAN,
        },
        category: CATEGORIES.PROPERTIES,
      },
      control: { disabled: true },
    },
  },
};

// Get last measure action, because storybook can render multiple stories
const getMeasureAction = () => {
  const [lastItem] = [...document.querySelectorAll('vl-map-measure-action')].slice(-1);
  return lastItem;
};

export const Default = () =>
  // const features = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       id: 1,
  //       geometry: { type: 'Point', coordinates: [210000, 190000] },
  //     },
  //     {
  //       type: 'Feature',
  //       id: 2,
  //       geometry: {
  //         type: 'LineString',
  //         coordinates: [
  //           [170000, 170000],
  //           [150000, 206000],
  //         ],
  //       },
  //     },
  //     {
  //       type: 'Feature',
  //       id: 3,
  //       geometry: {
  //         type: 'Polygon',
  //         coordinates: [
  //           [
  //             [44000, 171000],
  //             [100000, 171000],
  //             [100000, 205000],
  //             [44000, 205000],
  //             [44000, 171000],
  //           ],
  //         ],
  //       },
  //     },
  //   ],
  // };

  html`
    <vl-map id="map">
      <vl-map-action-controls>
        <vl-map-measure-control></vl-map-measure-control>
      </vl-map-action-controls>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer>
        <vl-map-select-action data-vl-default-active></vl-map-select-action>
        <vl-map-measure-action></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>

    <button
      @click=${() => {
        const measureAction = getMeasureAction();
        measureAction.activate();
      }}
    >
      Activate measure action via activate()
    </button>
    <button
      @click=${() => {
        const measureAction = getMeasureAction();
        measureAction.deactivate();
      }}
    >
      Deactivate measure action via deactivate()
    </button>
    <hr />

    <button
      @click=${() => {
        const measureAction = getMeasureAction();
        measureAction.active = true;
      }}
    >
      Activate measure action via active prop
    </button>
    <button
      @click=${() => {
        const measureAction = getMeasureAction();
        measureAction.active = false;
      }}
    >
      Deactivate measure action via active prop
    </button>
    <script></script>
  `;
