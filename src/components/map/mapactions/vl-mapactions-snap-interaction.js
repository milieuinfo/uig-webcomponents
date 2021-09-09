import Snap from 'ol/interaction/Snap';

export class VlSnapInteraction extends Snap {
  constructor(source, options = {}) {
    const snapOptions = Object.assign({}, options);
    snapOptions.source = source;
    snapOptions.pixelTolerance = options.pixelTolerance || 7;
    super(snapOptions);
  }
}
