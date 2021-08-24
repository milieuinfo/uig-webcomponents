import { html } from "lit-html";
import "../infoblock";

export default {
  title: "custom-elements/vl-infoblock",
};

export const Default = () => html`<vl-infoblock
  data-vl-title="Contactenlijst"
  data-vl-type="contact"
>
  Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse
  Overheid.
</vl-infoblock>`;
