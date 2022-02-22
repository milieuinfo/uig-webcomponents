import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp414Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'URL te groot',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'URI te groot',
      text: `<p>Er ging iets fout. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 414">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 414.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
}
