import { html } from "lit";
import { EVALUATION_STATUS } from "../../enums";

export const setupStatement = ({ evaluation, date, dateModified }) => {
  const setupStatementTemplate = () => {
    switch (evaluation) {
      case EVALUATION_STATUS.EXPERT_EVALUATED:
        return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en
        gebaseerd op een analyse van een web accessibility specialist,
        gecertificeerd door the International Association of Accessibility
        Professionals (IAAP).`;
        break;
      case EVALUATION_STATUS.SELF_EVALUATED:
        return html`Deze toegankelijkheidsverklaring is opgesteld op ${date} en
        gebaseerd op een analyse van Departement Omgeving.`;
        break;
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
    <h3 is="vl-h3">Opstelling van deze toegankelijkheidsverklaring</h3>
    <p>
      ${setupStatementTemplate()} Deze toegankelijkheidsverklaring is voor het
      laatst herzien op ${dateModified}.
    </p>
  </div>`;
};
