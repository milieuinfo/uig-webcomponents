import { define } from '../../../../utils/core';
import { VlHttpErrorMessage } from '../../index';

define(
  'vl-http-506-message',
  class extends VlHttpErrorMessage {
    constructor() {
      super({
        title: 'Interne configuratiefout',
        image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
        imageAlt: 'Interne configuratiefout',
        text: `<p>Er ging iets fout. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 506">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 506.</p>`,
        actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
      });
    }
  },
);
