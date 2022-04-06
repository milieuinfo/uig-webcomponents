import { VlMapLayer } from '../../layer';
import './wms-style';

export class VlMapWmsLayer extends VlMapLayer {
  constructor(layerClass, sourceClass) {
    super();
    this.__layerClass = layerClass;
    this.__sourceClass = sourceClass;
  }

  connectedCallback() {
    customElements.whenDefined('vl-map-wms-style').then(() => {
      this._source = this.__createSource(this.__sourceClass);
      this._layer = this.__createLayer(this.__layerClass);
      super.connectedCallback();
    });
  }

  get _url() {
    const url = this.getAttribute('data-vl-url');
    if (!url) {
      throw new Error('URL not defined');
    }
    return url;
  }

  get _layers() {
    const layers = this.getAttribute('data-vl-layers');
    if (!layers) {
      throw new Error('Layers not defined');
    }
    return layers;
  }

  get _styles() {
    return this.getAttribute('data-vl-styles') || '';
  }

  get _sldBody() {
    const wmsStyle = this.querySelector(':scope > vl-map-wms-style');
    if (wmsStyle) {
      return wmsStyle.sld;
    }
  }

  get _version() {
    return this.getAttribute('data-vl-version') || '1.3.0';
  }

  get _opacity() {
    return Number(this.getAttribute('data-vl-opacity') || 1);
  }

  _createLayerConfig(source) {
    return {
      title: this._name,
      source,
      opacity: this._opacity,
      minResolution: this._minResolution,
      maxResolution: this._maxResolution,
      visible: this._visible,
    };
  }

  get _sourceConfig() {
    return {
      url: this._url,
      params: {
        LAYERS: this._layers,
        STYLES: this._styles,
        VERSION: this._version,
        SLD_BODY: this._sldBody,
      },
    };
  }

  __createLayer(LayerClass) {
    const layer = new LayerClass(this._createLayerConfig(this._source));
    layer.set('id', VlMapLayer._counter);
    return layer;
  }

  __createSource(SourceClass) {
    return new SourceClass(this._sourceConfig);
  }
}
