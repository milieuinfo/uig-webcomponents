import { html } from "lit-html";
import "../../vl-properties.component";

export default {
  title: "Components/vl-properties/vl-properties-column",
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

interface DefaultInterface {
  full: string
}

export const Default = ({ full }: DefaultInterface) => html`<vl-properties>
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
