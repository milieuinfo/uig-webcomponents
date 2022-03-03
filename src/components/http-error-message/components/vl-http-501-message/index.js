import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from '../../../button/styles.scss';

export class VlHttp501Message extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  render() {
    return html`
      <vl-http-error-message
        data-vl-title="Verzoek niet ondersteund"
        data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
        data-vl-image-alt="Niet ondersteund"
      >
        <p slot="text">
          Er ging iets fout. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 501">Mail de helpdesk</a> en
          vermeld daarbij de URL hierboven en de foutcode 501.
        </p>
        <div slot="actions">
          <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>
      </vl-http-error-message>
    `;
  }
}
