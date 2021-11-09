import { html } from "lit-html";
import "../rich-data-table";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";
import { args, argTypes } from "./config";

export default {
  title: "custom-elements/vl-rich-data-table",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "rich-data-table",
          intro:
            "De definitie van een rich data veld, onderdeel van een rich data table om een table header weer te geven.",
        }),
      },
    },
  },
};

export const Default = ({ }) => html`
<vl-rich-data-table data-vl-data="{" data": [{"id": 0, "name" : "Project #1" , "manager" : {"firstName": "Pascal" , "lastName" : "Riquier" }, "medewerkers" : [{"firstName": "Sander" , "lastName" : "Kleykens" }, {"firstName": "Tom" , "lastName" : "Coemans" }]}, {"id": 1, "name" : "Project #2" , "manager" : {"firstName": "Tom" , "lastName" : "Coemans" }, "medewerkers" : [{"firstName": "Guy" , "lastName" : "Wauters" }, {"firstName": "Tom" , "lastName" : "Coemans" }]}]}">
  <vl-rich-data-field data-vl-label="ID" data-vl-selector="id"></vl-rich-data-field>
  <vl-rich-data-field data-vl-label="Naam" data-vl-selector="name"></vl-rich-data-field>
  <vl-rich-data-field data-vl-label="Naam manager" data-vl-selector="manager.lastName"></vl-rich-data-field>
  <vl-rich-data-field data-vl-label="Eerste medewerker" data-vl-selector="medewerkers.0.lastName"></vl-rich-data-field>
  <vl-rich-data-field data-vl-label="Tweede medewerker"></vl-rich-data-field>
  <vl-rich-data-field>
    <template slot="label">
      <span style="font-weight: normal">Project o.l.v.</span> <strong>manager</strong>
    </template>
    <template slot="content">
      <span>${item.name}</span> o.l.v. <strong>${item.manager.firstName} ${item.manager.lastName}</strong>
    </template>
  </vl-rich-data-field>
</vl-rich-data-table>
`;
