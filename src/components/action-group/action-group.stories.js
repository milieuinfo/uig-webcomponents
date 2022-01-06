import { html } from 'lit-html';
import actionGroupStyles from './styles.scss';
import '../action-group';
import '../button';
import buttonStyles from '../button/styles.scss';
import '../link';
import linkStyles from '../button/styles.scss';
import '../icon';
import { stylesheet, docsIntro, CATEGORIES } from '../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-action-group',
  decorators: [(story) => html`${stylesheet(`${actionGroupStyles}${buttonStyles}${linkStyles}`)}${story()}`],
  args: {
    align: '',
    spaceBetween: false,
    bordered: false,
    collapseL: false,
    collapseM: false,
    collapseS: false,
    collapseXs: false,
  },
  argTypes: {
    align: {
      name: 'data-vl-align',
      type: {
        summary: 'string',
      },
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      table: {
        category: CATEGORIES.ATTRIBUTES,
      },
      description: 'Sets the alignment of the action group',
    },
    spaceBetween: {
      name: 'data-vl-space-between',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      type: { summary: 'boolean' },
      description: 'Sets an equal space between its children.',
    },
    bordered: {
      name: 'data-vl-bordered',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      type: { summary: 'boolean' },
      control: {
        disable: true,
      },
      description: 'Adds a line between each link in the action group.',
    },
    collapseL: {
      name: 'data-vl-collapse-l',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      type: { summary: 'boolean' },
      description:
        'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseM: {
      name: 'data-vl-collapse-m',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      type: { summary: 'boolean' },
      description:
        'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseS: {
      name: 'data-vl-collapse-s',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      type: { summary: 'boolean' },
      description:
        'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseXs: {
      name: 'data-vl-collapse-xs',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
      type: { summary: 'boolean' },
      description:
        'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['action-group'],
          root: 'action-group',
          intro:
            'Display several buttons or links consecutively. The group ensures that the buttons or links are aligned correctly.',
        }),
      },
    },
  },
};

export const Default = ({ align, spaceBetween, bordered, collapseL, collapseM, collapseS, collapseXs }) => html`<div
  is="vl-action-group"
  data-vl-align=${align}
  ?data-vl-space-between=${spaceBetween}
  ?data-vl-bordered=${bordered}
  ?data-vl-collapse-l=${collapseL}
  ?data-vl-collapse-m=${collapseM}
  ?data-vl-collapse-s=${collapseS}
  ?data-vl-collapse-xs=${collapseXs}
>
  <button is="vl-button">Aanvraag starten</button>
  <button is="vl-button" data-vl-secondary>Annuleren</button>
</div>`;

export const WithLinks = ({ align, spaceBetween, bordered, collapseL, collapseM, collapseS, collapseXs }) => html`<div
  is="vl-action-group"
  data-vl-align=${align}
  ?data-vl-space-between=${spaceBetween}
  ?data-vl-bordered=${bordered}
  ?data-vl-collapse-l=${collapseL}
  ?data-vl-collapse-m=${collapseM}
  ?data-vl-collapse-s=${collapseS}
  ?data-vl-collapse-xs=${collapseXs}
>
  <a href="#" is="vl-link">
    <span is="vl-icon" data-vl-icon="bell" data-vl-before></span>
    Notificaties
  </a>
  <a href="#" is="vl-link">
    <span is="vl-icon" data-vl-icon="graduate" data-vl-before></span>
    Opleidingen
  </a>
  <a href="#" is="vl-link">
    <span is="vl-icon" data-vl-icon="pin" data-vl-before></span>
    Locaties
  </a>
</div>`;

WithLinks.argTypes = { bordered: { control: { disable: false } } };
