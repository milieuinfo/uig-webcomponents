import { nativeVlElement, define } from "../../utils/core/";

/**
 * Gebruik de input addon mixin in combinatie met een input addon elementen.
 * @mixin vlInputAddonElement
 *
 * @param {Object} SuperClass
 * @return {Object} SuperClass
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 */
export const vlInputAddonElement = (SuperClass) => {
  return class extends nativeVlElement(SuperClass) {
    connectedCallback() {
      this.classList.add("vl-input-addon");
    }
  };
};

export const VlInputAddonElement = vlInputAddonElement;

/**
 * VlInput-addon
 * @class
 * @classdesc Gebruik de input-addon in combinatie met de vl-ui-input-group webcomponent. Deze combinatie zorgt ervoor dat de gebruiker extra informatie ontvangt over de inhoud of de vorm van de inhoud dat ingevuld moet worden.
 *
 * @extends HTMLParagraphElement
 * @mixes vlInputAddonElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 *
 */
export class VlInputAddon extends vlInputAddonElement(HTMLParagraphElement) { }

/**
 * VlButtonInputAddon
 * @class
 * @classdesc Gebruik de vl-button-input-addon in combinatie met de vl-input-group webcomponent. Deze combinatie zorgt er voor dat men een button heeft die naast de input in vl-input-group staat.
 *
 * @extends HTMLButtonElement
 * @mixes vlInputAddonElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 *
 */
export class VlButtonInputAddon extends vlInputAddonElement(
  HTMLButtonElement
) { }

define("vl-input-addon", VlInputAddon, { extends: "p" });
define("vl-button-input-addon", VlButtonInputAddon, { extends: "button" });
