import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp412Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Voorwaarden voldoen niet',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Voorwaarden niet voldaan',
      text: `<p>Er ging iets fout. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 412">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 412.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
}
