import '../../../../../../test/unit/setup.js';
import { expect } from 'chai';
import Map from 'ol/Map';
import Style from 'ol/style/Style';
import { Vector as SourceVector } from 'ol/source';
import { Vector } from 'ol/layer';
import Feature from 'ol/Feature';
import sinon from 'sinon/pkg/sinon-esm';
import { VlDeleteAction } from '../../box-select-action/delete-action';

describe('delete action', () => {
  const createVlDeleteAction = ({ layer, callback, options = {} }) => {
    const action = new VlDeleteAction(layer, callback, options);
    action.map = new Map();
    action.map.render = sinon.spy();
    return action;
  };

  it('if no delete style is defined, the default style will be used', () => {
    const deleteAction = createVlDeleteAction({ layer: {} });
    expect(deleteAction.style).to.not.be.undefined;
  });

  it('the delete style can be defined', () => {
    const style = new Style();
    const deleteAction = createVlDeleteAction({ options: { style } });
    expect(deleteAction.style).to.equal(style);
  });

  it('when calling the callback, the selection will be removed after a success', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const callback = (features, success, cancel) => success(feature);
    const deleteAction = createVlDeleteAction({ layer, callback });
    deleteAction.selectInteraction.getFeatures().push(feature);
    deleteAction.selectInteraction.dispatchEvent('select');
    expect(deleteAction.selectInteraction.getFeatures().getLength()).to.equal(0);
    expect(deleteAction.map.render.called).to.be.true;
  });

  it('does not go wrong with feature without id', () => {
    const feature = new Feature();
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const callback = (features, success, cancel) => success(feature);
    const deleteAction = createVlDeleteAction({ layer, callback });
    deleteAction.selectInteraction.getFeatures().push(feature);
    deleteAction.selectInteraction.dispatchEvent('select');
    expect(deleteAction.selectInteraction.getFeatures().getLength()).to.equal(0);
    expect(deleteAction.map.render.called).to.be.true;
  });

  it('if the callback is given another feature with the same id than the feature in the map, it will not be deleted', () => {
    const feature = new Feature();
    feature.setId(1);
    const andereFeature = new Feature();
    andereFeature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const callback = (features, success, cancel) => success(andereFeature);
    const deleteAction = createVlDeleteAction({ layer, callback });
    deleteAction.selectInteraction.getFeatures().push(feature);
    deleteAction.selectInteraction.dispatchEvent('select');
    expect(layer.getSource().getFeatures().length).to.equal(1);
    expect(layer.getSource().getFeatures()[0]).to.equal(feature);
  });

  it('when calling the callback, the selection will be removed after a cancel', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const callback = (features, success, cancel) => cancel();
    const deleteAction = createVlDeleteAction({ layer, callback });
    deleteAction.selectInteraction.getFeatures().push(feature);
    deleteAction.selectInteraction.dispatchEvent('select');
    expect(deleteAction.selectInteraction.getFeatures().getLength()).to.equal(0);
    expect(deleteAction.map.render.called).to.be.true;
  });

  it('when calling the callback, the selected feature(s) will be removed after the success', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const callback = (features, success, cancel) => success(feature);
    const deleteAction = createVlDeleteAction({ layer, callback });
    deleteAction.selectInteraction.getFeatures().push(feature);
    deleteAction.selectInteraction.dispatchEvent('select');
    expect(layer.getSource().getFeatures().length).to.equal(0);
    expect(deleteAction.map.render.called).to.be.true;
  });

  it('when calling the callback, the selected feature(s) will not be removed after a cancel', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const callback = (features, success, cancel) => cancel();
    const deleteAction = createVlDeleteAction({ layer, callback });
    deleteAction.selectInteraction.getFeatures().push(feature);
    deleteAction.selectInteraction.dispatchEvent('select');
    expect(layer.getSource().getFeatures().length).to.equal(1);
    expect(deleteAction.map.render.called).to.be.true;
  });

  it('if no callback is given, the features can be removed immediately', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const deleteAction = createVlDeleteAction({ layer });
    deleteAction.selectInteraction.getFeatures().push(feature);
    deleteAction.selectInteraction.dispatchEvent('select');
    expect(layer.getSource().getFeatures().length).to.equal(0);
    expect(deleteAction.selectInteraction.getFeatures().getLength()).to.equal(0);
    expect(deleteAction.map.render.called).to.be.true;
  });

  it('at the end of the box selection, will have the features added to the selection interaction, and call the callback function of the interaction with the intersecting feature', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = {
      getSource: () => ({
        getFeatures: () => [],
        forEachFeatureIntersectingExtent: (extent, fn) => fn(feature),
        getFeatureById: () => feature,
        removeFeature: () => {},
      }),
    };

    const deleteAction = createVlDeleteAction({ layer });
    sinon.stub(deleteAction.dragBoxInteraction, 'getGeometry').returns({ getExtent: () => {} });
    deleteAction.dragBoxInteraction.dispatchEvent('boxdrag');
    deleteAction.dragBoxInteraction.dispatchEvent('boxend');
    expect(deleteAction.map.render.called).to.be.true;
  });

  it('the feature filter will be passed to the select action', () => {
    const layers = {};
    const filter = () => {};
    const options = {
      filter,
    };
    const action = new VlDeleteAction(layers, null, options);
    expect(action.filter).to.equal(filter);
  });
});
