import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { stylesheet } from '../../../.storybook/utils';
import buttonStyles from '../button/styles.scss';
import '../modal/new';
import '../modal';
import '../action-group';
import '../button';

export default {
  title: 'custom-elements/vl-modal',
  args: {
    open: true,
    title: 'Title test',
    closable: false,
    onClose: action('vl-close'),
    onClosed: action('vl-closed'),
  },
  decorators: [(story) => html`${stylesheet(buttonStyles)}${story()}`],
};

export const Old = () => html`<button id="button-open-modal" is="vl-button" data-vl-modal-open="modal">Open</button>
  <vl-modal id="modal" data-vl-not-auto-closable data-vl-title="Modal" data-vl-not-cancellable>
    <span slot="content">Lorem ipsum dolor sit amet.</span>
    <button is="vl-button" @click=${() => console.log('click')} slot="button">Alle cookies aanvaarden</button>
    <button is="vl-button" data-vl-secondary slot="button">Enkel noodzakelijke cookies aanvaarden</button>
  </vl-modal>`;

export const Default = ({ open, title, closable, onClose, onClosed }) =>
  html`<p>text</p>
    <new-modal
      data-vl-title=${title}
      .open=${open}
      .closable=${closable}
      @vl-close=${(event) => onClose(event.detail)}
      @vl-closed=${(event) => onClosed(event)}
    >
      <p>I am a modal</p>
      <div slot="footer">
        <button is="vl-button">Close</button>
      </div>
    </new-modal> `;
