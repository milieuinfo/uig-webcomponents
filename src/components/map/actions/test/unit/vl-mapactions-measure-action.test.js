import './setup.js';
import sinon from 'sinon/pkg/sinon';
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

  it('geeft de snapping configuratie door aan de draw action', () => {
    const snappingLayer = sinon.spy();
    const snapping = {
      layer: snappingLayer,
    };
    const action = new VlMeasureAction(layer, snapping);
    expect(action.measureOptions.layer).to.deep.equal(snappingLayer);
  });

  it('Als het tekenen gestart en er met de muis verschoven wordt zal er een tooltip verschijnen', () => {
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

  it('bij het deactiveren worden de tooltips niet verwijderd, maar de listener wordt wel weggegooid', () => {
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

  it('bij het deactiveren worden de tooltips van features die nog niet volledig getekend waren wel van de kaart verwijderd', () => {
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

  it('wanneer een feature wordt verwijderd van de layer zal de bijhorende tooltip ook verwijderd worden', () => {
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
