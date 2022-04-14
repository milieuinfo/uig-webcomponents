import { By } from '../../../../../../utils/test';
import { VlTestMapFeaturesLayer } from '../../vector-layer/features-layer/test/e2e/features-layer.js';
import { VlTestMapWfsLayer } from '../../vector-layer/wfs-layer/test/e2e/wfs-layer';
import { VlTestMapTiledWmsLayer } from '../../wms-layer/tiled-wms-layer/test/e2e/tiled-wms-layer.js';
import { VlTestMapWmtsLayer } from '../../wmts-layer/test/e2e/wmts-layer';
import { VlTestMapImageWmsLayer } from '../../wms-layer/image-wms-layer/test/e2e/image-wms-layer';

const LAYER_TYPES = [
  VlTestMapFeaturesLayer,
  VlTestMapWfsLayer,
  VlTestMapWmtsLayer,
  VlTestMapTiledWmsLayer,
  VlTestMapImageWmsLayer,
];

export class VlTestMapLayers {
  static async getLayer(rootElement) {
    const layers = await VlTestMapLayers.getLayers(rootElement);
    return layers[0];
  }

  static async getLayersOfType(rootElement, LayerClass) {
    return await VlTestMapLayers._getLayersByCssSelector(rootElement, LayerClass.TAG);
  }

  static async getLayers(rootElement) {
    return VlTestMapLayers._getLayersByCssSelector(rootElement, '[data-vl-is-layer]');
  }

  static async _getLayersByCssSelector(rootElement, selector) {
    const layerElements = await rootElement.findElements(By.css(selector));
    return Promise.all(layerElements.map((element) => VlTestMapLayers.asLayer(rootElement.driver, element)));
  }

  static async asLayer(driver, element) {
    const LayerType = await VlTestMapLayers._getLayerType(element);
    return new LayerType(driver, element);
  }

  static async _getLayerType(element) {
    const elementTag = await element.getTagName();
    return LAYER_TYPES.find((layerType) => elementTag.toUpperCase() === layerType.TAG.toUpperCase());
  }
}
