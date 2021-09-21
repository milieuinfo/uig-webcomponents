import { html } from "lit-html";
import "../properties";
import styles from "./styles.scss";

const defaultArgs = {
  fullWidth: false,
};

export default {
  title: "custom-elements/vl-properties",
  args: { ...defaultArgs },
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

const stylesheet = html`<style>
  ${styles}
</style>`;

const buttonWrap = (props) => {
  return html`
    ${stylesheet}
    <div style="max-width: 900px;">
      <vl-properties ?data-vl-full-width=${props.fullWidth}>
        <h4>Gegevens</h4>
        <dl is="vl-properties-list">
          <dt is="vl-property-term">Voornaam</dt>
          <dd is="vl-property-value">Koen</dd>
          <dt is="vl-property-term">Naam</dt>
          <dd is="vl-property-value">Peeters</dd>
          <dt is="vl-property-term">Geslacht</dt>
          <dd is="vl-property-value">Man</dd>
        </dl>
      </vl-properties>
    </div>
  `;
};

export const Default = (props) => html`${buttonWrap(props, props.content)}`;

export const WithColumns = () => html`
  ${stylesheet}
  <div style="max-width: 900px;">
    <vl-properties id="properties" data-vl-full-width="true">
      <h4>Gegevens</h4>
      <div is="vl-properties-column">
        <dl is="vl-properties-list">
          <dt is="vl-property-term">Voornaam</dt>
          <dd is="vl-property-value">Koen</dd>
          <dt is="vl-property-term">Naam</dt>
          <dd is="vl-property-value">Peeters</dd>
          <dt is="vl-property-term">Geslacht</dt>
          <dd is="vl-property-value">Man</dd>
        </dl>
      </div>

      <div is="vl-properties-column">
        <dl is="vl-properties-list">
          <dt is="vl-property-term">Telefoon</dt>
          <dd is="vl-property-value">000/00.00.00</dd>
          <dt is="vl-property-term">Gsm-nummer</dt>
          <dd is="vl-property-value">000/00.00.00</dd>
          <dt is="vl-property-term">E-mailadres</dt>
          <dd is="vl-property-value">koen.peeters@outlook.be</dd>
        </dl>
      </div>

      <div is="vl-properties-column" data-vl-full="">
        <dl is="vl-properties-list">
          <dt is="vl-property-term">Nationaliteit</dt>
          <dd is="vl-property-value">Belg</dd>
          <dt is="vl-property-term">Burgerlijke staat</dt>
          <dd is="vl-property-value">Getrouwd</dd>
          <dt is="vl-property-term">Adres</dt>
          <dd is="vl-property-value">
            <p>Havenlaan 88</p>
            <p>1000 Brussel</p>
          </dd>
        </dl>
      </div>
    </vl-properties>
    <div></div>
  </div>
`;
