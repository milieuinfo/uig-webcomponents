import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-400-message',
  parameters: parameters('400'),
};

export const Default = () => html`<vl-http-400-message></vl-http-400-message>`;
