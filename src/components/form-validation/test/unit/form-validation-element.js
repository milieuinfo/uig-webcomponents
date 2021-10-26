import { vlElement, define } from "../../../../utils/core";
import {
  vlFormValidation,
  vlFormValidationElement,
} from "../../../form-validation";

vlFormValidation
  .ready()
  .then(() =>
    define("vl-form-validation-element", VlFormValidationHTMLElement)
  );

class VlFormValidationHTMLElement extends vlFormValidationElement(
  vlElement(HTMLElement)
) {
  static get _observedAttributes() {
    return vlFormValidation._observedAttributes();
  }

  constructor() {
    super(`
      <div>
        <input type="text"/>
      </div>
    `);
  }

  connectedCallback() {
    this._dressFormValidation();
  }

  set value(value) {
    this._inputElement.value = value;
  }
}
