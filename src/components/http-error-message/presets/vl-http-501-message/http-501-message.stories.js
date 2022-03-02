import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-501-message',
  parameters: parameters('501'),
};

export const Default = () => html`<vl-http-501-message></vl-http-501-message>`;
