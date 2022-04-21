import { html, nothing } from 'lit';

export const sideNavigation = (isInConsent) =>
  isInConsent
    ? nothing
    : html` <div
        is="vl-column"
        data-vl-size="4"
        data-vl-medium-size="4"
        data-vl-small-size="4"
        data-vl-extra-small-size="0"
      >
        <nav is="vl-side-navigation" aria-label="inhoudsopgave">
          <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
          <div is="vl-side-navigation-content">
            <ul is="vl-side-navigation-group">
              <li is="vl-side-navigation-item" data-vl-parent>
                <a is="vl-side-navigation-toggle" href="#privacy-department">
                  Het Departement Omgeving en uw privacy
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a is="vl-side-navigation-toggle" href="#privacy-declaration" data-vl-child="privacy-declaration">
                  Privacyverklaring
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
                <ul>
                  <li is="vl-side-navigation-item">
                    <div>
                      <a href="#privacy-declaration-who" data-vl-parent="privacy-declaration">
                        Wie is verantwoordelijk voor de verwerking van mijn persoonsgegevens?
                      </a>
                    </div>
                  </li>
                  <li is="vl-side-navigation-item">
                    <div>
                      <a href="#privacy-declaration-process" data-vl-parent="privacy-declaration">
                        Verwerking van persoonsgegevens
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="#privacy-declaration-measures" data-vl-parent="privacy-declaration">
                        Maatregelen in het kader van de Algemene verordening Gegevensbescherming
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="#privacy-declaration-rights" data-vl-parent="privacy-declaration">
                        Uw rechten als betrokkene
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="#privacy-declaration-aplpy" data-vl-parent="privacy-declaration">
                        Toepassing van deze Privacyverklaring
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a
                  is="vl-side-navigation-toggle"
                  href="#privacy-permissions-protocols"
                  data-vl-parent="privacy-permissions-protocols"
                >
                  Machtigingen en protocollen
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
                <ul>
                  <li is="vl-side-navigation-item">
                    <div>
                      <a href="#privacy-permissions-protocols-process" data-vl-parent="privacy-permissions-protocols">
                        Machtigingen van de bevoegde autoriteiten en afgesloten protocollen voor het verwerken van
                        bepaalde gegevens
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>`;
