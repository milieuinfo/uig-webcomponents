import { nativeVlElement, define } from "../../utils/core";

/**
 * VlBody
 * @class
 * @classdesc
 *
 * @extends HTMLBodyElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-body/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-body/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-body.html|Demo}
 *
 */
export class VlBody extends nativeVlElement(HTMLBodyElement) {
  connectedCallback() {
    this.classList.add("vl-u-sticky-gf");
  }
}

define("vl-body", VlBody, { extends: "body" });
