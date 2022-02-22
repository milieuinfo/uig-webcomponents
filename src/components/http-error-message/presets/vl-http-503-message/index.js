import { VlHttpErrorMessage } from '../../http-error-message';

export class VlHttp503Message extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'De website is tijdelijk niet beschikbaar',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Tijdelijk niet beschikbaar',
      text: `<p>Probeer later opnieuw. Heb je vragen: <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 503">mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 503.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
}
