import { define } from "@uig/common/utilities";
import { vlInputAddonBaseElement } from "./base/vl-input-addon-base.element";

/**
 * VlButtonInputAddon
 * @class
 * @classdesc Gebruik de vl-button-input-addon in combinatie met de vl-input-group webcomponent. Deze combinatie zorgt er voor dat men een button heeft die naast de input in vl-input-group staat.
 *
 * @extends HTMLButtonElement
 * @mixes vlInputAddonElement
 *
 */
export class VlButtonInputAddon extends vlInputAddonBaseElement (
  HTMLButtonElement
) { }

define("vl-button-input-addon", VlButtonInputAddon, { extends: "button" });
