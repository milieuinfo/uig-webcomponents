import './setup.js';
import { Vector, Tile, Group } from 'ol/layer';
import { Vector as SourceVector } from 'ol/source';
import Projection from 'ol/proj/Projection';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import { VlCustomMap } from '../../../actions/custom-map';

describe('custom map', () => {
  let map;

  const layers = [
    new Tile({
      type: 'base',
      visible: true,
    }),
    new Tile({
      type: 'base',
      visible: false,
    }),
  ];

  const overviewMapLayers = [
    new Tile({
      type: 'base',
      visible: false,
    }),
    new Tile({
      type: 'base',
      visible: true,
    }),
  ];

  const overlayLayer = new Vector({ source: new SourceVector() });

  const merge = (a, b) => {
    for (const element in b) {
      if (b.hasOwnProperty(element)) {
        a[element] = b[element];
      }
    }
  };

  const createMap = (options) => {
    const defaultOptions = {
      actions: [],
      customLayers: {
        baseLayerGroup: new Group({
          layers,
        }),
        overviewMapLayers,
        overlayGroup: new Group({
          layers: [overlayLayer],
        }),
      },
      projection: new Projection({
        code: 'EPSG:31370',
        extent: [9928.0, 66928.0, 272072.0, 329072.0],
      }),
    };

    if (options) {
      merge(defaultOptions, options);
    }

    const map = new VlCustomMap(defaultOptions);
    map.addControl = sinon.spy();
    map.getSize = () => [1200, 800];
    return map;
  };

  const createMapZonderLayers = () => {
    const defaultOptions = {
      actions: [],
      customLayers: {
        baseLayerGroup: new Group({
          layers: [],
        }),
        overviewMapLayers: [],
        overlayGroup: new Group({
          layers: [],
        }),
      },
      projection: new Projection({
        code: 'EPSG:31370',
        extent: [9928.0, 66928.0, 272072.0, 329072.0],
      }),
    };

    const map = new VlCustomMap(defaultOptions);
    map.addControl = sinon.spy();
    return map;
  };

  const createBaseLayer = (title, visibility) =>
    new Tile({
      title,
      type: 'base',
      visible: visibility,
    });

  const createVisibleBaseLayer = (title) => createBaseLayer(title, true);

  const createInvisibleBaseLayer = (title) => createBaseLayer(title, false);

  beforeEach(() => {
    map = createMap();
  });

  it('kan de base layers teruggeven', () => {
    expect(map.getBaseLayers().length).to.equal(2);
    expect(map.getBaseLayers()).to.deep.equal(layers);
  });

  it('kan de overlay layers teruggeven', () => {
    expect(map.getOverlayLayers().length).to.equal(1);
  });

  it('kan zoomen naar een puntgeometrie, zodat er sterk is ingezoomd (hoge zoom waarde)', () => {
    expect(map.getView().getZoom()).to.equal(2);

    map.zoomToGeometry({
      type: 'Point',
      coordinates: [100000, 100000],
    });

    expect(map.getView().getZoom()).to.equal(16);
  });

  it('kan zoomen naar een geometrie tot maximaal aan het gedefinieerde zoom niveau via de map declaratie optie of de methode argumenten', () => {
    const max = 10;

    map.zoomToGeometry({ type: 'Point', coordinates: [100000, 100000] });
    expect(map.getView().getZoom()).to.equal(16);

    map.zoomToGeometry({ type: 'Point', coordinates: [100000, 100000] }, max);
    expect(map.getView().getZoom()).to.equal(max);

    map = createMap({ maxZoomViewToExtent: 5 });
    map.zoomToGeometry({ type: 'Point', coordinates: [100000, 100000] }, max);
    expect(map.getView().getZoom()).to.equal(max);

    map = createMap({ maxZoomViewToExtent: 5 });
    map.zoomToGeometry({ type: 'Point', coordinates: [100000, 100000] });
    expect(map.getView().getZoom()).to.equal(5);
  });

  it('kan met de show info functie een popover tonen op de kaart', () => {
    map.showInfo('Test', [0, 0]);
    const overlays = map.getOverlays();
    const array = overlays.getArray();

    expect(overlays.getLength()).to.equal(1);
    expect(array.length).to.equal(1);

    const overlay = array[0];
    const element =
      '<div class="info-tooltip"><span class="content">Test</span><div class="arrow"></div><div class="close"></div></div>';
    expect(overlay.getElement().outerHTML).to.equal(element);
  });

  it('Als er geen overviewMapLayers zijn, zal er geen overviewMapControl aangemaakt worden.', () => {
    const map = createMapZonderLayers();
    expect(map.overviewMapControl).to.be.undefined;
  });

  it('Wanneer de eerse overviewMapLayer wordt toegevoegd, wordt een overviewMapControl aangemaakt.', () => {
    const map = createMapZonderLayers();
    const baseLayer = createVisibleBaseLayer('layer');
    const overviewMapLayer = createInvisibleBaseLayer('overview map layer');

    expect(map.overviewMapControl).to.be.undefined;
    map.addBaseLayerAndOverlayMapLayer(baseLayer, overviewMapLayer);
    expect(map.overviewMapControl).to.not.be.undefined;
    expect(map.getBaseLayers().length).to.equal(1);
    expect(map.getBaseLayers()[0]).to.equal(baseLayer);
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray().length).to.equal(1);
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[0]).to.equal(overviewMapLayer);
  });

  it('Er kunnen meerdere base layers en overlayMapLayers toegevoegd worden aan de map ', () => {
    map = createMapZonderLayers();

    const baseLayer = createVisibleBaseLayer('layer');
    const overviewMapLayer = createInvisibleBaseLayer('overview map layer');

    expect(map.overviewMapControl).to.be.undefined;
    map.addBaseLayerAndOverlayMapLayer(baseLayer, overviewMapLayer);
    map.addBaseLayerAndOverlayMapLayer(baseLayer, overviewMapLayer);

    expect(map.getBaseLayers().length).to.equal(2);
    expect(map.getBaseLayers()[0]).to.equal(baseLayer);
    expect(map.getBaseLayers()[1]).to.equal(baseLayer);
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray().length).to.equal(2);
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[0]).to.equal(overviewMapLayer);
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[1]).to.equal(overviewMapLayer);
  });

  it('Enkel de eerste toegevoegde baselayer is visible en enkel de 2e toegevoegde overlaymaplayer is visible', () => {
    map = createMapZonderLayers();

    for (let layerNr = 0; layerNr < 3; layerNr++) {
      map.addBaseLayerAndOverlayMapLayer(
        createInvisibleBaseLayer(`layer ${layerNr}`),
        createInvisibleBaseLayer(`overview map layer ${layerNr}`),
      );
    }

    expect(map.getBaseLayers()[0].getVisible()).to.be.true;
    expect(map.getBaseLayers()[1].getVisible()).to.be.false;
    expect(map.getBaseLayers()[2].getVisible()).to.be.false;

    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[0].getVisible()).to.be.false;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[1].getVisible()).to.be.true;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[2].getVisible()).to.be.false;
  });

  it('Na een klik is de volgende toegevoegde baselayer visible', () => {
    map = createMapZonderLayers();

    for (let layerNr = 0; layerNr < 3; layerNr++) {
      map.addBaseLayerAndOverlayMapLayer(
        createInvisibleBaseLayer(`layer ${layerNr}`),
        createInvisibleBaseLayer(`overview map layer ${layerNr}`),
      );
    }

    const overlayElement = map.overviewMapControl.element;
    const overviewMap = map.overviewMapControl.getOverviewMap();

    sinon.stub(map, 'render');
    sinon.stub(overviewMap, 'render');

    overlayElement.click();
    expect(map.getBaseLayers()[0].getVisible()).to.be.false;
    expect(map.getBaseLayers()[1].getVisible()).to.be.true;
    expect(map.getBaseLayers()[2].getVisible()).to.be.false;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[0].getVisible()).to.be.false;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[1].getVisible()).to.be.false;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[2].getVisible()).to.be.true;
    expect(map.render.called).to.be.true;
    expect(overviewMap.render.called).to.be.true;

    map.render.resetHistory();
    overviewMap.render.resetHistory();
    overlayElement.click();
    expect(map.getBaseLayers()[0].getVisible()).to.be.false;
    expect(map.getBaseLayers()[1].getVisible()).to.be.false;
    expect(map.getBaseLayers()[2].getVisible()).to.be.true;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[0].getVisible()).to.be.true;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[1].getVisible()).to.be.false;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[2].getVisible()).to.be.false;
    expect(map.render.called).to.be.true;
    expect(overviewMap.render.called).to.be.true;

    map.render.resetHistory();
    overviewMap.render.resetHistory();
    overlayElement.click();
    expect(map.getBaseLayers()[0].getVisible()).to.be.true;
    expect(map.getBaseLayers()[1].getVisible()).to.be.false;
    expect(map.getBaseLayers()[2].getVisible()).to.be.false;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[0].getVisible()).to.be.false;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[1].getVisible()).to.be.true;
    expect(map.overviewMapControl.getOverviewMap().getLayers().getArray()[2].getVisible()).to.be.false;
    expect(map.render.called).to.be.true;
    expect(overviewMap.render.called).to.be.true;
  });
});
