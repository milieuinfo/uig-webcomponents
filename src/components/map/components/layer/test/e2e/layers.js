import { By } from '../../../../../../utils/test';
import { VlMapFeaturesLayer } from '../../vector-layer/features-layer/test/e2e/features-layer.js';
import { VlMapWfsLayer } from '../../vector-layer/wfs-layer/test/e2e/wfs-layer';
import { VlMapTiledWmsLayer } from '../../wms-layer/tiled-wms-layer/test/e2e/tiled-wms-layer.js';
import { VlMapWmtsLayer } from '../../wmts-layer/test/e2e/wmts-layer';
import { VlMapImageWmsLayer } from '../../wms-layer/image-wms-layer/test/e2e/image-wms-layer';

const LAYER_TYPES = [VlMapFeaturesLayer, VlMapWfsLayer, VlMapWmtsLayer, VlMapTiledWmsLayer, VlMapImageWmsLayer];

export class VlMapLayers {
  static async getLayer(rootElement) {
    const layers = await VlMapLayers.getLayers(rootElement);
    return layers[0];
  }

  static async getLayersOfType(rootElement, LayerClass) {
    return await VlMapLayers._getLayersByCssSelector(rootElement, LayerClass.TAG);
  }

  static async getLayers(rootElement) {
    return VlMapLayers._getLayersByCssSelector(rootElement, '[data-vl-is-layer]');
  }

  static async _getLayersByCssSelector(rootElement, selector) {
    const layerElements = await rootElement.findElements(By.css(selector));
    return Promise.all(layerElements.map((element) => VlMapLayers.asLayer(rootElement.driver, element)));
  }

  static async asLayer(driver, element) {
    const LayerType = await VlMapLayers._getLayerType(element);
    return new LayerType(driver, element);
  }

  static async _getLayerType(element) {
    const elementTag = await element.getTagName();
    return LAYER_TYPES.find((layerType) => elementTag.toUpperCase() === layerType.TAG.toUpperCase());
  }
}
