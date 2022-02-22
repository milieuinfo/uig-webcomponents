import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp403Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Geen toegang tot deze pagina',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Onvoldoende rechten',
      text: `<p>U heeft daarvoor onvoldoende rechten. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 403">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 403.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
}
