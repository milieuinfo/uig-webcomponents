import { define } from "../../../../../../utils/core";
import { VlMapLayerAction } from "../../layer-action";
import { VlMapLayerStyle } from "../../../layer-style";
import { VlSelectAction } from "vl-mapactions/dist/vl-mapactions.js";

/**
 * VlMapSelectAction
 * @class
 * @classdesc De kaart selecteer actie component.
 *
 * @property {boolean} data-vl-cluster - Attribuut geeft aan of de features geclusterd zijn of niet.
 *
 * @extends VlMapLayerAction
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-select-action.html|Demo}
 */
export class VlMapSelectAction extends VlMapLayerAction {
  /**
   * Geeft de stijl die een geselecteerd feature zal krijgen.
   *
   * @return {Object} de stijl
   */
  get style() {
    return this._style;
  }

  /**
   * Zet de stijl die een geselecteerde feature zal krijgen.
   *
   * @param {VlMapLayerStyle|Object} style - de stijl: een VlMapLayerStyle of een OpenLayers StyleLikeF
   */
  set style(style) {
    if (style instanceof VlMapLayerStyle) {
      this._style = style.style;
    } else {
      this._style = style;
    }
    this._processAction();
  }

  get _cluster() {
    return this.getAttribute("cluster");
  }

  mark(id) {
    if (this._action && id) {
      this._action.markFeatureWithId(id, this.layer);
    }
  }

  removeMarks() {
    if (this._action) {
      this._action.demarkAllFeatures();
    }
  }

  select(feature) {
    if (this.action && feature) {
      this.action.selectFeature(feature);
    }
  }

  onSelect(callback) {
    this.__callback = callback;
  }

  reset() {
    if (this.action) {
      this.action.clearFeatures();
    }
  }

  /**
   * Geeft terug of de action uitgevoerd mag worden op een feature en/of layer. Default true.
   *
   * @param {Object} feature Openlayers feature
   * @param {Object} layer Openlayers layer
   *
   * @Return {boolean} true als de action uitgevoerd mag worden, false als de action niet mag uitgevoerd worden voor de meegegeven feature en/of layer
   */
  appliesTo(feature, layer) {
    return true;
  }

  _createAction(layer) {
    const options = {
      style: this.style,
      cluster: this._cluster != undefined,
      filter: this.appliesTo.bind(this)
    };
    return new VlSelectAction(layer, this._callback, options);
  }
}

define("vl-map-select-action", VlMapSelectAction);
