import { html } from "lit-html";
import "../link";
import styles from "./styles.scss";

const defaultArgs = {
  block: false,
  error: false,
};

export default {
  title: "native-elements/vl-link",
  args: { ...defaultArgs },
  argTypes: {
    block: {
      name: "data-vl-block",
      type: { summary: "boolean" },
      description:
        "Attribuut zorgt ervoor dat het element als block getoond wordt.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    error: {
      name: "data-vl-error",
      type: { summary: "boolean" },
      description:
        "Attribuut zorgt ervoor dat het element als error getoond wordt.",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const buttonWrap = (props) => {
  return html`
    ${stylesheet}
    <a
      id="link"
      is="vl-link"
      href="#"
      class="vl-link"
      ?data-vl-block=${props.block}
      ?data-vl-error=${props.error}
      >Terug naar overzicht</a
    >
  `;
};

export const Default = (props) => html`${buttonWrap(props, props.content)}`;

export const WithIconBeforeText = () => html`
  ${stylesheet}
  <a id="link-with-icon" is="vl-link" href="#" class="vl-link">
    <span
      is="vl-icon"
      data-vl-icon="arrow-right-fat"
      data-vl-before=""
      link=""
    ></span>
    Terug naar overzicht
  </a>
`;

export const WithIconAfterText = () => html`
  ${stylesheet}
  <a is="vl-link" href="#" class="vl-link">
    Terug naar overzicht<span
      is="vl-icon"
      data-vl-icon="arrow-right-fat"
      data-vl-after=""
      link=""
    ></span>
  </a>
`;

export const LinkExternal = () => html`
  ${stylesheet}
  <a is="vl-link" href="#" class="vl-link">
    Ga naar Vlaanderen.be<span
      is="vl-icon"
      data-vl-icon="external"
      data-vl-after=""
      data-vl-light=""
      link=""
    ></span>
  </a>
`;

export const LinkClose = () => html`
  ${stylesheet}
  <a is="vl-link" href="#" class="vl-link">
    <span is="vl-icon" data-vl-icon="cross" data-vl-before="" link=""></span
    >Venster sluiten
  </a>
`;

export const LinkError = () => html`
  ${stylesheet}
  <button
    id="link-error"
    is="vl-button-link"
    type="button"
    data-vl-error=""
    class="vl-u-text--error vl-link"
  >
    Verwijderen
  </button>
`;

export const ButtonLink = () => html` ${stylesheet}
  <a
    id="button-a-link"
    is="vl-link"
    href="#"
    data-vl-block=""
    class="vl-link--block vl-link--data-vl-block vl-link"
  >
    <span
      is="vl-icon"
      data-vl-icon="arrow-right-fat"
      data-vl-before=""
      link=""
    ></span
    >Demo link </a
  ><button
    id="button-link"
    is="vl-button-link"
    type="button"
    data-vl-block=""
    class="vl-link--block vl-link--data-vl-block vl-link"
  >
    <span
      is="vl-icon"
      data-vl-icon="arrow-right-fat"
      data-vl-before=""
      link=""
    ></span
    >Demo link
  </button>`;
