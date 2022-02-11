import { html } from 'lit-html';
import { stylesheet } from '../../../.storybook/utils.js';
import '../button';
import buttonStyles from '../button/styles.scss';
import './new';

export default {
  title: 'custom-elements/vl-modal',
  decorators: [(story) => html`${stylesheet(buttonStyles)}${story()}`],
  args: { open: true },
};

export const Default = ({ open }) => html`<new-modal data-vl-title="Title test" .open=${open}>
  <span slot="content">Content test!</span>
  <button is="vl-button" slot="button">Start aanvraag</button>
</new-modal>`;
