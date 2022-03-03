import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-414-message',
  parameters: parameters('414'),
};

export const Default = () => html`<vl-http-414-message></vl-http-414-message>`;
