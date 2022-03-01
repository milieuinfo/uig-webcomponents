import { html } from 'lit-html';
import { parameters, args, argTypes } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-412-message',
  parameters: parameters('412'),
  args,
  argTypes,
};

export const Default = () => html`<vl-http-412-message></vl-http-412-message>`;
