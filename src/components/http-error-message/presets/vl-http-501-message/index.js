import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-501-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Verzoek niet ondersteund',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Niet ondersteund',
        text: `<p>Er ging iets fout. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 501">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 501.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
