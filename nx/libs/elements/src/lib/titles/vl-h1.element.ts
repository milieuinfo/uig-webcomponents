import { define } from "@uig/common/utilities";
import { VlTitle } from "./base/vl-titles-base.element";

export class VlH1 extends VlTitle{}

define("vl-h1", VlH1, { extends: "h1" });