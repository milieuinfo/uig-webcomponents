import { html } from "lit-html";
import "../../../properties";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-properties/vl-properties-column",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheet: true,
          root: "properties",
          intro:
            "De properties kolom webcomponent wordt gebruikt om lijsten van kenmerken van een onderwerp te verdelen in verschillende kolommen.",
        }),
      },
    },
  },
  args: { full: false },
  argTypes: {
    full: {
      name: "data-vl-full",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const Default = ({ full }) => html`<vl-properties>
  <h4>Gegevens</h4>
  <div is="vl-properties-column" ?data-vl-full=${full}>
    <dl is="vl-properties-list">
      <dt is="vl-property-term">Voornaam</dt>
      <dd is="vl-property-value">Koen</dd>
      <dt is="vl-property-term">Naam</dt>
      <dd is="vl-property-value">Peeters</dd>
      <dt is="vl-property-term">Geslacht</dt>
      <dd is="vl-property-value">Man</dd>
    </dl>
  </div>
  <div is="vl-properties-column" ?data-vl-full=${full}>
    <dl is="vl-properties-list">
      <dt is="vl-property-term">Telefoon</dt>
      <dd is="vl-property-value">000/00.00.00</dd>
      <dt is="vl-property-term">Gsm-nummer</dt>
      <dd is="vl-property-value">000/00.00.00</dd>
      <dt is="vl-property-term">E-mailadres</dt>
      <dd is="vl-property-value">koen.peeters@outlook.be</dd>
    </dl>
  </div>
</vl-properties>`;
