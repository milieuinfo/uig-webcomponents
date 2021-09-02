import { html } from "lit-html";
import "../button";
import "../alert";
import styles from "./styles.scss";

const defaultArgs = {
  title: "Opgelet!",
  icon: "warning",
  content: html`<p>
    U heeft geen rechten om deze actie uit te voeren.
    <a href="#">Vraag rechten aan</a>.
  </p> `,
  size: "normal",
  type: "info",
  closable: false,
};

export default {
  title: "custom-elements/vl-alert",
  args: { ...defaultArgs },
  argTypes: {
    title: {
      name: "data-vl-title",
      type: { summary: "string" },
      description: "Attribuut wordt gebruikt om de titel te bepalen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    icon: {
      name: "data-vl-icon",
      type: "select",
      options: ["warning", "check", "info-circle"],
      description: "Attribuut wordt gebruikt om het icoon type te bepalen.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    size: {
      name: "data-vl-size",
      type: "select",
      options: ["normal", "small"],
      description:
        "Attribuut activeert een variant van de waarschuwing maar kleiner.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    type: {
      name: "data-vl-type",
      type: "select",
      options: ["info", "success", "warning", "error"],
      description:
        "Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    closable: {
      name: "data-vl-closable",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om de optie toe te voegen om de waarschuwing te sluiten door op het sluit icoon te klikken in de rechterbovenhoek.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const alertWrap = (props, children) => {
  return html`
    ${stylesheet}
    <vl-alert
      ?data-vl-closable=${props.closable}
      ?data-vl-disabled=${props.disabled}
      data-vl-icon=${props.icon}
      data-vl-title=${props.title}
      data-vl-size=${props.size}
      data-vl-type=${props.type}
      >${children}</vl-alert
    >
  `;
};

export const Default = (props) => html`${alertWrap(props, props.content)}`;

export const AlertWithButton = (props) =>
  html`${alertWrap(props, props.content)}`;

AlertWithButton.args = {
  ...defaultArgs,
  title: "Alert met button",
  content: html`<p>
      U heeft geen rechten om deze actie uit te voeren.
      <a href="#">Vraag rechten aan</a>.
    </p>
    <button slot="actions" is="vl-button">Fout melden</button> `,
};

export const WithTitleSlot = (props) =>
  html`${alertWrap(props, props.content)}`;

WithTitleSlot.args = {
  ...defaultArgs,
  title: "",
  content: html`
    <span slot="title">Alert titel via slot</span>
    <p>
      U heeft geen rechten om deze actie uit te voeren.
      <a href="#">Vraag rechten aan</a>.
    </p>
  `,
};
