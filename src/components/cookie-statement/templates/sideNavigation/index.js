import { html, nothing } from 'lit';

export const sideNavigation = (isInConsent) =>
  isInConsent
    ? nothing
    : html`<div
        is="vl-column"
        data-vl-size="4"
        data-vl-medium-size="4"
        data-vl-small-size="4"
        data-vl-extra-small-size="0"
      >
        <nav is="vl-side-navigation" aria-label="inhoudsopgave">
          <h2 is="vl-side-navigation-h2">Op deze pagina</h2>
          <div is="vl-side-navigation-content">
            <ul is="vl-side-navigation-group">
              <li is="vl-side-navigation-item" data-vl-parent>
                <a is="vl-side-navigation-toggle" href="#cookie-policy">
                  Cookiebeleid
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a is="vl-side-navigation-toggle" href="#cookie-definition">
                  Wat zijn cookies precies
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a is="vl-side-navigation-toggle" href="#cookie-management">
                  Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a is="vl-side-navigation-toggle" href="#cookie-usage">
                  Gebruikte cookies
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>`;
