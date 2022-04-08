import { VlMapModifyAction } from '../..';
import { define } from "../../../../../../../../utils/core";

export class VlCustomMapModifyAction extends VlMapModifyAction {
    appliesTo(feature, layer) {
        return feature.id.startsWith('1') && layer.id.startsWith('1');
    }
}

define("vl-custom-map-modify-action", VlCustomMapModifyAction);
