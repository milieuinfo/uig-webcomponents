import { html } from 'lit-html';
import '../../../map';
import '../../../button';
import '../../../../legacy/tabs';
import { action } from '@storybook/addon-actions';
import buttonStyles from '../../../button/styles.scss';
import tabsStyles from '../../../../legacy/tabs/styles.scss';
import titleStyles from '../../../titles/styles.scss';
import {
  stylesheet,
  docsIntro,
  TYPES,
  CATEGORIES,
  getLastElementByClassName,
} from '../../../../../.storybook/utils.js';
import { EVENT } from '../../enums';

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
    activeActionChange: action(EVENT.ACTIVE_ACTION_CHANGED),
    layerVisibleChange: action(EVENT.LAYER_VISIBLE_CHANGED),
  },
  argTypes: {
    allowFullscreen: {
      name: 'data-vl-allow-fullscreen',
      type: { summary: TYPES.BOOLEAN },
      description:
        'Attribute is used to allow the user to visualize the map in full screen. This functionality cannot be used on mobile.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableEscape: {
      name: 'data-vl-disable-escape-key',
      type: { summary: TYPES.BOOLEAN },
      description: 'Attribute is used to ensure that the escape key cannot be used.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableRotation: {
      name: 'data-vl-disable-rotation',
      type: { summary: TYPES.BOOLEAN },
      description: 'Attribute is used to ensure that it is not possible to rotate the map.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    disableMousewheelZoom: {
      name: 'data-vl-disable-mouse-wheel-zoom',
      type: { summary: TYPES.BOOLEAN },
      description: 'Attribute is used to ensure that it is not possible to zoom the map with the mouse wheel.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      control: { disable: true },
    },
    activeActionChange: {
      name: EVENT.ACTIVE_ACTION_CHANGED,
      description: 'Event fired when the current active action changes.',
      table: { category: CATEGORIES.EVENTS },
    },
    layerVisibleChange: {
      name: EVENT.LAYER_VISIBLE_CHANGED,
      description: "Event fired when a layer's visible state changes.",
      table: { category: CATEGORIES.EVENTS },
    },
  },
};

const Template = ({ allowFullscreen, disableEscape, disableRotation, disableMousewheelZoom }) => html`
  <vl-map
    ?data-vl-allow-fullscreen=${allowFullscreen}
    ?data-vl-disable-escape-key=${disableEscape}
    ?data-vl-disable-rotation=${disableRotation}
    ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
    data-vl-zoomInTooltip="Zoom in"
    data-vl-zoomOutTooltip="Zoom uit"
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
const toggleItemStyling = 'display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;';

const getActionElement = (name) => getLastElementByClassName(`${name}-action`);
const getToggleButton = (name) => getLastElementByClassName(`${name}-toggle-button`);

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

export const Playground = (props) => {
  const actionIdentifiers = ['draw-point', 'draw-line', 'draw-polygon', 'modify', 'delete'];

  const handleActiveActionChange = ({ detail: { previous, current } }) => {
    // Activate/deactivate external controls when an action changes its state
    actionIdentifiers.forEach((actionIdentifier) => {
      if (previous === getActionElement(actionIdentifier)) {
        getToggleButton(actionIdentifier).active = false;
      } else if (current === getActionElement(actionIdentifier)) {
        getToggleButton(actionIdentifier).active = true;
      }
    });
  };

  const handleLayerVisibleChange = ({ detail: { layer, visible } }) => {
    // Enable/disable external controls when an action changes its state
    const layerActions = layer.getElementsByClassName('action');

    for (const layerAction of layerActions) {
      actionIdentifiers.forEach((actionIdentifier) => {
        if (layerAction === getActionElement(actionIdentifier)) {
          getToggleButton(actionIdentifier).disabled = !visible;
        }
      });
    }
  };

  return html`
    <vl-map
      ?data-vl-allow-fullscreen=${props.allowFullscreen}
      ?data-vl-disable-escape-key=${props.disableEscape}
      ?data-vl-disable-rotation=${props.disableRotation}
      ?data-vl-disable-mouse-wheel-zoom=${props.disableMousewheelZoom}
      @vl-active-action-changed=${(event) => {
        props.activeActionChange({ previous: event.detail.previous });
        props.activeActionChange({ current: event.detail.current });
        handleActiveActionChange(event);
      }}
      @vl-layer-visible-changed=${(event) => {
        props.layerVisibleChange(event.detail);
        handleLayerVisibleChange(event);
      }}
    >
      <vl-map-action-controls>
        <vl-map-measure-control></vl-map-measure-control>
      </vl-map-action-controls>

      <vl-map-side-sheet>
        <h6 is="vl-h6">Layers</h6>

        <vl-map-layer-switcher> </vl-map-layer-switcher>

        <hr />

        <h6 is="vl-h6">Measure</h6>

        <div>
          <button
            is="vl-button"
            @click=${() => {
              getActionElement('measure').active = true;
            }}
          >
            Start
          </button>
          <button
            is="vl-button"
            @click=${() => {
              getActionElement('measure').active = false;
            }}
          >
            Stop
          </button>
        </div>

        <hr />

        <div style=${toggleGroupStyling}>
          <h6 is="vl-h6">Shapes</h6>

          <div style="margin-bottom: 2rem;">
            <vl-toggle-button
              class="modify-toggle-button"
              @click=${() => {
                getActionElement('modify').active = !getToggleButton('modify').active;
              }}
            >
              Modify
            </vl-toggle-button>
            <vl-toggle-button
              class="delete-toggle-button"
              @click=${() => {
                getActionElement('delete').active = !getToggleButton('delete').active;
              }}
            >
              Delete
            </vl-toggle-button>
          </div>

          <div style=${toggleItemStyling}>
            <vl-toggle-button
              class="draw-point-toggle-button"
              data-vl-icon="pencil"
              data-vl-text-hidden
              @click=${() => {
                getActionElement('draw-point').active = !getToggleButton('draw-point').active;
              }}
            >
              Toggle draw point action
            </vl-toggle-button>
            <p>Draw point</p>
          </div>

          <div style=${toggleItemStyling}>
            <vl-toggle-button
              class="draw-line-toggle-button"
              data-vl-icon="pencil"
              data-vl-text-hidden
              @click=${() => {
                getActionElement('draw-line').active = !getToggleButton('draw-line').active;
              }}
            >
              Toggle draw line action
            </vl-toggle-button>
            <p>Draw line</p>
          </div>

          <div style=${toggleItemStyling}>
            <vl-toggle-button
              class="draw-polygon-toggle-button"
              data-vl-icon="pencil"
              data-vl-text-hidden
              @click=${() => {
                getActionElement('draw-polygon').active = !getToggleButton('draw-polygon').active;
              }}
            >
              Toggle draw polygon action
            </vl-toggle-button>
            <p>Draw Polygon</p>
          </div>
        </div>
      </vl-map-side-sheet>

      <vl-map-overview-map></vl-map-overview-map>

      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

      <vl-map-features-layer data-vl-name="Shapes" .features=${features}>
        <vl-map-layer-style data-vl-border-color=${purple} data-vl-color=${purple}></vl-map-layer-style>
        <vl-map-layer-circle-style data-vl-border-color=${purple} data-vl-color=${purple}></vl-map-layer-circle-style>

        <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
        <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
        <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

        <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
        <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
        <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>
      </vl-map-features-layer>

      <vl-map-features-layer data-vl-name="Measurements">
        <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
