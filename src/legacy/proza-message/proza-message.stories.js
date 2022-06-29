import { html } from 'lit-html';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import linkStyles from '../../components/link/styles.scss';
import '../proza-message';

export default {
  title: 'legacy/vl-proza-message',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'proza-message',
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
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlProzaMessage.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span>
</a>`;
