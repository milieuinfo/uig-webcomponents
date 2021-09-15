import { html } from "lit-html";
import "../properties";
import styles from "./styles.scss";

export default {
  title: "custom-elements/vl-properties",
  args: { fullWidth: false },
  argTypes: {
    fullWidth: {
      name: "data-vl-full-width",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om de maximale breedte van het label te benutten.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const Default = ({ fullWidth }) => html`<style>
    ${styles}
  </style>
  <vl-properties ?data-vl-full-width=${fullWidth}>
    <h4>Gegevens</h4>
    <dl is="vl-properties-list">
      <dt is="vl-property-term">Voornaam</dt>
      <dd is="vl-property-value">Koen</dd>
      <dt is="vl-property-term">Naam</dt>
      <dd is="vl-property-value">Peeters</dd>
      <dt is="vl-property-term">Geslacht</dt>
      <dd is="vl-property-value">Man</dd>
    </dl>
  </vl-properties>`;
