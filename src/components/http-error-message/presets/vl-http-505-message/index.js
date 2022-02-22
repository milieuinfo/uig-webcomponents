import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-505-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'HTTP-versie niet ondersteund',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Niet ondersteunde HTTP versie',
        text: `<p>De HTTP-versie van uw verzoek wordt niet ondersteund door onze server. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 505">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 505.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
