import { html } from 'lit-html';
import '../loader';
import { docsIntro } from '../../../.storybook/utils.js';
import { args, argTypes } from './config';

export default {
  title: 'custom-elements/vl-loader',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'loader',
          intro: 'The loader component is an animation indicating that a page/website is being loaded.',
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = ({ light, text, single }) => html`
  <vl-loader ?data-vl-light=${light} data-vl-text=${text} ?data-vl-single=${single}></vl-loader>
`;

export const LightWithoutText = ({ light, text, single }) => html`
  <div class="vl-region" style="background: #b7b7b7">
    <vl-loader ?data-vl-light=${light} data-vl-text=${text} ?data-vl-single=${single}></vl-loader>
  </div>
`;

LightWithoutText.args = {
  light: true,
  single: true,
};

export const WithCustomContent = ({ light, single }) => html`
  <vl-loader ?data-vl-light=${light} ?data-vl-single=${single}>
    <span><strong>Informatie</strong> is aan het laden</span>
  </vl-loader>
`;

WithCustomContent.argTypes = {
  text: {
    control: {
      disable: true,
    },
  },
};
