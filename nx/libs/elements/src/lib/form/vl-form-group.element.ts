import { vlElement, define } from "@uig/common/utilities";

/**
 * VlFormGroup
 * @class
 * @classdesc Formulier groep element.
 *
 * @extends HTMLElement
 */
export class VlFormGroup extends vlElement(HTMLDivElement) {
  connectedCallback() {
    this._addClasses();
  }

  _addClasses() {
    this.classList.add("vl-form__group");
  }
}

define("vl-form-group", VlFormGroup, { extends: "div" });
