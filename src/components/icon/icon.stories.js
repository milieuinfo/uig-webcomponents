import { html } from "lit-html";
import "../icon";
import styles from "./styles.scss";

export default {
  title: "native-elements/vl-icon",
  args: {
    icon: "calendar",
    light: false,
    content: "Lorem ipsum dolor sit amet",
    rotate: false,
    fullRotate: false,
    before: false,
    after: false,
  },
  argTypes: {
    icon: {
      name: "data-vl-icon",
      control: {
        type: "select",
        options: ["calendar", "chat-help", "key"],
      },
      description:
        "Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    size: {
      name: "data-vl-size",
      control: {
        type: "select",
        options: ["small", "large"],
      },
      description:
        "Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    light: {
      name: "data-vl-light",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om het icoon een lichte kleur te geven.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    rotate: {
      name: "data-vl-90deg",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om het icoon 90 graden te roteren.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    fullRotate: {
      name: "data-vl-180deg",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om het icoon 180 graden te roteren.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    before: {
      name: "data-vl-before",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",
      control: {
        disable: true,
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    after: {
      name: "data-vl-after",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",
      control: {
        disable: true,
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    link: {
      name: "data-vl-link",
      type: { summary: "boolean" },
      description:
        "Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.",
      control: {
        disable: true,
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    content: {
      name: "content (for demo purposes)",
      type: { summary: "string" },
    },
  },
};

const stylesheet = html`<style>
  ${styles}
</style>`;

export const Default = ({
  size,
  icon,
  light,
  rotate,
  fullRotate,
}) => html`${stylesheet}
  <p>
    <span
      is="vl-icon"
      data-vl-size=${size}
      data-vl-icon=${icon}
      ?data-vl-light=${light}
      ?data-vl-90deg=${rotate}
      ?data-vl-180deg=${fullRotate}
    ></span>
  </p>`;

Default.argTypes = { content: { control: false } };

export const BeforeElement = ({
  size,
  icon,
  light,
  rotate,
  fullRotate,
  content,
  before,
}) => html`${stylesheet}
  <p is="vl-icon-wrapper">
    <span
      is="vl-icon"
      ?data-vl-before=${before}
      data-vl-icon=${icon}
      data-vl-size=${size}
      ?data-vl-light=${light}
      ?data-vl-90deg=${rotate}
      ?data-vl-180deg=${fullRotate}
    ></span
    ><span>${content}</span>
  </p>`;

BeforeElement.args = {
  before: true,
};

export const AfterElement = ({
  size,
  icon,
  light,
  rotate,
  fullRotate,
  content,
  after,
}) => html`${stylesheet}
  <p is="vl-icon-wrapper">
    <span>${content}</span
    ><span
      is="vl-icon"
      ?data-vl-after=${after}
      data-vl-icon=${icon}
      data-vl-size=${size}
      ?data-vl-light=${light}
      ?data-vl-90deg=${rotate}
      ?data-vl-180deg=${fullRotate}
    ></span>
  </p>`;

AfterElement.args = {
  after: true,
};
