import { define } from "@uig/common/utilities";
import { vlInputAddonBaseElement } from "./base/vl-input-addon-base.element";
import "./vl-button-input-addon.element";

export const VlInputAddon = vlInputAddonBaseElement;

/**
 * VlInput-addon
 * @class
 * @classdesc Gebruik de input-addon in combinatie met de vl-ui-input-group webcomponent. Deze combinatie zorgt ervoor dat de gebruiker extra informatie ontvangt over de inhoud of de vorm van de inhoud dat ingevuld moet worden.
 *
 * @extends HTMLParagraphElement
 * @mixes vlInputAddonElement
 */
export class VlInputAddonElement extends vlInputAddonBaseElement(HTMLParagraphElement) { }

define("vl-input-addon", VlInputAddonElement, { extends: "p" });
