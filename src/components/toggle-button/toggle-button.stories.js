import { html } from 'lit-html';
import '.';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit-html/directives/if-defined';
import { docsIntro, TYPES, CATEGORIES } from '../../../.storybook/utils.js';
import { ICON_PLACEMENT } from './enums';

export default {
  title: 'custom-elements/vl-toggle-button',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'toggle-button',
          intro: '',
        }),
      },
    },
  },
  args: {
    icon: 'pencil',
    iconPlacement: undefined,
    text: 'Toggle button',
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
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: ICON_PLACEMENT.AFTER },
      },
      control: {
        type: 'select',
        options: [ICON_PLACEMENT.BEFORE, ICON_PLACEMENT.AFTER],
      },
    },
    text: {
      name: 'data-vl-text',
      description: 'Sets the text of the toggle button.',
      table: {
        type: { summary: TYPES.STRING },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
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
    disabled: {
      name: 'data-vl-disabled',
      description: 'Determines whether the toggle button is disabled or not.',
      table: {
        type: { summary: TYPES.BOOLEAN },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    change: {
      name: 'change',
      description: 'Custom event that is triggered when the active state of the toggle button changes',
      table: { category: CATEGORIES.EVENTS },
    },
    click: {
      name: 'click',
      description: 'Custom event fired on click of the toggle button.',
      table: { category: CATEGORIES.EVENTS },
    },
  },
};

export const Default = ({ icon, iconPlacement, text, textHidden, disabled, change, click }) =>
  html`<vl-toggle-button
    data-vl-icon=${ifDefined(icon)}
    data-vl-icon-placement=${ifDefined(iconPlacement)}
    data-vl-text=${text}
    ?data-vl-text-hidden=${textHidden}
    ?data-vl-disabled=${disabled}
    @change=${(event) => change(event.detail)}
    @click=${() => {
      click();
    }}
  >
  </vl-toggle-button>`;

// Get last toggle button, because storybook can render multiple stories
const getToggleButton = () => {
  const [lastItem] = [...document.querySelectorAll('vl-toggle-button')].slice(-1);
  return lastItem;
};

export const Controlled = ({
  active,
  icon,
  iconPlacement,
  text,
  textHidden,
  disabled,
  change,
  click,
}) => html`<vl-toggle-button
  .active=${active}
  data-vl-icon=${ifDefined(icon)}
  data-vl-icon-placement=${ifDefined(iconPlacement)}
  data-vl-text=${text}
  ?data-vl-text-hidden=${textHidden}
  ?data-vl-disabled=${disabled}
  @change=${(event) => change(event.detail)}
  @click=${() => {
    click();
    getToggleButton().active = !getToggleButton().active;
  }}
>
</vl-toggle-button>`;

Controlled.args = {
  active: false,
};

Controlled.argTypes = { active: { control: { disabled: false } } };
