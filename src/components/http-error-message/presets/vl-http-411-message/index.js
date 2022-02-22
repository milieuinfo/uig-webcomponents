import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp411Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Onvolledig verzoek',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verzoek onvolledig',
      text: `<p>Er ontbreekt blijkbaar iets. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 411">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 411.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
}
