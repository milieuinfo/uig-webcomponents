import { vlElement, define } from "@uig/common/utilities";
import "./vl-form-group.element";

/**
 * VlForm
 * @class
 * @classdesc Formulier element.
 *
 * @extends HTMLElement
 *
 * @property {boolean} data-vl-validate - Attribuut wordt gebruikt om aan te geven dat de input velden validatie geactiveerd moet worden.
 */
export class VlFormElement extends vlElement(HTMLFormElement) {
  static get _observedAttributes() {
    return ["target", "action", "validate"];
  }

  static get _targetElementName() {
    return "hidden-form-target";
  }

  connectedCallback() {
    this._process();
    this._addClasses();
  }

  get _targetElement() {
    return this.querySelector(`iframe[name="${VlFormElement._targetElementName}"]`);
  }

  _getTargetElementTemplate() {
    return this._template(
      `<iframe name="${VlFormElement._targetElementName}" width="0" height="0" border="0" hidden></iframe>`
    );
  }

  _process() {
    const targetAttributeIsMissing = !this.hasAttribute("target");
    const actionAttributeIsMissing = !this.hasAttribute("action");
    if (targetAttributeIsMissing && actionAttributeIsMissing) {
      this._addTargetElement();
    }
    this._disableNativeValidation();
  }

  _addTargetElement() {
    this.setAttribute("target", VlFormElement._targetElementName);
    this.setAttribute("action", "");
    this.appendChild(this._getTargetElementTemplate());
  }

  _removeTargetElement() {
    this.removeAttribute("target");
    this._targetElement.remove();
  }

  _targetChangedCallback(oldValue: string, newValue: string) {
    if (
      newValue &&
      newValue != VlFormElement._targetElementName &&
      this._targetElement
    ) {
      this._removeTargetElement();
    }
  }

  _actionChangedCallback(oldValue: string, newValue: string) {
    if (newValue && this._targetElement) {
      this._removeTargetElement();
    }
  }

  _validateChangedCallback(oldValue: string, newValue: string) {
    if (newValue != undefined) {
      this.setAttribute("data-validate-form", "");
    } else {
      this.removeAttribute("data-validate-form");
    }
  }

  _disableNativeValidation() {
    this.setAttribute("novalidate", "");
  }

  _addClasses() {
    this.classList.add("vl-form");
  }
}

define("vl-form", VlFormElement, { extends: "form" });
