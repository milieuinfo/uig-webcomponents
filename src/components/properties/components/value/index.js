import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlPropertyValue
 * @class
 * @classdesc De property waarde webcomponent toont de waarde van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertyValue extends nativeVlElement(HTMLElement) {
  connectedCallback() {
    this.classList.add("vl-properties__data");
  }
}

define("vl-property-value", VlPropertyValue, { extends: "dd" });
