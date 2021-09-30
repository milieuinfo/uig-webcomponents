import { html } from "lit";
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from "../../enums";

export const inaccessibleContent = ({
  compliance,
  evaluation,
  parsedLimitations,
}) => {
  return html`${compliance !== COMPLIANCE_STATUS.FULLY_COMPLIANT ||
  evaluation === EVALUATION_STATUS.NOT_EVALUATED
    ? html`<div
        id="inaccessible-content"
        is="vl-column"
        data-vl-size="12"
        data-vl-medium-size="12"
      >
        <h3 is="vl-h3">Niet-toegankelijke inhoud</h3>
        ${evaluation === EVALUATION_STATUS.NOT_EVALUATED
          ? "De niet-toegankelijke inhoud is onbekend omdat de website niet is getest."
          : html` <vl-typography>
              <p>
                De onderstaande inhoud is niet-toegankelijk om de volgende
                reden(en):
              </p>
              ${parsedLimitations &&
              parsedLimitations.withTiming &&
              html`<h4>Niet-naleving van het bestuursdecreet</h4>
                <ul>
                  ${parsedLimitations.withTiming.map(
                    (limitation) => html`<li><p>${limitation}</p></li>`
                  )}
                </ul>`}
              ${parsedLimitations &&
              parsedLimitations.withoutTiming &&
              html`<h4>Onevenredige last</h4>
                <ul>
                  ${parsedLimitations.withoutTiming.map(
                    (limitation) => html`<li><p>${limitation}</p></li>`
                  )}
                </ul>`}
              <h4>
                De inhoud valt buiten de werkingssfeer van de toepasselijke
                wetgeving
              </h4>
            </vl-typography>`}
      </div>`
    : null}`;
};
