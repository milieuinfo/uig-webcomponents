import { VlMapSelectAction } from '../..';
import { define } from '../../../../../../../../utils/core';

export class VlTestCustomMapSelectAction extends VlMapSelectAction {
  appliesTo(feature, layer) {
    return feature.id.startsWith('1') && layer.id.startsWith('1');
  }
}

define('vl-custom-map-select-action', VlTestCustomMapSelectAction);
