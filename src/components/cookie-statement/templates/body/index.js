import { html, nothing } from 'lit';
import { conditionalNavRef } from '../../../../templates';

export const body = (reference) => html`
  ${conditionalNavRef(
    !reference.isInConsent,
    html`<div is="vl-grid" data-vl-is-stacked-large>
      <div id="cookie-policy" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Cookiebeleid</h2>
        <p>
          Departement Omgeving (verder ‘dOMG’) vindt het belangrijk dat u op iedere plaats en elk ogenblik haar
          dOMG-inhoud kan bekijken, beluisteren, lezen of beleven via diverse mediaplatformen. dOMG wil ook werken aan
          interactieve diensten en diensten op uw maat. Op dOMG-onlinediensten worden technieken gehanteerd om dit
          mogelijk te maken, bijvoorbeeld met behulp van cookies en scripts. Deze technieken worden hierna
          gemakkelijkheidshalve cookies genoemd. In dit cookiebeleid wenst dOMG u te informeren welke cookies worden
          gebruikt en waarom dit gebeurt. Verder wordt toegelicht in welke mate u als gebruiker het gebruik kan
          controleren. dOMG wil namelijk graag uw privacy en de gebruiksvriendelijkheid van haar onlinediensten zoveel
          mogelijk waarborgen.
        </p>
        <br />
        <p>
          Dit cookiebeleid is van toepassing op alle 'dOMG-onlinediensten', met name alle websites, (mobiele)
          applicaties en internetdiensten die dOMG aanbiedt en die toegang geven tot dOMG-inhoud.
        </p>
        <br />
        <p>
          dOMG kan het cookiebeleid op elk moment veranderen. Dat kan bijvoorbeeld gebeuren in het kader van
          veranderingen aan haar diensten of de geldende wetgeving. Het gewijzigde beleid wordt dan bekendgemaakt op de
          relevante onlinediensten en geldt vanaf het moment dat deze bekendgemaakt wordt.
        </p>
      </div>

      <div id="cookie-definition" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Wat zijn cookies precies?</h2>
        <p>
          Cookies zijn kleine gegevens- of tekstbestanden die op uw computer of mobiele apparaat worden geïnstalleerd
          wanneer u een website bezoekt of een (mobiele) toepassing gebruikt. Het cookiebestand bevat een unieke code
          waarmee uw browser herkend kan worden tijdens het bezoek aan de online service of tijdens opeenvolgende,
          herhaalde bezoeken. Cookies kunnen worden geplaatst door de server van de website of applicatie die u bezoekt,
          maar ook door servers van derden die al dan niet met deze website of applicatie samenwerken.
        </p>
        <br />
        <p>
          Cookies maken over het algemeen de interactie tussen de bezoeker en de website of applicatie gemakkelijker en
          sneller en helpen de bezoeker om te navigeren tussen de verschillende delen van een website of applicatie.
        </p>
      </div>

      <div id="cookie-management" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?</h2>
        <vl-typography>
          <p>
            U kunt de installatie van cookies weigeren via uw browserinstellingen. U kunt op elk gewenst moment ook de
            reeds geïnstalleerde cookies van uw computer of mobiele apparaat verwijderen. Instructies vindt u op de
            website van uw browser:
          </p>
          <ul>
            <li>
              <a
                is="vl-link"
                href="https://support.microsoft.com/nl-be/help/17479/windows-internet-explorer-11-change-security-privacy-settings"
                target="_blank"
                >Microsoft Internet Explorer<span is="vl-icon" data-vl-icon="external" data-vl-after></span
              ></a>
            </li>
            <li>
              <a
                is="vl-link"
                href="https://support.microsoft.com/nl-nl/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
                target="_blank"
                >Microsoft Edge<span is="vl-icon" data-vl-icon="external" data-vl-after></span
              ></a>
            </li>
            <li>
              <a
                is="vl-link"
                href="http://support.google.com/chrome/bin/answer.py?hl=nl&amp;answer=95647"
                target="_blank"
                >Google Chrome<span is="vl-icon" data-vl-icon="external" data-vl-after></span
              ></a>
            </li>
            <li>
              <a
                is="vl-link"
                href="http://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren?redirectlocale=nl&amp;redirectslug=Cookies+in-+en+uitschakelen"
                target="_blank"
                >Mozilla Firefox<span is="vl-icon" data-vl-icon="external" data-vl-after></span
              ></a>
            </li>
            <li>
              <a is="vl-link" href="http://support.apple.com/kb/PH5042" target="_blank"
                >Apple Safari<span is="vl-icon" data-vl-icon="external" data-vl-after></span
              ></a>
            </li>
          </ul>
          <p>
            Wanneer u cookies uitschakelt, moet u er rekening mee houden dat bepaalde grafische elementen er niet mooi
            kunnen uitzien, of dat u bepaalde toepassingen niet kunt gebruiken. Hieronder vindt u een gedetailleerde
            lijst van alle cookies die in deze website of toepassing worden gebruikt.
          </p>
        </vl-typography>
        ${reference.isInContext
          ? html`
              <br />
              <button
                is="vl-button"
                @click=${() => {
                  reference.dispatchEvent(
                    new CustomEvent('vl-click-preferences-button', {
                      bubbles: true,
                    }),
                  );
                }}
              >
                Beheer uw cookievoorkeuren
              </button>
            `
          : nothing}
      </div>
      <div id="cookie-usage" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Gebruikte cookies</h2>
        <vl-header-cookie></vl-header-cookie>
        <vl-header-authentication-cookie></vl-header-authentication-cookie>
        <vl-authentication-cookie></vl-authentication-cookie>
        <vl-jsessionid-cookie></vl-jsessionid-cookie>
        <vl-sticky-session-cookie></vl-sticky-session-cookie>
        ${reference.extraCookies.map(
          (cookie) =>
            html`<vl-cookie
              .names=${cookie.names}
              .domain=${cookie.domain}
              .processor=${cookie.processor}
              .purpose=${cookie.purpose}
              .title=${cookie.title}
              .validity=${cookie.validity}
            ></vl-cookie>`,
        )}
        <slot></slot>
      </div>
    </div>`,
  )}
`;
