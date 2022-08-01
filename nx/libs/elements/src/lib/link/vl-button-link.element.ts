import { define } from '@uig/common/utilities';
import { vlLinkBaseElement} from "./base/vl-link-base.element";

/**
 * VlButtonLink
 * @class
 * @classdesc Een button gestyled als link.
 *
 * @extends HTMLButtonElement
 * @mixes vlLinkElement
 *
 * @property {string} data-vl-block - Attribuut zorgt ervoor dat het element als block getoond wordt.
 * @property {string} data-vl-error - Attribuut zorgt ervoor dat het element als error getoond wordt.
 */

export class VlButtonLinkElement extends vlLinkBaseElement(HTMLButtonElement) {}

define("vl-button-link", VlButtonLinkElement, { extends: "button" });
