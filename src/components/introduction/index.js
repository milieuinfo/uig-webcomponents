import { nativeVlElement, define } from "../../utils/core";

/**
 * VlIntroduction
 * @class
 * @classdesc Gebruik deze component als introductie van de website. Deze component krijgt een opvallende layout zodat de gebruiker zijn aandacht getrokken wordt.
 *
 * @extends HTMLParagraphElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-introduction/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-introduction/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-introduction.html|Demo}
 *
 */
export class VlIntroduction extends nativeVlElement(HTMLParagraphElement) {
  connectedCallback() {
    this.classList.add("vl-introduction");
  }
}

define("vl-introduction", VlIntroduction, { extends: "p" });
