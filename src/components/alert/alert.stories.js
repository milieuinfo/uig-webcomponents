import { html } from "lit-html";
import "../button";
import "../alert";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";
import { ALERT_SIZE, ALERT_TYPE, ALERT_ICON } from "./enums";

export default {
  title: "custom-elements/vl-alert",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "alert",
          intro:
            "Use the alert (or notice) component to keep the user updated about important information.",
        }),
      },
    },
  },
  args: {
    title: "Opgelet!",
    icon: "warning",
    size: "normal",
    type: "info",
    closable: false,
    buttonText: "Fout melden",
    slotTitle: "Alert titel via slot",
    content: "U heeft geen rechten om deze actie uit te voeren.",
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
      type: {
        summary: `${ALERT_ICON.WARNING} | ${ALERT_ICON.CHECK} | ${ALERT_ICON.INFO_CIRCLE}`,
      },
      description: "Attribuut wordt gebruikt om het icoon type te bepalen.",
      control: {
        type: "select",
        options: [ALERT_ICON.WARNING, ALERT_ICON.CHECK, ALERT_ICON.INFO_CIRCLE],
      },
      table: {
        defaultValue: { summary: `"${ALERT_ICON.WARNING}"` },
      },
    },
    size: {
      name: "data-vl-size",
      type: {
        summary: `${ALERT_SIZE.NORMAL} | ${ALERT_SIZE.SMALL}`,
      },
      description:
        "Attribuut activeert een variant van de waarschuwing maar kleiner.",
      control: {
        type: "select",
        options: [ALERT_SIZE.NORMAL, ALERT_SIZE.SMALL],
      },
      table: {
        defaultValue: { summary: `"${ALERT_SIZE.NORMAL}"` },
      },
    },
    type: {
      name: "data-vl-type",
      type: {
        summary: `${ALERT_TYPE.INFO} | ${ALERT_TYPE.SUCCESS} | ${ALERT_TYPE.WARNING} | ${ALERT_TYPE.ERROR}`,
      },
      description:
        "Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.",
      control: {
        type: "select",
        options: [
          ALERT_TYPE.INFO,
          ALERT_TYPE.SUCCESS,
          ALERT_TYPE.WARNING,
          ALERT_TYPE.ERROR,
        ],
      },
      table: {
        defaultValue: { summary: `"${ALERT_TYPE.INFO}"` },
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
    content: {
      name: "content (for demo purposes)",
      description: "Test",
    },
    slotTitle: {
      name: "title (slot)",
      description: "",
    },
    buttonText: {
      name: "button text (slot, for demo purposes)",
      description: "",
    },
  },
};

export const Default = ({ closable, icon, title, size, type, content }) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${icon}
    data-vl-title=${title}
    data-vl-size=${size}
    data-vl-type=${type}
  >
    <p>${content}</p>
  </vl-alert>
`;

export const Alert = ({ closable, icon, title, size, type, content }) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${icon}
    data-vl-title=${title}
    data-vl-size=${size}
    data-vl-type=${type}
  >
    <p>${content}</p>
  </vl-alert>
`;

Alert.args = {
  title: "Opgelet!",
  type: ALERT_TYPE.ERROR,
  icon: ALERT_ICON.WARNING,
  content: "U heeft geen rechten om deze actie uit te voeren.",
};

export const Info = ({
  closable,
  icon,
  title,
  size,
  type,
  content,
}) => html`<vl-alert
  ?data-vl-closable=${closable}
  data-vl-icon=${icon}
  data-vl-title=${title}
  data-vl-size=${size}
  data-vl-type=${type}
>
  <p>${content}</p>
</vl-alert>`;

Info.args = {
  title: "Info",
  type: ALERT_TYPE.INFO,
  icon: ALERT_ICON.INFO_CIRCLE,
  content:
    "Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.",
};

export const Success = ({
  closable,
  icon,
  title,
  size,
  type,
  content,
}) => html`<vl-alert
  ?data-vl-closable=${closable}
  data-vl-icon=${icon}
  data-vl-title=${title}
  data-vl-size=${size}
  data-vl-type=${type}
>
  <p>${content}</p>
</vl-alert>`;

Success.args = {
  title: "Gelukt!",
  type: ALERT_TYPE.SUCCESS,
  icon: ALERT_ICON.CHECK,
  content:
    "We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.",
};

export const Warning = ({ closable, icon, title, size, type, content }) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${icon}
    data-vl-title=${title}
    data-vl-size=${size}
    data-vl-type=${type}
  >
    <p>${content}</p>
  </vl-alert>
`;

Warning.args = {
  title: "Technische storing",
  type: ALERT_TYPE.WARNING,
  icon: ALERT_ICON.WARNING,
  content:
    "Door een technische storing is dit loket tijdelijk niet beschikbaar.",
};

export const WithButton = ({
  closable,
  icon,
  title,
  size,
  type,
  buttonText,
  content,
}) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${icon}
    data-vl-title=${title}
    data-vl-size=${size}
    data-vl-type=${type}
  >
    <p>${content}</p>
    <button slot="actions" is="vl-button">${buttonText}</button>
  </vl-alert>
`;

export const WithTitleSlot = ({
  closable,
  icon,
  title,
  size,
  type,
  slotTitle,
  content,
}) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${icon}
    data-vl-title=${title}
    data-vl-size=${size}
    data-vl-type=${type}
  >
    <span slot="title">${slotTitle}</span>
    <p>${content}</p>
  </vl-alert>
`;
