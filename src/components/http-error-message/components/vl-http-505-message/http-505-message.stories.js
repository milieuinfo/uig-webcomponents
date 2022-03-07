import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-505-message',
  parameters: parameters('505'),
};

export const Default = () => html`<vl-http-505-message></vl-http-505-message>`;
