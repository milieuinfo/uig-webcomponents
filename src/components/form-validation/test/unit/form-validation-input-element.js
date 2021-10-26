import { nativeVlElement, define } from "../../../../utils/core";
import {
  vlFormValidation,
  vlFormValidationElement,
} from "../../../form-validation";

vlFormValidation
  .ready()
  .then(() =>
    define("vl-form-validation-input", VlFormValidationInput, {
      extends: "input",
    })
  );

class VlFormValidationInput extends vlFormValidationElement(
  nativeVlElement(HTMLInputElement)
) {
  static get _observedAttributes() {
    return vlFormValidation._observedAttributes();
  }

  connectedCallback() {
    this._dressFormValidation();
  }
}
