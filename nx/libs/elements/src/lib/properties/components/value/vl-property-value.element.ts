import { vlElement, define } from "@uig/common/utilities";

/**
 * VlPropertyValue
 * @class
 * @classdesc De property waarde webcomponent toont de waarde van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 */
export class VlPropertyValueElement extends vlElement(HTMLElement) {
  connectedCallback() {
    this.classList.add("vl-properties__data");
  }
}

define("vl-property-value", VlPropertyValueElement, { extends: "dd" });
