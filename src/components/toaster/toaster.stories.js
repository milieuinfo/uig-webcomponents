import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import '../toaster';
import { POSITIONS } from './enums';
import { sharedArgs, sharedArgTypes } from '../alert/config';

export default {
  title: 'custom-elements/vl-toaster',
  args: {
    ...sharedArgs,
    closable: true,
    open: true,
    position: 'top-right',
    content: 'Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus.',
  },
  argTypes: {
    ...sharedArgTypes,
    position: {
      control: {
        type: 'select',
        options: [POSITIONS.TOP_RIGHT, POSITIONS.TOP_LEFT, POSITIONS.BOTTOM_RIGHT, POSITIONS.BOTTOM_LEFT],
      },
    },
  },
};

export const Default = ({ closable, open, position, icon, title, size, type, content }) => html` <vl-toaster
  .open=${open}
  ?data-vl-closable=${closable}
  data-vl-icon=${ifDefined(icon)}
  data-vl-title=${title}
  data-vl-size=${ifDefined(size)}
  data-vl-type=${ifDefined(type)}
  @vl-closed=${() => console.log('closed')}
  data-vl-position=${position}
  ><p>${content}</p></vl-toaster
>`;
