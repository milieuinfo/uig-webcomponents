import { html } from 'lit-html';
import { parameters, args, argTypes } from '../../config';
import './index';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-404-message',
  parameters: parameters('404'),
  args,
  argTypes,
};

export const Default = () => html`<vl-http-404-message></vl-http-404-message>`;
