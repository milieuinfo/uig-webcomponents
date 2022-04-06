import '../../../../../test/unit/setup.js';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import { Vector as SourceVector } from 'ol/source';
import { Vector } from 'ol/layer';
import Feature from 'ol/Feature';
import Draw from 'ol/interaction/Draw';
import Polygon from 'ol/geom/Polygon';
import LineString from 'ol/geom/LineString';
import { VlSnapInteraction } from '../../../../snap-interaction/snap-interaction';
import { VlDrawAction } from '../../draw-action';

describe('draw action', () => {
  const source = new SourceVector({ features: [] });
  const layer = new Vector({ source });
  const callback = sinon.spy();

  let addOverlay;
  let removeOverlay;

  afterEach(() => {
    callback.resetHistory();
    addOverlay = undefined;
    removeOverlay = undefined;
  });

  it('can pass options to draw action', () => {
    const drawAction = new VlDrawAction(layer, 'LineString', callback, { maxPoints: 2 });
    const { options } = drawAction;
    expect(options.maxPoints).to.equal(2);
    expect(options.source).to.equal(source);
    expect(options.type).to.equal('LineString');
    expect(drawAction.interactions.length).to.equal(1);
    expect(drawAction.interactions[0] instanceof Draw).to.be.true;
  });

  it('can enable snapping via options with the default snapping layer the draw action layer', () => {
    const options = {
      maxPoints: 2,
    };

    let drawAction = new VlDrawAction(layer, 'LineString', callback, options);
    expect(drawAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction)).to.be.undefined;

    options.snapping = false;
    drawAction = new VlDrawAction(layer, 'LineString', callback, options);
    expect(drawAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction)).to.be.undefined;

    options.snapping = true;
    drawAction = new VlDrawAction(layer, 'LineString', callback, options);
    expect(drawAction.interactions.length).to.equal(2);
    expect(drawAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction)).to.not.be.undefined;

    const snappingSource = new SourceVector({ features: [] });
    const snappingLayer = new Vector({ source: snappingSource });
    options.snapping = {
      layer: snappingLayer,
      pixelTolerance: 1000,
    };
    drawAction = new VlDrawAction(layer, 'LineString', callback, options);
    const snapInteraction = drawAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction);
    expect(snapInteraction.source_).to.equal(snappingSource);
    expect(snapInteraction.pixelTolerance_).to.equal(1000);
  });

  it('if there is a snapping layer it will be added and removed when the action is turned on and off', () => {
    const snappingSource = new SourceVector({ features: [] });
    const snappingLayer = new Vector({ source: snappingSource });
    const options = {
      snapping: {
        layer: snappingLayer,
        pixelTolerance: 1000,
      },
    };
    const drawAction = createDrawActionWithMap('Point', options);
    sinon.stub(drawAction.map, 'addLayer');
    drawAction.activate();
    expect(drawAction.map.addLayer.calledWith(snappingLayer)).to.be.true;
    sinon.stub(drawAction.map, 'removeLayer');
    drawAction.deactivate();
    expect(drawAction.map.removeLayer.calledWith(snappingLayer)).to.be.true;
  });

  it('calls the callback function after drawing', () => {
    const drawAction = new VlDrawAction(layer, 'Polygon', callback);
    const sketchFeature = new Feature();

    drawAction.drawInteraction.dispatchEvent({
      type: 'drawend',
      feature: sketchFeature,
    });

    expect(callback.calledWith(sketchFeature)).to.be.true;
  });

  it('can remove the feature after drawing via the cancel draw function', () => {
    const callback = (feature, cancelDraw) => cancelDraw();
    const drawAction = new VlDrawAction(layer, 'Polygon', callback);
    const sketchFeature = new Feature({});

    drawAction.drawInteraction.dispatchEvent({
      type: 'drawend',
      feature: sketchFeature,
    });

    source.addFeature(sketchFeature);
    expect(source.getFeatures().length).to.equal(0);
  });

  it('can remove the feature asynchronously after drawing via the cancel draw function', () => {
    const callback = (feature, cancelDraw) => {
      source.addFeature(feature);
      cancelDraw();
    };
    const drawAction = new VlDrawAction(layer, 'Polygon', callback);
    const sketchFeature = new Feature({});

    drawAction.drawInteraction.dispatchEvent({
      type: 'drawend',
      feature: sketchFeature,
    });

    expect(source.getFeatures().length).to.equal(0);
  });

  it('when the drawing has started and the mouse is moved, a tooltip will appear if the option measure is set to true', () => {
    const options = {
      measure: true,
    };
    let drawAction = createDrawActionWithMap('Polygon', options);
    let sketchFeature = new Feature({
      geometry: new Polygon([
        [
          [0, 0],
          [0, 1],
          [1, 1],
        ],
      ]),
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    expect(addOverlay.called).to.be.true;
    let tooltip = addOverlay.getCall(0).args[0];
    expect(drawAction.tooltip).to.equal(tooltip);
    let tooltipStub = sinon.stub(drawAction.tooltip, 'setElement').callsFake();
    drawAction.pointermove();
    expect(tooltipStub.called).to.be.true;
    expect(tooltipStub.getCall(0).args[0].textContent).to.equal('1.00 m');
    expect(tooltip.getOffset()).to.deep.equal([-15, 10]);

    addOverlay.resetHistory();

    drawAction = createDrawActionWithMap('LineString', options);
    sketchFeature = new Feature({
      geometry: new LineString([
        [0, 0],
        [1, 1],
      ]),
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    expect(addOverlay.called).to.be.true;
    tooltip = addOverlay.getCall(0).args[0];
    expect(drawAction.tooltip).to.equal(tooltip);
    tooltipStub = sinon.stub(drawAction.tooltip, 'setElement').callsFake();
    drawAction.pointermove();
    expect(tooltipStub.called).to.be.true;
    expect(tooltipStub.getCall(0).args[0].textContent).to.equal('1.41 m');
    expect(tooltip.getOffset()).to.deep.equal([-15, 10]);
  });

  it('when the drawing is started and the mouse is moved a tooltip will appear if the option measure is an object with the offset of the tooltip in', () => {
    const options = {
      measure: {
        tooltip: {
          offset: [0, 0],
        },
      },
    };
    let drawAction = createDrawActionWithMap('Polygon', options);
    let sketchFeature = new Feature({
      geometry: new Polygon([
        [
          [0, 0],
          [0, 1],
          [1, 1],
        ],
      ]),
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    expect(addOverlay.called).to.be.true;
    let tooltip = addOverlay.getCall(0).args[0];
    expect(drawAction.tooltip).to.equal(tooltip);
    let tooltipStub = sinon.stub(drawAction.tooltip, 'setElement').callsFake();
    drawAction.pointermove();
    expect(tooltipStub.called).to.be.true;
    expect(tooltipStub.getCall(0).args[0].textContent).to.equal('1.00 m');
    expect(tooltip.getOffset()).to.deep.equal([0, 0]);

    addOverlay.resetHistory();
    drawAction = createDrawActionWithMap('LineString', options);
    sketchFeature = new Feature({
      geometry: new LineString([
        [0, 0],
        [1, 1],
      ]),
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    expect(addOverlay.called).to.be.true;
    tooltip = addOverlay.getCall(0).args[0];
    expect(drawAction.tooltip).to.equal(tooltip);
    tooltipStub = sinon.stub(drawAction.tooltip, 'setElement').callsFake();
    drawAction.pointermove();
    expect(tooltipStub.called).to.be.true;
    expect(tooltipStub.getCall(0).args[0].textContent).to.equal('1.41 m');
    expect(tooltip.getOffset()).to.deep.equal([0, 0]);
  });

  it('when the drawing is started and the mouse is moved, no tooltip will appear if the option measure is set to false', () => {
    const drawAction = createDrawActionWithMap('Polygon');
    const sketchFeature = new Feature({
      geometry: new Polygon([
        [
          [0, 0],
          [0, 1],
          [1, 1],
        ],
      ]),
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    expect(addOverlay.called).to.be.false;
  });

  it('when quitting, the tooltips (and listener) are removed', () => {
    const options = {
      measure: true,
    };
    const drawAction = createDrawActionWithMap('Polygon', options);
    const sketchFeature = new Feature({
      geometry: new Polygon([
        [
          [0, 0],
          [0, 1],
          [1, 1],
          [0, 0],
        ],
      ]),
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawend',
      feature: sketchFeature,
    });
    expect(removeOverlay.called).to.be.true;
  });

  it('deactivating removes the tooltips and listener', () => {
    const options = {
      measure: true,
    };
    const drawAction = createDrawActionWithMap('Polygon', options);
    const sketchFeature = new Feature({
      geometry: new Polygon([
        [
          [0, 0],
          [0, 1],
          [1, 1],
          [0, 0],
        ],
      ]),
    });
    drawAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    drawAction.deactivate();
    expect(removeOverlay.called).to.be.true;
  });

  const setMeasureSpies = () => {
    addOverlay = sinon.spy();
    removeOverlay = sinon.spy();
  };

  const createDrawActionWithMap = (type, options) => {
    setMeasureSpies();
    const drawAction = new VlDrawAction(layer, type, callback, options);
    drawAction.map = {
      addOverlay,
      removeOverlay,
      on: (type, callback) => (drawAction[type] = callback),
      addLayer: (layer) => {},
      removeLayer: (layer) => {},
    };
    return drawAction;
  };
});
