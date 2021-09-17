import { html } from "lit-html";
import "../../../grid";
import styles from "../../styles.scss";
import { stylesheet } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-grid/vl-layout",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
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

export const Default = ({ content }) => html`<section is="vl-region">
  <div is="vl-layout" class="vl-layout">
    <div is="vl-grid">
      <div is="vl-column">${content}</div>
    </div>
  </div>
</section>`;
