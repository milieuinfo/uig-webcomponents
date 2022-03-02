import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-408-message',
  parameters: parameters('408'),
};

export const Default = () => html`<vl-http-408-message></vl-http-408-message>`;
