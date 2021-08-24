import { html } from 'lit';
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from '../../enums';

export const inaccessibleContent = ({ compliance, evaluation, limitationsArray }) => {
  const temporaryLimitations = limitationsArray.filter(
    (limitationsObject) => !!limitationsObject.timing && limitationsObject,
  );
  const permanentLimitations = limitationsArray.filter(
    (limitationsObject) => limitationsObject.timing === undefined && limitationsObject,
  );
  return html`${compliance !== COMPLIANCE_STATUS.FULLY_COMPLIANT || evaluation === EVALUATION_STATUS.NOT_EVALUATED
    ? html`<div id="inaccessible-content" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h3 is="vl-h3">Niet-toegankelijke inhoud</h3>
        ${evaluation === EVALUATION_STATUS.NOT_EVALUATED
          ? 'De niet-toegankelijke inhoud is onbekend omdat de website is niet getest.'
          : html`<p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
              <vl-typography>
                <ol>
                  <li>
                    <p>Niet-naleving van het bestuursdecreet</p>
                    <ul>
                      ${temporaryLimitations.map(
                        ({ description, alternative, timing }) =>
                          html`<vl-accessibility-limitation
                            data-vl-description=${description}
                            data-vl-alternative=${alternative}
                            data-vl-timing=${timing}
                          ></vl-accessibility-limitation>`,
                      )}
                    </ul>
                  </li>
                  <li>
                    <p>Onevenredige last</p>
                    <ul>
                      ${permanentLimitations.map(
                        ({ description, alternative }) =>
                          html`<vl-accessibility-limitation
                            data-vl-description=${description}
                            data-vl-alternative=${alternative}
                          ></vl-accessibility-limitation>`,
                      )}
                    </ul>
                  </li>
                  <li>
                    <p>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</p>
                  </li>
                </ol>
              </vl-typography>`}
      </div>`
    : null}`;
};
