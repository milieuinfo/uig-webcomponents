import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-411-message',
  parameters: parameters('411'),
};

export const Default = () => html`<vl-http-411-message></vl-http-411-message>`;
