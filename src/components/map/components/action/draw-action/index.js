import { VlMapLayerAction } from '../layer-action';
import { VlMapVectorLayer } from '../../layer/vector-layer';
import { VlCompositeVectorLayer } from '../../composite-vector-layer';

export class VlMapDrawAction extends VlMapLayerAction {
  /**
   * Set the function to be executed after executing the draw action
   *
   * @param {Function} callback function with the following arguments:
   *                            - {ol.Feature} the drawn feature
   *                            - {Function} reject callback without argument where the feature is removed again
   */
  onDraw(callback) {
    this.__callback = callback;
  }

  get __drawOptions() {
    if (this.dataset.vlSnapping !== undefined) {
      if (this.__snappingLayers.length == 0) {
        return { snapping: true };
      }
      return {
        snapping: {
          layer: this.__createSnappingLayer(),
          pixelTolerance: this.dataset.vlSnappingPixelTolerance || 10,
          node: false,
          vertex: false,
        },
      };
    }
    return {};
  }

  __createSnappingLayer() {
    const snappingLayer = new VlCompositeVectorLayer(
      this.__snappingLayers.map((layer) => layer._layer),
      {},
    );
    const firstVectorLayer = this.__snappingLayers[0];
    snappingLayer.setStyle(firstVectorLayer.style);
    firstVectorLayer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, (event) => {
      snappingLayer.setStyle(event.target.style);
    });
    return snappingLayer;
  }

  get __snappingLayers() {
    return Array.from(this.querySelectorAll('vl-map-wfs-layer'));
  }
}
