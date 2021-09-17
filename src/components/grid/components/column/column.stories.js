import { html } from "lit-html";
import "../../../grid";
import styles from "../../styles.scss";
import { stylesheet } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-grid/vl-column",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args: {
    size: 8,
    maxSize: 12,
    mediumSize: 10,
    mediumMaxSize: 12,
    smallSize: 12,
    smallMaxSize: 12,
    extraSmallSize: 12,
    extraSmallMaxSize: 12,
    push: 0,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?",
  },
  argTypes: {
    size: {
      name: "data-vl-size",
      type: { summary: "number" },
      description:
        "Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij grote schermen, typisch desktop.",
      table: {
        defaultValue: { summary: 8 },
      },
    },
    maxSize: {
      name: "data-vl-max-size",
      type: { summary: "number" },
      description:
        "Het maximum (noemer) waartegen zal geevalueerd worden bij grote schermen, typisch desktop.",
      table: {
        defaultValue: { summary: 12 },
      },
    },
    mediumSize: {
      name: "data-vl-medium-size",
      type: { summary: "number" },
      description:
        "Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij medium schermen, typisch tablet.",
      table: {
        defaultValue: { summary: 10 },
      },
    },
    mediumMaxSize: {
      name: "data-vl-medium-max-size",
      type: { summary: "number" },
      description:
        "Het maximum (noemer) waartegen zal geevalueerd worden bij medium schermen, typisch tablet.",
      table: {
        defaultValue: { summary: 12 },
      },
    },
    smallSize: {
      name: "data-vl-small-size",
      type: { summary: "number" },
      description:
        "Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij kleine schermen, typisch mobiel.",
      table: {
        defaultValue: { summary: 12 },
      },
    },
    smallMaxSize: {
      name: "data-vl-small-max-size",
      type: { summary: "number" },
      description:
        "Het maximum (noemer) waartegen zal geevalueerd worden bij kleine schermen, typisch mobiel.",
      table: {
        defaultValue: { summary: 12 },
      },
    },
    extraSmallSize: {
      name: "data-vl-extra-small-size",
      type: { summary: "number" },
      description:
        "Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij zeer kleine schermen.",
      table: {
        defaultValue: { summary: 12 },
      },
    },
    extraSmallMaxSize: {
      name: "data-vl-extra-small-max-size",
      type: { summary: "number" },
      description:
        "Het maximum (noemer) waartegen zal geevalueerd worden bij zeer kleine schermen.",
      table: {
        defaultValue: { summary: 12 },
      },
    },
    push: {
      name: "data-vl-push",
      type: { summary: "number" },
      description: "aantal partities te verschuiven.",
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
