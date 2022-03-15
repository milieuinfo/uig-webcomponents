import { html } from 'lit-html';
import '../info-tile';
import { docsIntro, CATEGORIES, TYPES } from '../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-info-tile',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['info-tile'],
          root: 'info-tile',
          intro: 'Use the info tile in informative and interactive dashboards.',
        }),
      },
    },
  },
  args: {
    autoOpen: false,
    toggleable: false,
    titleSlotText: 'Broos Deprez',
    subtitleSlotText: 'Uw zoon (19.05.2005)',
    contentSlotText: 'De studietoelage voor Broos Deprez werd toegekend.',
  },
  argTypes: {
    autoOpen: {
      name: 'data-vl-auto-open',
      description: 'Used to open the info tile immediately at rendering.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: TYPES.BOOLEAN,
        defaultValue: { summary: false },
      },
    },
    toggleable: {
      name: 'data-vl-toggleable',
      description: 'Used to make the info tile toggleable.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: TYPES.BOOLEAN,
        defaultValue: { summary: false },
      },
    },
    titleSlotText: {
      name: 'title',
      description: 'Changes title of the info tile.',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    subtitleSlotText: {
      name: 'subtitle',
      description: 'Changes the subtitle of the info tile.',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    contentSlotText: {
      name: 'content',
      description: 'Changes the content of the info tile.',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
  },
};

export const Default = ({
  toggleable,
  autoOpen,
  titleSlotText,
  subtitleSlotText,
  contentSlotText,
}) => html`<vl-info-tile ?data-vl-toggleable=${toggleable} ?data-vl-auto-open=${autoOpen}
  ><span slot="title">${titleSlotText}</span>
  <span slot="subtitle">${subtitleSlotText}</span>
  <div slot="content">${contentSlotText}</div>
</vl-info-tile>`;
