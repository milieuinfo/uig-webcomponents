import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlLayout
 * @class
 * @classdesc Het layout element (vl-layout) centreert uw inhoud in de viewport. Het layout element heeft een breedte van 1200px. Je kan het layout element vergelijken met het Container element in Bootstrap.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-grid.html|Demo}
 */
export class VlLayout extends nativeVlElement(HTMLDivElement) {
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

define("vl-layout", VlLayout, { extends: "div" });
