import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-400-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Oeps, dat ging fout',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Verkeerd verzoek',
        text: `<a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 400">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 400.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
