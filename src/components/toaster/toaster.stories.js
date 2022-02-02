import { html } from 'lit-html';
import '../alert';
import '../button';
import '../toaster';
import { POSITIONS } from './enums';
// import buttonStyles from '../button/styles.scss';

// import { stylesheet } from '../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-toaster',
  // decorators: [(story) => html`${stylesheet(buttonStyles)}${story()}`],
  args: {
    closable: true,
    open: true,
    position: 'top-right',
  },
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: [POSITIONS.TOP_RIGHT, POSITIONS.TOP_LEFT, POSITIONS.BOTTOM_RIGHT, POSITIONS.BOTTOM_LEFT],
      },
    },
  },
};

// const getToaster = () => {
//   //   <button
//   //   is="vl-button"
//   //   @click=${() => {
//   //     const toaster = getToaster();
//   //     toaster.open = !toaster.open;
//   //   }}
//   // >
//   //   Fire toaster
//   // </button>
//   const [lastItem] = [...document.querySelectorAll('vl-toaster')].slice(-1);
//   return lastItem;
// };

export const Default = ({ closable, open, position }) => html` <vl-toaster
  .open=${open}
  ?data-vl-closable=${closable}
  data-vl-title="Test title"
  @vl-closed=${() => console.log('closed')}
  data-vl-position=${position}
  ><p>Test message</p></vl-toaster
>`;
