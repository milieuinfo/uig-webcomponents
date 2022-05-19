import { html } from 'lit-html';
import '../../../map';
import '../../../button';
import '../../../../legacy/tabs';
import buttonStyles from '../../../button/styles.scss';
import tabsStyles from '../../../../legacy/tabs/styles.scss';
import titleStyles from '../../../titles/styles.scss';
import { stylesheet, docsIntro, TYPES } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map',
  decorators: [(story) => html`${stylesheet(`${buttonStyles}${tabsStyles}${titleStyles}`)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'De kaart component.',
        }),
      },
    },
  },
  args: {
    allowFullscreen: false,
    disableEscape: false,
    disableRotation: false,
    disableMousewheelZoom: false,
  },
  argTypes: {
    allowFullscreen: {
      name: 'data-vl-allow-fullscreen',
      type: { summary: TYPES.BOOLEAN },
      description:
        'Attribute is used to allow the user to visualize the map in full screen. This functionality cannot be used on mobile.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableEscape: {
      name: 'data-vl-disable-escape-key',
      type: { summary: TYPES.BOOLEAN },
      description: 'Attribute is used to ensure that the escape key cannot be used.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableRotation: {
      name: 'data-vl-disable-rotation',
      type: { summary: TYPES.BOOLEAN },
      description: 'Attribute is used to ensure that it is not possible to rotate the map.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableMousewheelZoom: {
      name: 'data-vl-disable-mouse-wheel-zoom',
      type: { summary: TYPES.BOOLEAN },
      description: 'Attribute is used to ensure that it is not possible to zoom the map with the mouse wheel.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
  },
};

const Template = ({ allowFullscreen, disableEscape, disableRotation, disableMousewheelZoom }) => html`
  <vl-map
    ?data-vl-allow-fullscreen=${allowFullscreen}
    ?data-vl-disable-escape-key=${disableEscape}
    ?data-vl-disable-rotation=${disableRotation}
    ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
  >
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
  </vl-map>
`;

export const Default = Template.bind({});
export const AllowFullscreen = Template.bind({});
AllowFullscreen.args = { allowFullscreen: true };
export const DisableMousewheelZoom = Template.bind({});
DisableMousewheelZoom.args = { disableMousewheelZoom: true };

const purple = 'rgba(102, 51, 153, 0.6)';
const toggleGroupStyling = 'width: 100%;';
const toggleItemStyling = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;';

export const KitchenSink = ({ allowFullscreen, disableEscape, disableRotation, disableMousewheelZoom }) => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 1,
        geometry: { type: 'Point', coordinates: [210000, 190000] },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: {
          type: 'LineString',
          coordinates: [
            [170000, 170000],
            [150000, 206000],
          ],
        },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [44000, 171000],
              [100000, 171000],
              [100000, 205000],
              [44000, 205000],
              [44000, 171000],
            ],
          ],
        },
      },
    ],
  };

  return html`
    <vl-map
      id="map-kitchen-sink"
      ?data-vl-allow-fullscreen=${allowFullscreen}
      ?data-vl-disable-escape-key=${disableEscape}
      ?data-vl-disable-rotation=${disableRotation}
      ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
    >
      <vl-map-action-controls>
        <vl-map-measure-control></vl-map-measure-control>
      </vl-map-action-controls>

      <vl-map-side-sheet>
        <vl-tabs id="tabs">
          <vl-tabs-pane data-vl-id="flow" data-vl-title="Flow">
            <div style=${toggleItemStyling}>
              <h6 is="vl-h6">Measure</h6>

              <div>
                <button
                  is="vl-button"
                  @click=${() => {
                    document.getElementById('measure-action').active = true;
                  }}
                >
                  Start
                </button>
                <button
                  is="vl-button"
                  @click=${() => {
                    document.getElementById('measure-action').active = false;
                  }}
                >
                  Stop
                </button>
              </div>
            </div>

            <hr />

            <div style=${toggleGroupStyling}>
              <div style=${toggleItemStyling}>
                <h6 is="vl-h6">Shapes</h6>
                <div>
                  <vl-toggle-button
                    id="modify-toggle-button"
                    @click=${() => {
                      const action = document.getElementById('modify-action');
                      action.active = !action.active;
                    }}
                  >
                    Modify
                  </vl-toggle-button>
                  <vl-toggle-button
                    id="delete-toggle-button"
                    @click=${() => {
                      const action = document.getElementById('delete-action');
                      action.active = !action.active;
                    }}
                  >
                    Delete
                  </vl-toggle-button>
                </div>
              </div>

              <div style=${toggleItemStyling}>
                <p>Draw point</p>
                <vl-toggle-button
                  id="draw-point-toggle-button"
                  data-vl-icon="pencil"
                  data-vl-text-hidden
                  @click=${() => {
                    const action = document.getElementById('draw-point-action');
                    action.active = !action.active;
                  }}
                >
                  Toggle draw point action
                </vl-toggle-button>
              </div>

              <div style=${toggleItemStyling}>
                <p>Draw line</p>
                <vl-toggle-button
                  id="draw-line-toggle-button"
                  data-vl-icon="pencil"
                  data-vl-text-hidden
                  @click=${() => {
                    const action = document.getElementById('draw-line-action');
                    action.active = !action.active;
                  }}
                >
                  Toggle draw line action
                </vl-toggle-button>
              </div>

              <div style=${toggleItemStyling}>
                <p>Draw Polygon</p>
                <vl-toggle-button
                  id="draw-polygon-toggle-button"
                  data-vl-icon="pencil"
                  data-vl-text-hidden
                  @click=${() => {
                    const action = document.getElementById('draw-polygon-action');
                    action.active = !action.active;
                  }}
                >
                  Toggle draw polygon action
                </vl-toggle-button>
              </div>
            </div>
          </vl-tabs-pane>

          <vl-tabs-pane data-vl-id="layers" data-vl-title="Layers">
            <vl-map-layer-switcher> </vl-map-layer-switcher>
          </vl-tabs-pane>
        </vl-tabs>
      </vl-map-side-sheet>

      <vl-map-overview-map></vl-map-overview-map>

      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

      <vl-map-features-layer data-vl-name="Shapes" .features=${features}>
        <vl-map-layer-style data-vl-border-color=${purple} data-vl-color=${purple}></vl-map-layer-style>
        <vl-map-layer-circle-style data-vl-border-color=${purple} data-vl-color=${purple}></vl-map-layer-circle-style>

        <vl-map-draw-point-action id="draw-point-action"></vl-map-draw-point-action>
        <vl-map-draw-line-action id="draw-line-action"></vl-map-draw-line-action>
        <vl-map-draw-polygon-action id="draw-polygon-action"></vl-map-draw-polygon-action>

        <vl-map-modify-action id="modify-action"></vl-map-modify-action>
        <vl-map-delete-action id="delete-action"></vl-map-delete-action>
        <vl-map-select-action id="select-action" data-vl-default-active></vl-map-select-action>
      </vl-map-features-layer>

      <vl-map-features-layer data-vl-name="Measurements">
        <vl-map-measure-action id="measure-action"></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>

    <script>
      document.getElementById('map-kitchen-sink').addEventListener('action-active-changed', (e) => {
        const { changedAction, active } = e.detail;

        const drawPointActionElement = document.getElementById('draw-point-action');
        const drawPointToggleButton = document.getElementById('draw-point-toggle-button');
        drawPointToggleButton.active = changedAction === drawPointActionElement.action && active;

        const drawLineActionElement = document.getElementById('draw-line-action');
        const drawLineToggleButton = document.getElementById('draw-line-toggle-button');
        drawLineToggleButton.active = changedAction === drawLineActionElement.action && active;

        const drawPolygonActionElement = document.getElementById('draw-polygon-action');
        const drawPolygonToggleButton = document.getElementById('draw-polygon-toggle-button');
        drawPolygonToggleButton.active = changedAction === drawPolygonActionElement.action && active;

        const modifyActionElement = document.getElementById('modify-action');
        const modifyToggleButton = document.getElementById('modify-toggle-button');
        modifyToggleButton.active = changedAction === modifyActionElement.action && active;

        const deleteActionElement = document.getElementById('delete-action');
        const deleteToggleButton = document.getElementById('delete-toggle-button');
        deleteToggleButton.active = changedAction === deleteActionElement.action && active;
      });
    </script>
  `;
};
