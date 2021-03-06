import { html } from 'lit-html';
import { parameters } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-415-message',
  parameters: parameters('415'),
};

export const Default = () => html`<vl-http-415-message></vl-http-415-message>`;
