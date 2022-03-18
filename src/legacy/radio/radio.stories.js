import { html } from 'lit-html';
import '.';
import { docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'legacy-elements/vl-radio',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'radio',
          intro:
            'A radio button allows a user to select a single option from a list. Avoid preselecting a radio button because it is important for the user to make a conscious selection.',
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
  href="https://webcomponenten.omgeving.vlaanderen.be/demo/vl-radio.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
