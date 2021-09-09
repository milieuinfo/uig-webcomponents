import { vlElement, define } from "../../utils/vl-core";
import linkStyles from "../link/styles.scss";

/**
 * VlMapSideSheetMenu
 * @class
 * @classdesc De menu die verbonden is aan een side sheet.
 *
 * @extends HTMLElement
 * @mixes VlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html|Demo}
 */
export class VlMapSideSheetMenu extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        ${linkStyles}

        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `);
  }
}

define("vl-map-side-sheet-menu", VlMapSideSheetMenu);
