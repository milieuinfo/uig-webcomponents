import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-405-message',
  parameters: parameters('405'),
};

export const Default = () => html`<vl-http-405-message></vl-http-405-message>`;
