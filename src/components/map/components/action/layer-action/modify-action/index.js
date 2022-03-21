import { define } from "../../../../../../utils/core";
import { VlMapLayerAction } from "../../layer-action";
import { VlModifyAction } from "vl-mapactions/dist/vl-mapactions.js";
import { VlMapVectorLayer } from "../../../layer/vector-layer";
import { VlCompositeVectorLayer } from "vl-mapactions/dist/vl-mapactions.js";

/**
 * VlMapModifyAction
 * @class
 * @classdesc De kaart aanpas actie component.
 *
 * @extends VlMapLayerAction
 *
 * @property {string} [data-vl-snapping] - Attribuut wordt gebruikt om aan te geven dat er bij het bewerken snapping mag gebeuren op de meegegeven vl-map-wfs-layers.
 * @property {number} [data-vl-snapping-pixel-tolerance=10] - Attribuut om aan te geven binnen de hoeveel pixel van een feature er gesnapped mag worden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-modify-actions.html|Demo}
 */
export class VlMapModifyAction extends VlMapLayerAction {
  /**
   * Zet de functie die wordt uitgevoerd na het uitvoeren van de aanpas actie
   *
   * @param {Function} callback functie met volgende argumenten:
   *                            - {ol.Feature} de aangepaste feature
   *                            - {Function} reject callback met argument de aangepaste feature waarbij de feature terug op zijn oorspronkelijke staat wordt gezet
   */
  onModify(callback) {
    this.__callback = callback;
  }

  _createAction(layer) {
    const options = {
      snapping: this.__snappingOptions,
    };
    return new VlModifyAction(layer, this._callback, options);
  }

  get __snappingOptions() {
    if (this.dataset.vlSnapping !== undefined && this.__snappingLayers.length > 0) {
      return {
        layer: this.__createSnappingLayer(),
        pixelTolerance: this.dataset.vlSnappingPixelTolerance || 10,
        node: false,
        vertex: false,
      };
    } else {
      return true;
    }
  }

  __createSnappingLayer() {
    const snappingLayer = new VlCompositeVectorLayer(
        this.__snappingLayers.map((layer) => layer._layer),
        {}
    );
    const firstVectorLayer = this.__snappingLayers[0];
    snappingLayer.setStyle(firstVectorLayer.style);
    firstVectorLayer.addEventListener(
        VlMapVectorLayer.EVENTS.styleChanged,
        (event) => {
          snappingLayer.setStyle(event.target.style);
        }
    );
    return snappingLayer;
  }

  get __snappingLayers() {
    return Array.from(this.querySelectorAll("vl-map-wfs-layer"));
  }
}

define("vl-map-modify-action", VlMapModifyAction);
