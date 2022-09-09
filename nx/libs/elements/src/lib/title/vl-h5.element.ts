import { define } from "@uig/common/utilities";
import { VlTitleBaseElement } from "./base/vl-title-base.element";

export class VlH5Element extends VlTitleBaseElement {}

define("vl-h5", VlH5Element, { extends: "h5" });