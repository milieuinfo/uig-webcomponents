import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlPropertiesColumn
 * @class
 * @classdesc De properties kolom webcomponent wordt gebruikt om lijsten van kenmerken van een onderwerp te verdelen in verschillende kolommen.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-full - Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertiesColumn extends nativeVlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return ["full"];
  }

  connectedCallback() {
    this.classList.add("vl-properties__column");
  }

  get _classPrefix() {
    return "vl-properties__column--";
  }
}

define("vl-properties-column", VlPropertiesColumn, { extends: "div" });
