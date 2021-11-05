import { html } from "lit-html";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";
import "../wizard";
import "../titles";
import "../grid";
import "../button";
import "../form-grid";
import "../form-message";
import "../input-field";
import "../action-group";
import "../link";
import "../icon";
import "../checkbox";
import titleStyles from "../titles/styles.scss";
import gridStyles from "../grid/styles.scss";
import buttonStyles from "../button/styles.scss";
import formGridStyles from "../form-grid/styles.scss";
import formMessageStyles from "../form-message/styles.scss";
import inputFieldStyles from "../input-field/styles.scss";
import actionGroupStyles from "../action-group/styles.scss";
import linkStyles from "../link/styles.scss";
import iconStyles from "../icon/styles.scss";
import "./new.js";

export default {
  title: "custom-elements/vl-wizard",
  decorators: [
    (story) =>
      html`${stylesheet(
        `${titleStyles}${gridStyles}${buttonStyles}${formGridStyles}${formMessageStyles}${inputFieldStyles}${actionGroupStyles}${linkStyles}${iconStyles}`
      )}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "wizard",
          intro: "",
        }),
      },
    },
  },
};

export const Default = () => html`<vl-wizard>
  <h2 is="vl-h2" slot="title">Wizard title</h2>
  <p slot="header">You're a wizard Harry</p>
  <div slot="panes">
    <vl-wizard-pane>
      <h3 is="vl-h3" slot="title">Stap 1</h3>
      <div is="vl-form-grid" data-vl-is-stacked slot="content">
        <div is="vl-form-column" data-vl-size="12">
          <label is="vl-form-label" for="naam" data-vl-block>Naam</label>
          <input id="naam" is="vl-input-field" data-vl-block />
        </div>
        <div is="vl-form-column" data-vl-size="12">
          <label is="vl-form-label" for="adres" data-vl-block>Adres</label>
          <input id="adres" is="vl-input-field" data-vl-block />
        </div>
        <div is="vl-form-column" data-vl-size="12">
          <label is="vl-form-label" for="telefoon" data-vl-block
            >Telefoon</label
          >
          <input id="telefoon" is="vl-input-field" data-vl-block />
        </div>
      </div>
      <button is="vl-button" type="button" slot="next-action">Volgende</button>
    </vl-wizard-pane>
    <vl-wizard-pane>
      <h3 is="vl-h3" slot="title">Stap 2</h3>
      <div is="vl-form-grid" data-vl-is-stacked slot="content">
        <div is="vl-form-column" data-vl-size="12">
          <label is="vl-form-label" for="years" data-vl-block
            >Aantal jaren dienst</label
          >
          <input id="years" is="vl-input-field" data-vl-block />
        </div>
      </div>
      <button is="vl-button-link" type="button" slot="previous-action">
        <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
        Vorige
      </button>
      <button is="vl-button" type="button" slot="next-action">Volgende</button>
    </vl-wizard-pane>
    <vl-wizard-pane>
      <h3 is="vl-h3" slot="title">Stap 3</h3>
      <div is="vl-form-grid" data-vl-is-stacked slot="content">
        <div is="vl-form-column" data-vl-size="12">
          <label is="vl-form-label" for="unavailable" data-vl-block
            >Periode van afwezigheid</label
          >
          <input id="unavailable" is="vl-input-field" data-vl-block />
        </div>
      </div>
      <button is="vl-button-link" type="button" slot="previous-action">
        <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
        Vorige
      </button>
      <button is="vl-button" type="button" slot="next-action">Volgende</button>
    </vl-wizard-pane>
    <vl-wizard-pane>
      <h3 is="vl-h3" slot="title">Stap 4</h3>
      <div is="vl-form-grid" data-vl-is-stacked slot="content">
        <div is="vl-form-column" data-vl-size="12">
          <label is="vl-form-label" for="disease" data-vl-block
            >Reden van ziekte</label
          >
          <input id="disease" is="vl-input-field" data-vl-block />
        </div>
      </div>
      <button is="vl-button-link" type="button" slot="previous-action">
        <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
        Vorige
      </button>
      <button is="vl-button" type="button" slot="next-action">Versturen</button>
    </vl-wizard-pane>
  </div>
</vl-wizard>`;

export const New = () => html`<vl-wizard-new></vl-wizard-new>`;
