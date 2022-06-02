import { VlMapModifyAction } from '../..';
import { define } from '../../../../../../../../utils/core';

export class VlTestCustomMapModifyAction extends VlMapModifyAction {
  appliesTo(feature, layer) {
    return feature.id.startsWith('1') && layer.id.startsWith('1');
  }
}

define('vl-custom-map-modify-action', VlTestCustomMapModifyAction);
