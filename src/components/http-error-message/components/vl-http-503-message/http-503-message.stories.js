import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-503-message',
  parameters: parameters('503'),
};

export const Default = () => html`<vl-http-503-message></vl-http-503-message>`;
