import { html } from 'lit-html';
import '.';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit-html/directives/if-defined';
import { docsIntro, TYPES, CATEGORIES } from '../../../.storybook/utils.js';
import { ICON_PLACEMENT } from './enums';
import { sharedButtonArgs, sharedButtonArgTypes } from '../button/config';

export default {
  title: 'custom-elements/vl-toggle-button',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'toggle-button',
          intro: 'The toggle button is a button that can have an active and inactive state.',
        }),
      },
    },
  },
  args: {
    ...sharedButtonArgs,
    icon: undefined,
    iconPlacement: undefined,
    content: 'Toggle button',
    textHidden: false,
    disabled: false,
    click: action('click'),
    change: action('change'),
  },
  argTypes: {
    active: {
      name: 'active',
      description: 'Controls the active state of the toggle button.',
      table: {
        type: {
          summary: TYPES.BOOLEAN,
        },
        category: CATEGORIES.PROPERTIES,
      },
      control: { disabled: true },
    },
    icon: {
      name: 'data-vl-icon',
      type: { name: TYPES.STRING, required: false },
      description: 'Sets the icon of the toggle button.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    iconPlacement: {
      name: 'data-vl-icon-placement',
      description: 'Determines where the icon should be rendered before or after the text.',
      table: {
        type: { summary: `${ICON_PLACEMENT.BEFORE} | ${ICON_PLACEMENT.AFTER}` },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: ICON_PLACEMENT.AFTER },
      },
      control: {
        type: 'select',
        options: [ICON_PLACEMENT.BEFORE, ICON_PLACEMENT.AFTER],
      },
    },
    textHidden: {
      name: 'data-vl-text-hidden',
      description: 'Determines whether the toggle button text is shown.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    change: {
      name: 'change',
      description: 'Custom event that is triggered when the active state of the toggle button changes.',
      table: { category: CATEGORIES.EVENTS },
    },
    click: {
      name: 'click',
      description: 'Event fired on click of the toggle button.',
      table: { category: CATEGORIES.EVENTS },
    },
    ...sharedButtonArgTypes,
    error: {
      ...sharedButtonArgTypes.error,
      description:
        'Used to emphasize the importance or consequences of an action when the toggle button is in an active state.',
    },
  },
};

export const Default = (props) =>
  html`<vl-toggle-button
    data-vl-icon=${ifDefined(props.icon)}
    data-vl-icon-placement=${ifDefined(props.iconPlacement)}
    ?data-vl-text-hidden=${props.textHidden}
    ?data-vl-error=${props.error}
    ?data-vl-block=${props.block}
    ?data-vl-large=${props.large}
    ?data-vl-wide=${props.wide}
    ?data-vl-narrow=${props.narrow}
    ?data-vl-loading=${props.loading}
    ?disabled=${props.disabled}
    @change=${(event) => props.change(event.detail)}
    @click=${(event) => {
      props.click(event);
    }}
    >${props.content}
  </vl-toggle-button>`;

export const WithIcon = (props) =>
  html`<vl-toggle-button
    data-vl-icon=${ifDefined(props.icon)}
    data-vl-icon-placement=${ifDefined(props.iconPlacement)}
    ?data-vl-text-hidden=${props.textHidden}
    ?data-vl-error=${props.error}
    ?data-vl-block=${props.block}
    ?data-vl-large=${props.large}
    ?data-vl-wide=${props.wide}
    ?data-vl-narrow=${props.narrow}
    ?data-vl-loading=${props.loading}
    ?disabled=${props.disabled}
    @change=${(event) => props.change(event.detail)}
    @click=${(event) => {
      props.click(event);
    }}
    >${props.content}
  </vl-toggle-button>`;

WithIcon.args = { icon: 'pencil', iconPlacement: ICON_PLACEMENT.AFTER };

// Get last toggle button, because storybook can render multiple stories
const getToggleButton = () => {
  const [lastItem] = [...document.querySelectorAll('vl-toggle-button')].slice(-1);
  return lastItem;
};

export const Controlled = (props) => html`<vl-toggle-button
  .active=${props.active}
  data-vl-icon=${ifDefined(props.icon)}
  data-vl-icon-placement=${ifDefined(props.iconPlacement)}
  ?data-vl-text-hidden=${props.textHidden}
  ?data-vl-error=${props.error}
  ?data-vl-block=${props.block}
  ?data-vl-large=${props.large}
  ?data-vl-wide=${props.wide}
  ?data-vl-narrow=${props.narrow}
  ?data-vl-loading=${props.loading}
  ?disabled=${props.disabled}
  @change=${(event) => props.change(event.detail)}
  @click=${(event) => {
    props.click(event);
    const toggleButton = getToggleButton();
    toggleButton.active = !toggleButton.active;
  }}
  >${props.content}
</vl-toggle-button>`;

Controlled.args = {
  active: false,
};

Controlled.argTypes = { active: { control: { disabled: false } } };
