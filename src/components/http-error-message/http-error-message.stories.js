import { html } from 'lit-html';
import { stylesheet } from '../../../.storybook/utils';
import { parameters, args, argTypes } from './config';
import './index';
import styles from './styles.scss';

export default {
  title: 'custom-elements/vl-http-error-message',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: parameters(),
  args,
  argTypes,
};

export const Custom = ({ title, image, alt, textSlotText, actionsSlotText }) => html`
  <vl-http-error-message data-vl-title="${title}" data-vl-image="${image}" data-vl-image-alt="${alt}">
    <p slot="text">${textSlotText}</p>
    <div slot="actions">
      <a is="vl-link-button" href="#">${actionsSlotText}</a>
    </div>
  </vl-http-error-message>
`;

Custom.args = {
  title: 'Niets gevonden hiervoor.',
  image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
  alt: 'Niets gevonden',
  textSlotText: 'Sorry, er liep iets onverwachts mis.',
  actionsSlotText: 'Opnieuw opstarten',
};
