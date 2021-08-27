import { nativeVlElement, define } from "./index";

export class VlText extends nativeVlElement(HTMLSpanElement) {
  static get _observedClassAttributes() {
    return ["visually-hidden"];
  }

  get _classPrefix() {
    return "vl-u-";
  }
}

define("vl-text", VlText, { extends: "span" });
