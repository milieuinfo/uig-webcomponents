import { define } from "@uig/common/utilities";
import { VlTitleBaseElement } from "./base/vl-title-base.element";

export class VlH2Element extends VlTitleBaseElement {}

define("vl-h2", VlH2Element, { extends: "h2" });