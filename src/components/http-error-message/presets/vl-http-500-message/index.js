import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp500Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Interne fout',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Onverwachte fout',
      text: `<p>Er ging iets fout. Probeer het nog eens. Lukt het nog niet, <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 500">mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 500.</p>`,
      actions: `<a is="vl-link-button" href="${document.referrer}">Terug naar de pagina</a>`,
    });
  }
}
