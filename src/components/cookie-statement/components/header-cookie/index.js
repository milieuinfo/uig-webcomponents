import { define } from '/node_modules/vl-ui-core/dist/vl-core.js';
import { VlCookie } from '/src/vl-cookie.js';

/**
 * VlHeaderCookie
 * @class
 * @classdesc Header cookie beschrijving
 *
 * @extends VlCookie
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie.html|Demo}
 *
 */
export class VlHeaderCookie extends VlCookie {
  constructor() {
    super({
      title: 'Vlaanderen header cookie',
      name: 'VOGANONUSER',
      purpose:
        'De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.',
      domain: 'vlaanderen.be',
      processor: 'Vlaamse overheid',
      validity: 'Permanente cookies met een geldigheid van maximaal 24 uur',
    });
  }
}

define('vl-header-cookie', VlHeaderCookie);
