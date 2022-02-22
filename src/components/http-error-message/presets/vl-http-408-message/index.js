import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-408-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Oeps, dat duurde te lang',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Verzoek duurt te lang',
        text: `<p>Het laden van de pagina duurde te lang. Probeer het opnieuw en als het nog niet lukt: <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 408">mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 408.
      </p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
