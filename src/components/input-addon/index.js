import { define } from "../../utils/core/";
import { vlInputAddonElement } from "./mixin";
import "./components/button-input-addon";

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

define("vl-input-addon", VlInputAddon, { extends: "p" });
