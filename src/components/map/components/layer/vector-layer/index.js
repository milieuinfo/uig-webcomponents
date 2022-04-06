import OlVectorLayer from 'ol/layer/Vector';
import { VlMapLayer } from '../../layer';
import { VlMapLayerStyle } from '../../layer-style';

export class VlMapVectorLayer extends VlMapLayer {
  static get EVENTS() {
    return {
      styleChanged: 'style-changed',
    };
  }

  constructor() {
    super();
    this._styles = [];
  }

  /**
   * Returns the OpenLayers map layer style.
   *
   * @return {ol.style}
   */
  get style() {
    if (this._layer) {
      return this._layer.getStyle();
    }
  }

  /**
   * Set the map layer style.
   * If a VlMapLayerStyle is chosen, it will be added to the existing styles.
   * An OpenLayers StyleLike overwrites the style.
   * Preferably, a V1MapLayerStyle is chosen.
   *
   * @param {VlMapLayerStyle|object|null} style a VlMapLayerStyle or an OpenLayers StyleLike, or null to remove the style.
   * @deprecated Using an OpenLayers style as an argument is not recommended. Use the VlMapLayerStyle component instead. In a later version, the option to set an OpenLayers style will disappear.
   *
   * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike|OpenLayers StyleLike}
   */
  set style(style) {
    if (style instanceof VlMapLayerStyle) {
      this._styles.push(style);
      this._layer.setStyle((feature) =>
        this._styles.map((style) => style.style(feature)).filter((style) => style != null),
      );
    } else {
      this._styles = [];
      this._layer.setStyle(style);
    }
    this.dispatchEvent(
      new CustomEvent(VlMapVectorLayer.EVENTS.styleChanged, {
        bubbles: true,
        composed: true,
        detail: { style },
      }),
    );
  }

  _createLayer() {
    const layer = new OlVectorLayer({
      title: this._name,
      source: this._source,
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      minResolution: this._minResolution,
      maxResolution: this._maxResolution,
      visible: this._visible,
    });
    layer.set('id', VlMapLayer._counter);
    return layer;
  }
}
