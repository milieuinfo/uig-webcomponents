import { html } from "lit";
import { EVALUATION_STATUS } from "../../enums";

export const setupStatement = ({ evaluation, date, dateModified }) => {
  const setupStatementTemplate = () => {
    switch (evaluation) {
      case EVALUATION_STATUS.EXPERT_EVALUATED:
        return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en
        gebaseerd op een analyse van een web accessibility specialist,
        gecertificeerd door the International Association of Accessibility
        Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het
        laatst herzien op ${dateModified}.`;
        break;
      case EVALUATION_STATUS.SELF_EVALUATED:
        return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en
        gebaseerd op een analyse van Departement Omgeving. Deze
        toegankelijkheidsverklaring is voor het laatst herzien op
        ${dateModified}.`;
        break;
      case EVALUATION_STATUS.NOT_EVALUATED:
        return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en
        werd voor het laatst herzien op ${dateModified}.`;
      default:
        return null;
        break;
    }
  };
  return html`<div
    id="setup-accessibility-statement"
    is="vl-column"
    data-vl-size="12"
    data-vl-medium-size="12"
  >
    <h2 is="vl-h2">Opstelling van deze toegankelijkheidsverklaring</h2>
    <p>${setupStatementTemplate()}</p>
  </div>`;
};
