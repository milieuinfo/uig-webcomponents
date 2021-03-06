import { nativeVlElement, define } from "../../utils/core/";

/**
 * VlInputGroup
 * @class
 * @classdesc Gebruik vl-ui-input-group om een 'input field' en een 'input add-on' te combineren. Bijvoorbeeld: de 'vl-datepicker' component combineert een 'input field' en een 'input add-on' in een 'input group'.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-group/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-group/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-group.html|Demo}
 */
export class VlInputGroup extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this.classList.add("vl-input-group");
  }
}

define("vl-input-group", VlInputGroup, { extends: "div" });
