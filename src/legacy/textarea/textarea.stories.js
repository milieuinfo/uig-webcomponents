import { html } from 'lit-html';
import { docsIntro, stylesheet } from '../../../.storybook/utils';
import linkStyles from '../../components/link/styles.scss';

export default {
  title: 'legacy/vl-textarea',
  decorators: [(story) => html`${stylesheet(linkStyles)} ${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'textarea',
          stylesheets: ['textarea'],
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
    href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlTextarea.html"
  >
    Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
  ></a>
  <p>
    Disclaimer: data-vl-rich attribute does not work in combination with webpack and thus can not be used at this
    moment.
  </p>`;
