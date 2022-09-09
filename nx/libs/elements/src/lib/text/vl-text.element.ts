import { vlElement, define } from "@uig/common/utilities";

export class VlText extends vlElement(HTMLSpanElement) {
  static get _observedClassAttributes() {
    return ["visually-hidden"];
  }

  get _classPrefix() {
    return "vl-u-";
  }
}

define("vl-text", VlText, { extends: "span" });
