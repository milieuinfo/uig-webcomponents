import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp413Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Limiet overschreden',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verzoek te groot',
      text: `<p>Er ging iets fout. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 413">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 413.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
}
