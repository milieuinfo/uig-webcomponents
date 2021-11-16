import { define } from "../../../../utils/core/";
import { vlInputAddonElement } from "../../mixin";

/**
 * VlButtonInputAddon
 * @class
 * @classdesc Gebruik de vl-button-input-addon in combinatie met de vl-input-group webcomponent. Deze combinatie zorgt er voor dat men een button heeft die naast de input in vl-input-group staat.
 *
 * @extends HTMLButtonElement
 * @mixes vlInputAddonElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 *
 */
export class VlButtonInputAddon extends vlInputAddonElement(
  HTMLButtonElement
) { }

define("vl-button-input-addon", VlButtonInputAddon, { extends: "button" });
