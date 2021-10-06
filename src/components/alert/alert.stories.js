import { html } from "lit-html";
import "../button";
import "../alert";
import styles from "../button/styles.scss";
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
    title: "Lorem ipsum",
    icon: ALERT_ICON.WARNING,
    size: "",
    type: "",
    closable: false,
    buttonSlotText: "Button",
    titleSlotText: "Title via slot",
    content:
      "Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.",
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
        summary: "string",
      },
      description:
        "Attribuut wordt gebruikt om het icoon type te bepalen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.",
      control: {
        type: "select",
        options: [ALERT_ICON.WARNING, ALERT_ICON.CHECK, ALERT_ICON.INFO_CIRCLE],
      },
      table: {
        defaultValue: { summary: "" },
      },
    },
    size: {
      name: "data-vl-size",
      type: {
        summary: `${ALERT_SIZE.SMALL}`,
      },
      description:
        "Attribuut activeert een variant van de waarschuwing maar kleiner.",
      control: {
        type: "select",
        options: [ALERT_SIZE.SMALL],
      },
      table: {
        defaultValue: { summary: `` },
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
    titleSlotText: {
      name: "title (slot)",
      description: "",
      control: {
        disable: true,
      },
    },
    buttonSlotText: {
      name: "actions (slot)",
      description: "",
      control: {
        disable: true,
      },
    },
    content: {
      name: "content (for demo purposes)",
      description: "",
    },
  },
};

const Template = ({ closable, icon, title, size, type, content }) => html`
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

export const Default = Template.bind({});
export const Error = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});

Error.args = {
  title: "Opgelet!",
  type: ALERT_TYPE.ERROR,
  icon: ALERT_ICON.WARNING,
  content: "U heeft geen rechten om deze actie uit te voeren.",
};

Info.args = {
  title: "Info",
  type: ALERT_TYPE.INFO,
  icon: ALERT_ICON.INFO_CIRCLE,
  content:
    "Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.",
};

Success.args = {
  title: "Gelukt!",
  type: ALERT_TYPE.SUCCESS,
  icon: ALERT_ICON.CHECK,
  content:
    "We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.",
};

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
  buttonSlotText,
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
    <button slot="actions" is="vl-button">${buttonSlotText}</button>
  </vl-alert>
`;

WithButton.argTypes = {
  buttonSlotText: {
    control: {
      disable: false,
    },
  },
};

export const WithTitleSlot = ({
  closable,
  icon,
  size,
  type,
  titleSlotText,
  content,
}) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${icon}
    data-vl-size=${size}
    data-vl-type=${type}
  >
    <span slot="title">${titleSlotText}</span>
    <p>${content}</p>
  </vl-alert>
`;

WithTitleSlot.argTypes = {
  titleSlotText: {
    control: {
      disable: false,
    },
  },
};
