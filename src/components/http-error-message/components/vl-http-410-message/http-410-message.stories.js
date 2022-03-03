import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-410-message',
  parameters: parameters('410'),
};

export const Default = () => html`<vl-http-410-message></vl-http-410-message>`;
