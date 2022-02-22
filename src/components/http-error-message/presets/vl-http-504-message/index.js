import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-504-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Tijdelijk niet bereikbaar',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Tijdelijk niet bereikbaar',
        text: `<p>De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen: <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 504">mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 504.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
