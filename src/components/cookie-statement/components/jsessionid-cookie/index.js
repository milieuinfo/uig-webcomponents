import { html, LitElement } from 'lit';
import '../cookie';

export class VlJSessionIdCookie extends LitElement {
  render() {
    return html`<vl-cookie
      .title=${'Sessie cookie voor betere gebruikerservaring'}
      .names=${['JSESSIONID', 'KEYCLOAK_IDENTITY', 'KEYCLOAK_IDENTITY_LEGACY']}
      .purpose=${'De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.'}
      .domain=${window.location.hostname}
      .processor=${'Departement Omgeving'}
      .validity=${'Beperkt tot de duur van de sessie'}
    ></vl-cookie>`;
  }
}

customElements.define('vl-jsessionid-cookie', VlJSessionIdCookie);
