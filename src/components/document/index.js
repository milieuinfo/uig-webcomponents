import { vlElement, define } from "../../utils/core";
import styles from "./styles.scss";

/**
 * VlDocument
 * @class
 * @classdesc Gebruik de document component om een link naar een bestand toe te voegen dat de gebruiker kan bekijken in de browser of downloaden.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-href - Attribuut wordt gebruikt om de download link te bepalen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-document/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-document/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-document.html|Demo}
 *
 */
export class VlDocument extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ["href"];
  }

  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <a class="vl-document" href="#" download>
        <div class="vl-document__type">
          <i class="vl-vi vl-vi-document" aria-hidden="true"></i>
          <span class="vl-document__type__text">
            <slot name="type"></slot>
          </span>
        </div>
        <div class="vl-document__content">
          <div class="vl-document__title vl-link">
            <slot name="title"></slot>
          </div>
          <div class="vl-document__metadata">
            <slot name="metadata"></slot>
          </div>
        </div>
      </a>
    `);
  }

  _hrefChangedCallback(oldValue, newValue) {
    this._element.href = newValue;
  }
}

define("vl-document", VlDocument);
