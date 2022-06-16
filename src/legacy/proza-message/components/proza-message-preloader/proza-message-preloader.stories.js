import { html } from 'lit-html';
import { stylesheet, docsIntro } from '../../../../../.storybook/utils.js';
import linkStyles from '../../../../components/link/styles.scss';

export default {
  title: 'legacy/vl-proza-message/vl-proza-message-preloader',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'proza-message-preloader',
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
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlProzaMessagePreloader.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
