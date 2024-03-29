import { vlElement, define } from "@uig/common/utilities";

/**
 * VlLayout
 * @class
 * @classdesc Het layout element (vl-layout) centreert uw inhoud in de viewport. Het layout element heeft een breedte van 1200px. Je kan het layout element vergelijken met het Container element in Bootstrap.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
export class VlLayoutElement extends vlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return [];
  }

  connectedCallback() {
    this.classList.add("vl-layout");
  }

  get _classPrefix() {
    return "vl-layout--";
  }
}

define("vl-layout", VlLayoutElement, { extends: "div" });
