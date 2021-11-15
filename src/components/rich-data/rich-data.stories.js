import { html } from "lit-html";
import "../rich-data";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";
import { args, argTypes } from "./config";

export default {
  title: "custom-elements/vl-rich-data",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "rich-data",
          intro: "Use the rich-data component to show rich data.",
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = ({ }) => html`
  <vl-rich-data id="rich-data" data-vl-filter-closable="">
    <span slot="no-content">Geen resultaten</span>
    <ul is="vl-search-results" slot="content"></ul>
    <select is="vl-select" slot="sorter" aria-label="Sorteer">
      <option value="id">ID</option>
      <option value="manager.lastName">Naam manager</option>
    </select>
    <div is="vl-search-filter" data-vl-alt="" slot="filter">
      <form is="vl-form" id="rich-data-table-filter-form">
        <section>
          <h2>Doorzoek projecten</h2>
          <div>
            <label is="vl-form-label" for="filterOpId">Project id</label>
            <input
              is="vl-input-field"
              id="filterOpId"
              type="text"
              name="id"
              value=""
              data-vl-block=""
            />
          </div>
        </section>
        <section>
          <h2>Project details</h2>
          <div>
            <label is="vl-form-label" for="filterOpNaamProject"
              >Project naam</label
            >
            <input
              is="vl-input-field"
              id="filterOpNaamProject"
              type="text"
              name="name"
              value=""
              data-vl-block=""
            />
          </div>
          <div>
            <label is="vl-form-label" for="filterOpNaamManager"
              >Manager familienaam</label
            >
            <input
              is="vl-input-field"
              id="filterOpNaamManager"
              type="text"
              name="manager.lastName"
              value=""
              data-vl-block=""
            />
          </div>
        </section>
        <div>
          <button is="vl-button" type="submit">Zoeken</button>
        </div>
      </form>
      <div>
        <button
          is="vl-button-link"
          type="reset"
          form="rich-data-table-filter-form"
        >
          Zoekopdracht verwijderen
        </button>
      </div>
    </div>
  </vl-rich-data>
`;
