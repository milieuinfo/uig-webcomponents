import '../../../../../../test/unit/setup.js';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import { Vector as SourceVector } from 'ol/source';
import { Vector } from 'ol/layer';
import Feature from 'ol/Feature';
import LineString from 'ol/geom/LineString';
import * as OlObservable from 'ol/Observable';
import { VlMeasureAction } from '../../measure-action';

describe('measure action', () => {
  let measureAction;
  let layer;
  let addOverlay;
  let removeOverlay;
  let source;

  beforeEach(() => {
    source = new SourceVector({ features: [] });
    layer = new Vector({ source });
    measureAction = new VlMeasureAction(layer);
    addOverlay = sinon.spy();
    removeOverlay = sinon.spy();
    measureAction.map = {
      addOverlay,
      removeOverlay,
      on: () => {},
    };
  });

  it('passes the snapping configuration to the draw action', () => {
    const snappingLayer = sinon.spy();
    const snapping = {
      layer: snappingLayer,
    };
    const action = new VlMeasureAction(layer, snapping);
    expect(action.measureOptions.layer).to.deep.equal(snappingLayer);
  });

  it('when drawing starts and the mouse is moved, a tooltip will appear', () => {
    const sketchFeature = new Feature({
      geometry: new LineString([
        [0, 0],
        [1, 1],
      ]),
    });
    measureAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    expect(addOverlay.called).to.be.true;
  });

  it('when deactivated, the tooltips are not removed, but the listener is discarded', () => {
    const unByKey = sinon.spy(OlObservable, 'unByKey');
    const sketchFeature = new Feature({
      geometry: new LineString([
        [0, 0],
        [1, 1],
      ]),
    });
    measureAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    measureAction.drawInteraction.dispatchEvent({
      type: 'drawend',
      feature: sketchFeature,
    });
    source.addFeature(sketchFeature);
    measureAction.deactivate();
    expect(unByKey.calledWith(measureAction.measurePointermoveHandler)).to.be.true;
    expect(removeOverlay.called).to.be.false;
  });

  it('when deactivated, the tooltips of features that were not yet fully drawn are removed from the map', () => {
    const sketchFeature = new Feature({
      geometry: new LineString([
        [0, 0],
        [1, 1],
      ]),
    });
    measureAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    measureAction.drawInteraction.dispatchEvent({
      type: 'drawend',
      feature: sketchFeature,
    });
    const tooltip = measureAction.getTooltipFor(sketchFeature.getId());
    measureAction.deactivate();
    expect(removeOverlay.calledWith(tooltip)).to.be.true;
  });

  it('when a feature is removed from the layer, the associated tooltip will also be removed', () => {
    const sketchFeature = new Feature({
      id: 1,
      geometry: new LineString([
        [0, 0],
        [1, 1],
      ]),
    });
    measureAction.drawInteraction.dispatchEvent({
      type: 'drawstart',
      feature: sketchFeature,
    });
    measureAction.drawInteraction.dispatchEvent({
      type: 'drawend',
      feature: sketchFeature,
    });
    expect(addOverlay.called).to.be.true;
    const tooltip = measureAction.getTooltipFor(sketchFeature.getId());
    expect(tooltip).to.not.be.undefined;
    source.dispatchEvent({ type: 'removefeature', feature: sketchFeature });
    expect(removeOverlay.calledWith(tooltip)).to.be.true;
  });
});
