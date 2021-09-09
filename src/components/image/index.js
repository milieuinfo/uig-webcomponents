import { nativeVlElement, define } from "../../utils/core";

/**
 * VlImage
 * @class
 * @classdesc Gebruik de image component om illustratiens, graphics, tekeningen, foto's, etc. te tonen op je site.
 *
 * @extends HTMLImageElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-image/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-image/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-image.html|Demo}
 *
 */
export class VlImage extends nativeVlElement(HTMLImageElement) {
  connectedCallback() {
    this.classList.add("vl-image");
    if (!this.alt) {
      this.alt = "";
    }
  }
}

define("vl-image", VlImage, { extends: "img" });
