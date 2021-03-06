import { html } from 'lit-html';
import { stylesheet, docsIntro } from '../../../../../.storybook/utils.js';
import linkStyles from '../../../../components/link/styles.scss';
import '../index.js';

export default {
  title: 'legacy/vl-proza-message',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'proza-message/src',
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
</a>
  <p>
    Disclaimer: the wysiwyg functionality of this component might not work properly at this time. 
  </p>`;
