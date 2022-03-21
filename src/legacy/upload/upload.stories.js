import { html } from 'lit-html';
import { docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'legacy/vl-upload',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'upload',
          isLegacy: true,
        }),
      },
    },
  },
};

export const Default = () => html`<a
  is="vl-link"
  target="_blank"
  data-vl-inline
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlUpload.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
