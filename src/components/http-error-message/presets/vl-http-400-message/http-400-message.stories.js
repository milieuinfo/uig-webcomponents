import { html } from 'lit-html';
import { parameters, args, argTypes } from '../../config';
import './index';

export default {
  title: 'native-elements/vl-http-error-message/vl-http-400-message',
  parameters: parameters('400'),
  args,
  argTypes,
};

export const Default = () => html`<vl-http-400-message></vl-http-400-message>`;
