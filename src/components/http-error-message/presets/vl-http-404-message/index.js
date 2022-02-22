import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-404-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Pagina niet gevonden',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg',
        imageAlt: 'Pagina niet gevonden',
        text: `<p>We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link of website op deze pagina gekomen. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 404">Mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 404.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
