import { html, nothing } from "lit";
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from "../../enums";

export const inaccessibleContent = ({
  compliance,
  evaluation,
  parsedLimitations,
}) => {
  const inaccessibleContentTemplate = () => {
    if (evaluation === EVALUATION_STATUS.NOT_EVALUATED) {
      return html`De niet-toegankelijke inhoud is onbekend omdat de website niet
      is getest.`;
    }
    if (compliance === COMPLIANCE_STATUS.FULLY_COMPLIANT) {
      return html`Er is geen niet-toegankelijke inhoud omdat de website volledig
      toegankelijk is.`;
    }
    return html`
      <vl-typography>
        <p>
          De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):
        </p>
        ${parsedLimitations &&
        parsedLimitations.withTiming &&
        html`<h3>Niet-naleving van het bestuursdecreet</h3>
          <ul>
            ${parsedLimitations.withTiming.map(
              (limitation) => html`<li><p>${limitation}</p></li>`
            )}
          </ul>`}
        ${parsedLimitations &&
        parsedLimitations.withoutTiming &&
        html`<h3>Onevenredige last</h3>
          <ul>
            ${parsedLimitations.withoutTiming.map(
              (limitation) => html`<li><p>${limitation}</p></li>`
            )}
          </ul>`}
        <h3>
          De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving
        </h3>
      </vl-typography>
    `;
  };
  return html`<div
    style=${compliance === COMPLIANCE_STATUS.FULLY_COMPLIANT && "display: none"}
    id="inaccessible-content"
    is="vl-column"
    data-vl-size="12"
    data-vl-medium-size="12"
  >
    <h2 is="vl-h2">Niet-toegankelijke inhoud</h2>
    ${inaccessibleContentTemplate()}
  </div>`;
};
