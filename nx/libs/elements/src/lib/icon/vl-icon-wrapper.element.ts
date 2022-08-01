import { vlElement, define } from '@uig/common/utilities';

/**
 * VlIconWrapper
 * @class
 * @classdesc Gebruik de vl-icon-wrapper als parent element om al de iconen verticaal te aligneren.
 *
 * @extends HTMLParagraphElement
 * @mixes nativeVlElement
 */
export class VlIconWrapperElement extends vlElement(HTMLSpanElement) {
  connectedCallback() {
    this._addClass();
  }

  _addClass() {
    this.classList.add("vl-icon-wrapper");
  }
}

define("vl-icon-wrapper", VlIconWrapperElement, { extends: "span" });
