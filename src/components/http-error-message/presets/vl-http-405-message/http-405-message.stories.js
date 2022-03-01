import { html } from 'lit-html';
import { parameters, args, argTypes } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-405-message',
  parameters: parameters('405'),
  args,
  argTypes,
};

export const Default = () => html`<vl-http-405-message></vl-http-405-message>`;
