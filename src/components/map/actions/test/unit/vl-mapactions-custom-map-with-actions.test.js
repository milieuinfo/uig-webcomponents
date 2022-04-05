import './setup.js';
import { Vector, Tile, Group } from 'ol/layer';
import Projection from 'ol/proj/Projection';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import { VlCustomMap } from '../../../actions/custom-map';

describe('custom map with actions', () => {
  const createVlCustomMapWithActions = () => {
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
    const map = new VlCustomMap({
      actions: [],
      customLayers: {
        baseLayerGroup: new Group({
          layers,
        }),
        overviewMapLayers,
        overlayGroup: new Group({
          layers: [new Vector({ source: new Vector() })],
        }),
      },
      projection: new Projection({
        code: 'EPSG:31370',
        extent: [9928.0, 66928.0, 272072.0, 329072.0],
      }),
    });
    map.addControl = sinon.spy();
    map.getSize = () => [1200, 800];
    return map;
  };

  it('standaard bevat de kaart een view met als default zoom niveau 2', () => {
    const map = createVlCustomMapWithActions();
    expect(map.getView().getZoom()).to.equal(2);
  });

  it('kan met een view geïnitialiseerd worden op een specifieke bounding box, zodat er sterk is ingezoomd (hoge zoom waarde)', () => {
    const map = createVlCustomMapWithActions();
    map.initializeView([9928.0, 66928.0, 9930.0, 66930.0]);
    expect(map.getView().getZoom()).to.equal(16);
  });

  it('kan met een view geïnitialiseerd worden op een kleine bounding box en een max zoom niveau, zodat het max niveau bereikt is', () => {
    const map = createVlCustomMapWithActions();
    map.initializeView([9928.0, 66928.0, 9930.0, 66930.0], 4);
    expect(map.getView().getZoom()).to.equal(4);
  });

  it('als de baselayer getoggled wordt van een map, zal dit ook gebeuren bij de overview map', () => {
    const map = createVlCustomMapWithActions();
    expect(map.overviewMapLayers[0].getVisible()).to.be.false;
    expect(map.overviewMapLayers[1].getVisible()).to.be.true;
    expect(map.baseLayers[0].getVisible()).to.be.true;
    expect(map.baseLayers[1].getVisible()).to.be.false;

    map.custom.toggleBaseLayer();
    expect(map.overviewMapLayers[0].getVisible()).to.be.true;
    expect(map.overviewMapLayers[1].getVisible()).to.be.false;
    expect(map.baseLayers[0].getVisible()).to.be.false;
    expect(map.baseLayers[1].getVisible()).to.be.true;

    map.custom.toggleBaseLayer();
    expect(map.overviewMapLayers[0].getVisible()).to.be.false;
    expect(map.overviewMapLayers[1].getVisible()).to.be.true;
    expect(map.baseLayers[0].getVisible()).to.be.true;
    expect(map.baseLayers[1].getVisible()).to.be.false;
  });
});
