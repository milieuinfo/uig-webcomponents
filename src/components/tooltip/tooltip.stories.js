import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";
import "../tooltip";
import "../button";
import styles from "./styles.scss";
import buttonStyles from "../button/styles.scss";
import {
  stylesheet,
  CATEGORIES,
  docsIntro,
} from "../../../.storybook/utils.js";
import { PLACEMENT } from "./enums";

const margin = "64px 124px";

export default {
  title: "custom-elements/vl-tooltip",
  decorators: [
    (story) => html`${stylesheet(`${styles}${buttonStyles}`)}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["tooltip"],
          root: "tooltip",
          intro:
            "Use a tooltip to provide descriptive information about the function of a button, label or other element. When a user hovers over an element or selects it, the tooltip appears to provide extra information.",
        }),
      },
    },
  },
  args: {
    placement: "top",
    tooltipContent: "Tooltip content",
    vlStatic: false,
  },
  argTypes: {
    placement: {
      name: "data-vl-placement",
      type: "select",
      options: [
        PLACEMENT.TOP,
        PLACEMENT.RIGHT,
        PLACEMENT.BOTTOM,
        PLACEMENT.LEFT,
      ],
      description: "The position of the tooltip",
      table: {
        type: {
          summary: `${PLACEMENT.TOP} | ${PLACEMENT.RIGHT} | ${PLACEMENT.BOTTOM} | ${PLACEMENT.LEFT}`,
        },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    vlStatic: {
      name: "data-vl-static",
      description: "Adds a tooltip that is always visible",
      table: {
        type: { summary: "boolean" },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    tooltipContent: { name: "content (for demo purposes)" },
  },
};

export const Default = ({ placement, tooltipContent, vlStatic }) => {
  return html`<div
    style=${styleMap({
      display: "flex",
      justifyContent: "center",
      margin,
    })}
  >
    <button is="vl-button">
      <vl-tooltip ?data-vl-static=${vlStatic} data-vl-placement=${placement}
        >${tooltipContent}</vl-tooltip
      >
      Tooltip
    </button>
  </div>`;
};

Default.argTypes = {
  vlStatic: {
    control: {
      disable: true,
    },
  },
};

export const Static = ({ placement, tooltipContent, vlStatic }) => {
  return html`<div
    style=${styleMap({
      border: "1px solid #e8ebee",
      padding: "1rem",
      margin,
    })}
  >
    <vl-tooltip ?data-vl-static=${vlStatic} data-vl-placement=${placement}
      >${tooltipContent}</vl-tooltip
    >
  </div>`;
};

Static.args = { vlStatic: true };
