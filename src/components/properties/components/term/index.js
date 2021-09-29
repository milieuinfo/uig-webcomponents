import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlPropertyTerm
 * @class
 * @classdesc De property kenmerk webcomponent toont de beschrijving van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertyTerm extends nativeVlElement(HTMLElement) {
  connectedCallback() {
    this.classList.add("vl-properties__label");
  }
}

define("vl-property-term", VlPropertyTerm, { extends: "dt" });
