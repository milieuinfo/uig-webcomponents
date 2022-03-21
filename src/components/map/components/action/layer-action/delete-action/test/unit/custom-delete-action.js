import { VlMapDeleteAction } from '../..';
import { define } from "../../../../../../../../utils/core";

export class VlCustomMapDeleteAction extends VlMapDeleteAction {
    appliesTo(feature, layer) {
        return feature.id.startsWith('1') && layer.id.startsWith('1');
    }
}

define("vl-custom-map-delete-action", VlCustomMapDeleteAction);
