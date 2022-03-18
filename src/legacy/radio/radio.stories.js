import { html } from 'lit-html';
import '.';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import linkStyles from '../../components/link/styles.scss';

export default {
  title: 'legacy/vl-radio',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
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
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlRadio.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
