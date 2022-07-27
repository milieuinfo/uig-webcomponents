import { define } from "@uig/common/utilities";
import { VlTitle } from "./base/vl-titles-base.element";

export class VlH2 extends VlTitle {}

define("vl-h2", VlH2, { extends: "h2" });