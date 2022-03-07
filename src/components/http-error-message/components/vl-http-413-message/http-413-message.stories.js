import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-413-message',
  parameters: parameters('413'),
};

export const Default = () => html`<vl-http-413-message></vl-http-413-message>`;
