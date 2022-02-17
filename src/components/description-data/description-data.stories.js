import { html } from 'lit-html';
import { docsIntro } from '../../../.storybook/utils.js';
import '.';

export default {
  title: 'custom-elements/vl-description-data',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'description-data',
          intro:
            'Use the description data component to give more information about the content on the page, for example about a contact person, an entity or a publication.',
        }),
      },
    },
  },
};

export const Default = () =>
  html`<vl-description-data>
    <vl-description-data-item data-vl-label="Label via att" data-vl-value="Value via att"></vl-description-data-item>
    <vl-description-data-item data-vl-value="Value via att">
      <span slot="label">Label via slot</span>
    </vl-description-data-item>
    <vl-description-data-item data-vl-label="Publicatietype">
      <span slot="value">Value via slot</span>
    </vl-description-data-item>
    <vl-description-data-item>
      <span slot="value">Value via slot</span>
      <span slot="label">Label via slot</span>
    </vl-description-data-item>
  </vl-description-data>`;
