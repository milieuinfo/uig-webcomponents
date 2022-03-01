import { html } from 'lit-html';
import { parameters, args, argTypes } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-500-message',
  parameters: parameters('500'),
  args,
  argTypes,
};

export const Default = () => html`<vl-http-500-message></vl-http-500-message>`;
