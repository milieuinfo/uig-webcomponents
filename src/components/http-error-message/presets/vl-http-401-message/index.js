import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-401-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Meld u eerst aan',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Niet aangemeld',
        text: `<p>Om toegang te krijgen tot deze pagina, moet u eerst aangemeld zijn. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 401">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 401.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
