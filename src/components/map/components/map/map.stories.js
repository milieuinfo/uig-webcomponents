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

const getDrawPointActionElement = () => document.getElementById('draw-point-action');
const getDrawPointToggleButton = () => document.getElementById('draw-point-toggle-button');

const getDrawLineActionElement = () => document.getElementById('draw-line-action');
const getDrawLineToggleButton = () => document.getElementById('draw-line-toggle-button');

const getDrawPolygonActionElement = () => document.getElementById('draw-polygon-action');
const getDrawPolygonToggleButton = () => document.getElementById('draw-polygon-toggle-button');

const getModifyActionElement = () => document.getElementById('modify-action');
const getModifyToggleButton = () => document.getElementById('modify-toggle-button');

const getDeleteActionElement = () => document.getElementById('delete-action');
const getDeleteToggleButton = () => document.getElementById('delete-toggle-button');

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

export const KitchenSink = ({ allowFullscreen, disableEscape, disableRotation, disableMousewheelZoom }) => {
  const handleActionActiveChange = ({ detail: { changedAction, active } }) => {
    // Activate/deactivate external controls when an action changes its state
    getDrawPointToggleButton().active = changedAction.action === getDrawPointActionElement().action && active;
    getDrawLineToggleButton().active = changedAction.action === getDrawLineActionElement().action && active;
    getDrawPolygonToggleButton().active = changedAction.action === getDrawPolygonActionElement().action && active;
    getModifyToggleButton().active = changedAction.action === getModifyActionElement().action && active;
    getDeleteToggleButton().active = changedAction.action === getDeleteActionElement().action && active;
  };

  const handleLayerVisibleChange = ({ detail: { changedLayer, visible } }) => {
    // Enable/disable external controls when an action changes its state
    const layerActions = changedLayer.getElementsByClassName('action');

    for (const layerAction of layerActions) {
      switch (layerAction) {
        case getDrawPointActionElement():
          getDrawPointToggleButton().disabled = !visible;
          break;
        case getDrawLineActionElement():
          getDrawLineToggleButton().disabled = !visible;
          break;
        case getDrawPolygonActionElement():
          getDrawPolygonToggleButton.disabled = !visible;
          break;
        case getModifyActionElement():
          getModifyToggleButton.disabled = !visible;
          break;
        case getDeleteActionElement():
          getDeleteToggleButton.disabled = !visible;
          break;
        default:
          break;
      }
    }
  };

  return html`
    <vl-map
      id="map-kitchen-sink"
      ?data-vl-allow-fullscreen=${allowFullscreen}
      ?data-vl-disable-escape-key=${disableEscape}
      ?data-vl-disable-rotation=${disableRotation}
      ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
      @action-active-changed=${(e) => handleActionActiveChange(e)}
      @layer-visible-changes=${(e) => handleLayerVisibleChange(e)}
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
                      getModifyActionElement().active = !getModifyActionElement().active;
                    }}
                  >
                    Modify
                  </vl-toggle-button>
                  <vl-toggle-button
                    id="delete-toggle-button"
                    @click=${() => {
                      getDeleteActionElement().active = !getDeleteActionElement().active;
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
                    getDrawPointActionElement().active = !getDrawPointActionElement().active;
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
                    getDrawLineActionElement().active = !getDrawLineActionElement().active;
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
                    getDrawPolygonActionElement().active = !getDrawPolygonActionElement().active;
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

        <vl-map-draw-point-action id="draw-point-action" class="action"></vl-map-draw-point-action>
        <vl-map-draw-line-action id="draw-line-action" class="action"></vl-map-draw-line-action>
        <vl-map-draw-polygon-action id="draw-polygon-action" class="action"></vl-map-draw-polygon-action>

        <vl-map-modify-action id="modify-action" class="action"></vl-map-modify-action>
        <vl-map-delete-action id="delete-action" class="action"></vl-map-delete-action>
        <vl-map-select-action id="select-action" class="action" data-vl-default-active></vl-map-select-action>
      </vl-map-features-layer>

      <vl-map-features-layer data-vl-name="Measurements">
        <vl-map-measure-action id="measure-action" class="action"></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
