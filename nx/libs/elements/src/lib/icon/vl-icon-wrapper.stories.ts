import { html } from "lit-html";
import "./vl-icon.element";

export default {
  title: "Elements/vl-icon/vl-icon-wrapper",
  args: {
    wrappersAmount: 3,
  },
  argTypes: {
    wrappersAmount: {
      name: "amount of wrappers (for demo purposes)",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
  },
};

interface DefaultInterface {
  wrappersAmount: number 
}

export const Default = ({ wrappersAmount }: DefaultInterface) => {
  const wrappers = [null, ...new Array(wrappersAmount-1)];
  return html`${wrappers.map(
    () =>
      html`<p is="vl-icon-wrapper">
        <span is="vl-icon" data-vl-icon="calendar"></span>
      </p>`
  )}`;
};
