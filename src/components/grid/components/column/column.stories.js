import { html } from "lit-html";
import "../../../grid";
import styles from "../../styles.scss";
import {
  stylesheet,
  docsIntro,
  CATEGORIES,
} from "../../../../../.storybook/utils.js";
import { args, argTypes } from "./config";

export default {
  title: "native-elements/vl-grid/vl-column",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "grid",
          intro: "De parent van een VlColumn is altijd een VlGrid.",
        }),
      },
    },
  },
  args: {
    ...args,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?",
  },
  argTypes: {
    ...argTypes,
    content: {
      name: "content (for demo purposes)",
      table: {
        type: { summary: "string" },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: "" },
      },
    },
  },
};

export const Default = ({
  size,
  maxSize,
  mediumSize,
  mediumMaxSize,
  smallSize,
  smallMaxSize,
  extraSmallSize,
  extraSmallMaxSize,
  push,
  content,
}) => html`<section is="vl-region">
  <div is="vl-layout">
    <div is="vl-grid">
      <div
        is="vl-column"
        data-vl-size=${size}
        data-vl-max-size=${maxSize}
        data-vl-medium-size=${mediumSize}
        data-vl-medium-max-size=${mediumMaxSize}
        data-vl-small-size=${smallSize}
        data-vl-small-max-size=${smallMaxSize}
        data-vl-extra-small-size=${extraSmallSize}
        data-vl-extra-small-max-size=${extraSmallMaxSize}
        data-vl-push=${push}
      >
        ${content}
      </div>
    </div>
  </div>
</section>`;
