import { html } from 'lit-html';
import '.';
import { docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'legacy-elements/vl-radio',
  parameters: {
    docs: {
      description: {
        component: docsIntro(
          {
            root: 'radio',
            intro:
              'A radio button allows a user to select a single option from a list. Avoid preselecting a radio button because it is important for the user to make a conscious selection.',
          },
          true,
        ),
      },
    },
  },
};

export const Default = () =>
  html`<p>
    Documentatie:
    <a href="https://webcomponenten.omgeving.vlaanderen.be/demo/vl-radio.html"
      >https://webcomponenten.omgeving.vlaanderen.be/demo/vl-radio.html</a
    >
  </p>`;
