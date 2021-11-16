import { nativeVlElement, define } from "../../../../utils/core/";

/**
 * VlFormGroup
 * @class
 * @classdesc Formulier groep element.
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form.html|Demo}
 *
 */
export class VlFormGroup extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this._addClasses();
  }

  _addClasses() {
    this.classList.add("vl-form__group");
  }
}

define("vl-form-group", VlFormGroup, { extends: "div" });
