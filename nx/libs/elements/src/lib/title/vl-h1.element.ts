import { define } from "@uig/common/utilities";
import { VlTitleBaseElement } from "./base/vl-title-base.element";

export class VlH1Element extends VlTitleBaseElement{}

define("vl-h1", VlH1Element, { extends: "h1" });