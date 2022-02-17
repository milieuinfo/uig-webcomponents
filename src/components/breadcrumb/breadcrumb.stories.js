import { html } from 'lit-html';
import { docsIntro, wrapWidth } from '../../../.storybook/utils.js';
import '.';

export default {
  title: 'custom-elements/vl-breadcrumb',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'breadcrumb',
          stylesheets: ['breadcrumb'],
          intro:
            'Use breadcrumbs to show the location of the current page within a navigational hierarchy. Breadcrumbs get arrow separators automatically via CSS.',
        }),
      },
    },
  },
};

export const Default = () => html`<div style="max-width: ${wrapWidth}">
  <vl-breadcrumb>
    <vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
  </vl-breadcrumb>
</div>`;
