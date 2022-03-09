import { html, LitElement } from 'lit';
import '../cookie';

export class VlStickySessionCookie extends LitElement {
  render() {
    return html`<vl-cookie
      .title=${'Persistentie sessie cookie voor betere gebruikerservaring'}
      .names=${[
        'BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")',
        'BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")',
      ]}
      .purpose=${'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.'}
      .domain=${window.location.hostname}
      .processor=${'Departement Omgeving'}
      .validity=${'Beperkt tot de duur van de sessie'}
    ></vl-cookie>`;
  }
}

customElements.define('vl-sticky-session-cookie', VlStickySessionCookie);
