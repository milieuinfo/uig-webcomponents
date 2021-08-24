import { nativeVlElement, define } from "../../utils/vl-core";

/**
 * VlIconWrapper
 * @class
 * @classdesc Gebruik de vl-icon-wrapper als parent element om al de iconen verticaal te aligneren.
 *
 * @extends HTMLParagraphElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-icon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-icon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-icon.html|Demo}
 */
export class VlIconWrapper extends nativeVlElement(HTMLParagraphElement) {
  connectedCallback() {
    this._addClass();
  }

  _addClass() {
    this.classList.add("vl-icon-wrapper");
  }
}

define("vl-icon-wrapper", VlIconWrapper, { extends: "p" });
