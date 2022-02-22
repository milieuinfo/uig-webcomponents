import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-415-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Mediatype niet ondersteund',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Media type niet ondersteund',
        text: `<p>Het mediatype van de gevraagde gegevens wordt niet ondersteund door de server. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 415">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 415.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
