import { html } from "lit-html";
import "../button";
import "../alert";
import styles from "./styles.scss";
import { stylesheet } from "../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-alert",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args: {
    title: "Opgelet!",
    icon: "warning",
    content: html`<p>
      U heeft geen rechten om deze actie uit te voeren.
      <a href="#">Vraag rechten aan</a>.
    </p> `,
    size: "normal",
    type: "info",
    closable: false,
  },
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

const Template = (
  { closable, disabled, icon, title, size, type },
  { args }
) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    ?data-vl-disabled=${disabled}
    data-vl-icon=${icon}
    data-vl-title=${title}
    data-vl-size=${size}
    data-vl-type=${type}
  >
    ${args.content}
  </vl-alert>
`;

export const Default = Template.bind({});
export const AlertWithButton = Template.bind({});
export const WithTitleSlot = Template.bind({});

AlertWithButton.args = {
  title: "Alert met button",
  content: html`<p>
      U heeft geen rechten om deze actie uit te voeren.
      <a href="#">Vraag rechten aan</a>.
    </p>
    <button slot="actions" is="vl-button">Fout melden</button> `,
};

WithTitleSlot.args = {
  title: "",
  content: html`
    <span slot="title">Alert titel via slot</span>
    <p>
      U heeft geen rechten om deze actie uit te voeren.
      <a href="#">Vraag rechten aan</a>.
    </p>
  `,
};
