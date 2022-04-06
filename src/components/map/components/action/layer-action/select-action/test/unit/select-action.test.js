import '../../../../../../test/unit/setup.js';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import Map from 'ol/Map';
import Style from 'ol/style/Style';
import Feature from 'ol/Feature';
import { Vector as SourceVector } from 'ol/source';
import { Vector } from 'ol/layer';
import { VlSelectAction } from '../../select-action';

describe('select action', () => {
  const createVlSelectAction = ({ layer = {}, callback, options } = {}) => {
    const action = new VlSelectAction(layer, callback, options);
    action.map = new Map();
    return action;
  };

  it('can define the selection and hover style', () => {
    const selectieStyle = new Style();
    const hoverStyle = new Style();
    const selectAction = createVlSelectAction({
      options: {
        style: selectieStyle,
        hoverStyle,
      },
    });
    expect(selectAction.style).to.equal(selectieStyle);
    expect(selectAction.hoverStyle).to.equal(hoverStyle);
  });

  it('will fall back to the selection style if no hover style is defined', () => {
    const style = new Style();
    const selectAction = createVlSelectAction({
      options: {
        style,
      },
    });
    expect(selectAction.hoverStyle).to.equal(style);
  });

  it('cannot determine the selection and hover style if it is not defined', () => {
    const selectAction = createVlSelectAction();
    expect(selectAction.style).to.be.null;
    expect(selectAction.hoverStyle).to.be.null;
  });

  it('can mark and unmark features', () => {
    const feature1 = new Feature();
    const feature2 = new Feature();
    feature1.setId(1);
    feature2.setId(2);
    const layer = {
      getSource: () => ({
        getFeatureById: (id) => (id == 1 ? feature1 : feature2),
      }),
    };
    const selectAction = createVlSelectAction({ layer });
    selectAction.markFeatureWithId(1);
    expect(selectAction.isMarked(feature1)).to.be.true;
    expect(selectAction.markInteraction.getFeatures().getLength()).to.equal(1);
    selectAction.markFeatureWithId(2);
    expect(selectAction.isMarked(feature2)).to.be.true;
    expect(selectAction.markInteraction.getFeatures().getLength()).to.equal(2);
    selectAction.demarkAllFeatures();
    expect(selectAction.markInteraction.getFeatures().getLength()).to.equal(0);
    expect(selectAction.isMarked(feature1)).to.be.false;
    expect(selectAction.isMarked(feature2)).to.be.false;
  });

  it('can mark and unmark clusters', () => {
    const feature1 = new Feature();
    feature1.setId(1);
    const feature2 = new Feature();
    feature2.setId(2);
    const feature3 = new Feature();
    feature3.setId(3);
    const cluster1 = new Feature();
    const cluster2 = new Feature();
    cluster1.set('features', [feature1, feature2]);
    cluster2.set('features', [feature3]);
    const layer = new Vector({
      source: new SourceVector({
        features: [cluster1, cluster2],
      }),
    });
    const selectAction = createVlSelectAction({ layer });
    selectAction.markFeatureWithId(1);
    expect(selectAction.isMarked(cluster1)).to.be.true;
    expect(selectAction.isMarked(cluster2)).to.be.false;
    expect(selectAction.markInteraction.getFeatures().getLength()).to.equal(1);
    selectAction.markFeatureWithId(2);
    expect(selectAction.isMarked(cluster1)).to.be.true;
    expect(selectAction.isMarked(cluster2)).to.be.false;
    selectAction.demarkAllFeatures();
    expect(selectAction.isMarked(cluster1)).to.be.false;
    expect(selectAction.isMarked(cluster2)).to.be.false;
  });

  it('will call the onselect function when a feature is selected', () => {
    const layer = {
      id: 'layer1',
      getSource: () => ({
        getFeatures: () => [feature],
      }),
    };
    const onSelect = sinon.spy();
    const feature = new Feature({ id: 1 });
    const selectAction = createVlSelectAction({ layer, callback: onSelect });
    selectAction.selectInteraction.getFeatures().push(feature);
    const event = { type: 'select' };
    selectAction.selectInteraction.dispatchEvent(event);
    expect(onSelect.callCount).to.equal(1);
    const argsForCall = onSelect.getCall(0).args;
    expect(argsForCall.length).to.equal(3);
    expect(argsForCall[0]).to.equal(feature);
    expect(argsForCall[1].type).to.equal('select');
    expect(argsForCall[2]).to.equal(layer);
  });

  it('if more than 1 feature is selected, each click will alternately select the next one', () => {
    const onSelect = sinon.spy();
    const feature = new Feature({ id: 1 });
    const feature2 = new Feature({ id: 2 });
    const feature3 = new Feature({ id: 3 });
    const selectAction = createVlSelectAction({
      layer: [
        {
          id: 'layer1',
          getSource: () => ({
            getFeatures: () => [feature, feature2, feature3],
          }),
        },
      ],
      callback: onSelect,
    });

    selectAction.selectInteraction.getFeatures().push(feature);
    selectAction.selectInteraction.getFeatures().push(feature2);
    selectAction.selectInteraction.getFeatures().push(feature3);

    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    expect(onSelect.getCall(0).args[0]).to.equal(feature);
    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    expect(onSelect.getCall(1).args[0]).to.equal(feature2);
    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    expect(onSelect.getCall(2).args[0]).to.equal(feature3);
    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    expect(onSelect.getCall(3).args[0]).to.equal(feature);
  });

  it('if a feature is programmatically selected, the next one will also be taken with a click', () => {
    const onSelect = sinon.spy();
    const feature = new Feature({ id: 1 });
    const feature2 = new Feature({ id: 2 });
    const feature3 = new Feature({ id: 3 });
    const selectAction = createVlSelectAction({
      layer: [
        {
          id: 'layer1',
          getSource: () => ({
            getFeatures: () => [feature, feature2, feature3],
            getFeatureById: (id) => {
              switch (id) {
                case 1:
                  return feature;
                case 2:
                  return feature2;
                case 3:
                  return feature3;
              }
            },
          }),
        },
      ],
      callback: onSelect,
    });

    selectAction.selectFeature(feature);
    selectAction.clearFeatures(feature);

    selectAction.selectInteraction.getFeatures().push(feature2);
    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    selectAction.selectInteraction.getFeatures().push(feature3);
    selectAction.selectInteraction.dispatchEvent({ type: 'select' });

    expect(onSelect.getCall(0).args[0].get('id')).to.equal(1);
    expect(onSelect.getCall(1).args[0].get('id')).to.equal(2);
    expect(onSelect.getCall(2).args[0].get('id')).to.equal(3);
  });

  it('if you are asked to forget the last selected feature, the 1st feature is taken back when you click on several', () => {
    const onSelect = sinon.spy();
    const feature = new Feature();
    const feature2 = new Feature();
    const feature3 = new Feature();
    feature.setId(1);
    feature2.setId(2);
    feature3.setId(3);
    const selectAction = createVlSelectAction({
      layer: {
        id: 'layer1',
        getSource: () => ({
          getFeatures: () => [feature, feature2, feature3],
          getFeatureById: (id) => {
            switch (id) {
              case 1:
                return feature;
              case 2:
                return feature2;
              case 3:
                return feature3;
            }
          },
        }),
      },
      callback: onSelect,
    });

    selectAction.selectInteraction.getFeatures().push(feature);
    selectAction.selectInteraction.getFeatures().push(feature2);
    selectAction.selectInteraction.getFeatures().push(feature3);

    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    expect(onSelect.getCall(0).args[0]).to.equal(feature);
    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    expect(onSelect.getCall(1).args[0]).to.equal(feature2);
    selectAction.deselect();
    selectAction.selectInteraction.dispatchEvent({ type: 'select' });
    expect(onSelect.getCall(2).args[0]).to.equal(feature);
  });

  it('will call the onselect function with empty arguments if a select is done not on a feature', () => {
    const onSelect = sinon.spy();
    const selectAction = createVlSelectAction({ layer: [{}], callback: onSelect });
    selectAction.map = new Map();
    selectAction.activate();
    selectAction.selectInteraction.dispatchEvent('select');
    expect(onSelect.calledWithExactly()).to.be.true;
  });

  it('will clear the selection of features when deactivated', () => {
    const selectAction = createVlSelectAction({ layer: [{}] });
    selectAction.map = new Map();
    const feature = new Feature({ id: 1 });
    selectAction.selectInteraction.getFeatures().push(feature);
    selectAction.deactivate();
    expect(selectAction.selectInteraction.getFeatures().getLength()).to.equal(0);
  });

  it('will clear the selection first when filtering the selection, so that the same feature can be chosen again', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const selectAction = createVlSelectAction({ layer });
    selectAction.selectInteraction.getFeatures().push(feature);
    const filter = selectAction.selectInteractionFilter(feature);
    expect(filter).to.be.true;
    expect(selectAction.selectInteraction.getFeatures().getLength()).to.equal(0);
  });

  it('will not take into account the current selection when filtering the hover', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = new Vector({ source: new SourceVector({ features: [feature] }) });
    const selectAction = createVlSelectAction({ layer });
    selectAction.selectInteraction.getFeatures().push(feature);
    const filter = selectAction.hoverInteractionFilter(feature, layer);
    expect(filter).to.be.false;
  });

  it('can use a feature filter', () => {
    const feature = new Feature();
    feature.setId(1);
    const featureWithId2 = new Feature();
    feature.setId(2);
    let filter = (feature) => feature.getId() == 1;
    const selectAction = createVlSelectAction({
      layer: [new Vector({ source: new SourceVector({ features: [feature, featureWithId2] }) })],
      options: {
        filter,
      },
    });
    selectAction.selectInteraction.getFeatures().push(featureWithId2);
    filter = selectAction.selectInteractionFilter(feature);
    expect(filter).to.be.false;
  });

  it('when activated, will activate the function to set the selection correct during clustering after zooming', () => {
    const selectAction = createVlSelectAction({
      layer: [{}],
      options: {
        cluster: true,
      },
    });
    selectAction.map = {
      on: sinon.spy(),
    };
    selectAction.activate();
    expect(selectAction.map.on.calledWithExactly('moveend', selectAction._fixClusterBehaviorListener)).to.be.true;
  });

  it('when deactivated, will deactivate the function to set the selection correct for clustering after zooming', () => {
    const selectAction = createVlSelectAction({
      layer: [{}],
      options: {
        cluster: true,
      },
    });
    selectAction.map = {
      on: sinon.spy(),
      un: sinon.spy(),
    };
    selectAction.activate();
    selectAction.deactivate();
    expect(selectAction.map.un.calledWithExactly('moveend', selectAction._fixClusterBehaviorListener)).to.be.true;
  });

  it('will move the selected feature to the highlight select interaction after zooming to avoid visual problems with selected feature and cluster', () => {
    const feature = new Feature();
    feature.setId(1);
    const layer = {
      id: 'layer1',
      getSource: () => ({
        getFeatures: () => [feature],
        getFeatureById: (id) => (id == 1 ? feature : null),
      }),
    };
    const selectAction = createVlSelectAction({
      layer,
      options: {
        cluster: true,
      },
    });
    selectAction.activate();
    selectAction.selectInteraction.getFeatures().push(feature);
    expect(selectAction.selectInteraction.getFeatures().getLength()).to.equal(1);
    expect(selectAction.markInteraction.getFeatures().getLength()).to.equal(0);
    expect(selectAction.hoverInteraction.getFeatures().getLength()).to.equal(0);
    const event = { type: 'select' };
    selectAction.selectInteraction.dispatchEvent(event);
    expect(selectAction.selectInteraction.getFeatures().getLength()).to.equal(0);
    expect(selectAction.markInteraction.getFeatures().getLength()).to.equal(1);
    expect(selectAction.hoverInteraction.getFeatures().getLength()).to.equal(0);
    selectAction._fixClusterBehavior();
    expect(selectAction.selectInteraction.getFeatures().getLength()).to.equal(0);
    expect(selectAction.markInteraction.getFeatures().getLength()).to.equal(1);
    expect(selectAction.hoverInteraction.getFeatures().getLength()).to.equal(0);
  });
});
