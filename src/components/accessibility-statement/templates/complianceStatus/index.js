import { html } from 'lit';
import { wcagLink } from '..';
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from '../../enums';

export const complianceStatus = ({ compliance, evaluation }) => {
  const complianceTemplate = () => {
    switch (compliance) {
      case COMPLIANCE_STATUS.FULLY_COMPLIANT:
        return html`Deze website voldoet volledig aan de ${wcagLink()}.`;
        break;
      case COMPLIANCE_STATUS.PARTIALLY_COMPLIANT:
        return html`Deze website voldoet gedeeltelijk aan de ${wcagLink()} omdat nog niet aan de onderstaande eisen is
        voldaan.`;
        break;
      case COMPLIANCE_STATUS.NOT_COMPLIANT:
        return html`Deze website voldoet niet aan de ${wcagLink()} omdat nog niet aan de onderstaande eisen is voldaan.`;
        break;
      default:
        return null;
        break;
    }
  };
  return html`<div id="compliance-status" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
    <h3 is="vl-h3">Nalevingsstatus</h3>
    ${evaluation === EVALUATION_STATUS.NOT_EVALUATED
      ? html`Deze website voldoet niet aan de ${wcagLink()}.`
      : complianceTemplate()}
  </div>`;
};
