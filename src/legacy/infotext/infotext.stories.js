import { html } from 'lit-html';
import { stylesheet, docsIntro } from '../../../.storybook/utils';
import linkStyles from '../../components/link/styles.scss';

export default {
  title: 'legacy/vl-infotext',
  decorators: [(story) => html`${stylesheet(linkStyles)} ${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'intofext',
          stylesheets: ['infotext'],
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
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlInfotext.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
