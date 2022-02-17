import { html } from 'lit-html';
import { docsIntro, TYPES } from '../../../../../.storybook/utils.js';
import '../..';

export default {
  title: 'custom-elements/vl-breadcrumb/vl-breadcrumb-item',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'breadcrumb',
          intro: 'Use breadcrumb items to add navigation steps to a breadcrumb.',
        }),
      },
    },
  },
  args: {
    href: '#',
  },
  argTypes: {
    href: {
      name: 'data-vl-href',
      description: 'Changes the url to which the browser will navigate when clicking the breadcrumb item.',
      type: { summary: TYPES.STRING },
    },
  },
};

export const Default = ({ href }) => html`<vl-breadcrumb-item data-vl-href=${href}>Regelgeving</vl-breadcrumb-item> `;
