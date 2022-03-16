import { html } from 'lit-html';
import '../test';

export default {
  title: 'custom-elements/vl-test',
  args: { open: false },
};

const getTest = () => {
  const [lastItem] = [...document.querySelectorAll('vl-test')].slice(-1);
  return lastItem;
};

export const Default = () => html` <vl-test></vl-test>`;

export const Controlled = ({ open }) =>
  html` <vl-test
    @vl-open=${() => {
      const test = getTest();
      test.open = !test.open;
    }}
    .open=${open}
  ></vl-test>`;
