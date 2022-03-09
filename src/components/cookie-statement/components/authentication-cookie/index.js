import { html, LitElement } from 'lit';
import '../cookie';

export class VlAuthenticationCookie extends LitElement {
  render() {
    return html`<vl-cookie
      .title=${'Departement Omgeving toegangsbeheer cookies'}
      .names=${['KEYCLOAK_SESSION', 'KEYCLOAK_SESSION_LEGACY']}
      .purpose=${'Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.'}
      .domain=${window.location.hostname}
      .processor=${'Departement Omgeving'}
      .validity=${'10 uur'}
    ></vl-cookie>`;
  }
}
customElements.define('vl-authentication-cookie', VlAuthenticationCookie);
