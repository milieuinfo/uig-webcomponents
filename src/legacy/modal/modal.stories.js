import { html } from 'lit-html';
import '../modal';
import '../../components/link';
import linkStyles from '../../components/link/styles.scss';
import { docsIntro, stylesheet } from '../../../.storybook/utils.js';

export default {
  title: 'legacy/vl-modal',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  args: { toggle: false },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'modal',
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
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlModal.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;

export const Demo = ({ toggle }) => html`<button id="button-open-modal" is="vl-button" data-vl-modal-open="modal">
    Open
  </button>
  <vl-modal ?data-vl-not-cancellable=${toggle} id="modal" data-vl-title="Modal">
    <span slot="content">Lorem ipsum dolor sit amet.</span>
    <button is="vl-button" slot="button">Start aanvraag</button>
    <button is="vl-button" slot="button">Start aanvraag 2</button>
  </vl-modal>`;

export const Demo2 = ({ toggle }) => html`<button id="button-open-modal" is="vl-button" data-vl-modal-open="modal">
    Open
  </button>
  <vl-modal ?data-vl-not-cancellable=${toggle} id="modal" data-vl-title="Modal">
    <span slot="content">Lorem ipsum dolor sit amet.</span>
    <button is="vl-button-link" slot="button">
      <span is="vl-icon" data-vl-icon="cross" before data-vl-modal-close></span>
      Andere actie
    </button>
  </vl-modal>`;
