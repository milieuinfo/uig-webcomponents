import { html } from "lit-html";
import "../../vl-grid.element";

export default {
  title: "Elements/vl-grid/vl-layout",
  args: {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?",
  },
  argTypes: {
    content: {
      name: "content (for demo purposes)",
      type: { summary: "string" },
    },
  },
};
interface DefaultInterface {
  content: any
}

export const Default = ({ content }: DefaultInterface) => html`<section is="vl-region">
  <div is="vl-layout" class="vl-layout">
    <div is="vl-grid">
      <div is="vl-column">${content}</div>
    </div>
  </div>
</section>`;
