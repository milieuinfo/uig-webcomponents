import { define } from "@uig/common/utilities";
import { VlTitleBaseElement } from "./base/vl-title-base.element";

export class VlH3Element extends VlTitleBaseElement {}

define("vl-h3", VlH3Element, { extends: "h3" });