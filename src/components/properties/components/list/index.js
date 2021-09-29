import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlPropertiesList
 * @class
 * @classdesc De properties lijst webcomponent toont een lijst van kenmerken van een onderwerp.
 *
 * @extends HTMLDListElement
 * @mixes nativeVlElement
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertiesList extends nativeVlElement(HTMLDListElement) {
  connectedCallback() {
    this.classList.add("vl-properties__list");
  }
}

define("vl-properties-list", VlPropertiesList, { extends: "dl" });
