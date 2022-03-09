import { html, css, LitElement, unsafeCSS } from 'lit';
import '../../../properties';
import '../../../typography';
import styles from '../../styles.scss';

export class VlCookie extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      title: { type: String, attribute: 'data-vl-title', reflect: true },
      names: { type: Array },
      purpose: { type: String, attribute: 'data-vl-purpose', reflect: true },
      domain: { type: String, attribute: 'data-vl-domain', reflect: true },
      processor: { type: String, attribute: 'data-vl-processor', reflect: true },
      validity: { type: String, attribute: 'data-vl-validity', reflect: true },
    };
  }

  constructor() {
    super();
    this.names = [];
  }

  render() {
    return html`<vl-properties>
      <h3>${this.title}</h3>
      <dl is="vl-properties-list">
        <dt is="vl-property-term">Naam</dt>
        <dd is="vl-property-value">
          ${this.names.length > 1
            ? html`<vl-typography>
                <ul>
                  ${this.names.map((name) => html`<li>${name}</li>`)}
                </ul>
              </vl-typography>`
            : this.names[0]}
        </dd>
        <dt is="vl-property-term">Doel</dt>
        <dd is="vl-property-value">${this.purpose}</dd>
        <dt is="vl-property-term">Type</dt>
        <dd is="vl-property-value">Cookie</dd>
        <dt is="vl-property-term">Domein</dt>
        <dd is="vl-property-value">${this.domain}</dd>
        <dt is="vl-property-term">Verwerker</dt>
        <dd is="vl-property-value">${this.processor}</dd>
        <dt is="vl-property-term">Geldigheid</dt>
        <dd is="vl-property-value">${this.validity}</dd>
      </dl>
    </vl-properties>`;
  }
}
customElements.define('vl-cookie', VlCookie);
