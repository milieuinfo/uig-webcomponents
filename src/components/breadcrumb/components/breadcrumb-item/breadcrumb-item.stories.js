import { html } from 'lit-html';
import { docsIntro, wrapWidth, TYPES } from '../../../../../.storybook/utils.js';
import '../..';

export default {
  title: 'custom-elements/vl-breadcrumb/vl-breadcrumb-item',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'breadcrumb',
          stylesheets: ['breadcrumb'],
          intro: 'Use breadcrumb items to add extra navigation steps to a breadcrumb.',
        }),
      },
    },
  },
  args: {
    href: '',
  },
  argTypes: {
    href: {
      name: 'data-vl-href',
      description: 'Changes the url to which the browser will navigate when clicking the breadcrumb item.',
      type: { summary: TYPES.STRING },
      defaultValue: { summary: '#' },
    },
  },
};

export const Default = ({ href }) =>
  html`<div style="max-width: ${wrapWidth}">
    <vl-breadcrumb-item data-vl-href=${href || '#'}>Regelgeving</vl-breadcrumb-item>
  </div>`;
