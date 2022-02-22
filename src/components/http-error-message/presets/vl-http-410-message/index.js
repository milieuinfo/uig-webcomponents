import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp410Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Pagina bestaat niet meer',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg',
      imageAlt: 'Verzoek bestaat niet meer',
      text: `<p>Deze pagina bestaat niet meer. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 410">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 410.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
}
