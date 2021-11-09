import { html } from "lit-html";
import "../button";
import "../select";
import "../search-filter";
import styles from "./styles.scss";
import buttonStyles from "../button/styles.scss";
import inputStyles from "../input-field/styles.scss";
import formStyles from "../form/styles.scss";
import selectStyles from "../select/styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-search-filter",
  decorators: [
    (story) => html`${stylesheet(`${styles}${buttonStyles}${inputStyles}${formStyles}${selectStyles}`)}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "search-filter",
          intro: "Search filter component.",
        }),
      },
    },
  },
  args: {
    title: "Lorem ipsum",
    alt: false,
    mobileModal: false,
    mobileModalTitle: "Lorem ipsum dolor set",
  },
  argTypes: {
    title: {
      name: "data-vl-title",
      type: { summary: "string" },
      description: "De titel van deze search filter.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    alt: {
      name: "data-vl-alt",
      type: { summary: "boolean" },
      description: "Alternatieve (transparante) achtergrond.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    mobileModal: {
      name: "data-vl-mobile-modal",
      type: { summary: "boolean" },
      description:
        "Activeert geoptimaliseerde weergave voor op mobiele toestellen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    mobileModalTitle: {
      name: "data-vl-mobile-modal-title",
      type: { summary: "string" },
      description:
        "De titel van deze search filter op mobiele toestellen indien niet gedeclareerd wordt het data-vl-title attribuut of de default genomen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
};

export const Default = ({ title, alt, mobileModal, mobileModalTitle }) => html`
  <div
    id="search-filter"
    is="vl-search-filter"
    data-vl-title=${title}
    ?data-vl-alt=${alt}
    ?data-vl-mobile-modal=${mobileModal}
    data-vl-mobile-modal-title=${mobileModalTitle}
  >
    <form is="vl-form">
      <section>
        <h2>Gegevens</h2>
        <div>
          <label is="vl-form-label" for="firstname">Voornaam</label>
          <input
            is="vl-input-field"
            type="text"
            id="firstname"
            name="firstname"
            value=""
            data-vl-block=""
            autocomplete="given-name"
          />
        </div>
        <div>
          <label is="vl-form-label" for="name">Naam</label>
          <input
            is="vl-input-field"
            type="text"
            id="name"
            name="name"
            value=""
            data-vl-block=""
            autocomplete="family-name"
          />
        </div>
      </section>
      <section>
        <h2>Locatie</h2>
        <div>
          <label is="vl-form-label" for="vl-select-city">Stad</label>
          <select
            is="vl-select"
            name="vl-select-default"
            id="vl-select-city"
            data-vl-select-deletable=""
            data-vl-block=""
            autocomplete="address-level2"
          >
            <option placeholder="">Kies een stad</option>
            <option value="brussel">Brussel</option>
            <option value="gent">Gent</option>
          </select>
        </div>
        <div>
          <label is="vl-form-label" for="vl-select-country">Land</label>
          <select
            is="vl-select"
            name="vl-select-default"
            id="vl-select-country"
            data-vl-select-deletable=""
            data-vl-block=""
            autocomplete="country"
          >
            <option placeholder="">Kies een land</option>
            <option value="belgië">België</option>
          </select>
        </div>
      </section>
      <div>
        <button is="vl-button" type="submit">Zoeken</button>
      </div>
    </form>
    <div>
      <a href="#" is="vl-link">Zoekopdracht verwijderen</a>
    </div>
  </div>
`;
