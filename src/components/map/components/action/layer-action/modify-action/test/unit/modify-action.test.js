import '../../../../../../test/unit/setup.js';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import Map from 'ol/Map';
import { Vector as SourceVector } from 'ol/source';
import { Vector } from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Select from 'ol/interaction/Select';
import Modify from 'ol/interaction/Modify';
import { VlSnapInteraction } from '../../../../../snap-interaction/snap-interaction';
import { VlModifyAction } from '../../modify-action';

describe('modify action', () => {
  const source = new SourceVector();
  const layer = new Vector({ source });
  const callback = sinon.spy();
  const filter = () => {};

  it('calls the callback function after a modify has been executed', () => {
    const modifyAction = new VlModifyAction({}, callback);
    const feature = new Feature({
      geometry: new Point([0, 0]),
    });
    modifyAction.selectInteraction.getFeatures().push(feature);
    modifyAction.modifyInteraction.dispatchEvent({
      type: 'modifyend',
      features: [feature],
    });
    expect(callback.calledWith(feature)).to.be.true;
  });

  it('after deactivation, the selection is removed', () => {
    const modifyAction = new VlModifyAction({});
    modifyAction.map = new Map();
    const feature = new Feature({
      geometry: new Point([0, 0]),
    });
    modifyAction.selectInteraction.getFeatures().push(feature);
    modifyAction.deactivate();
    expect(modifyAction.selectInteraction.getFeatures().getLength()).to.equal(0);
  });

  it('the feature filter will be passed to the select action', () => {
    const layers = {};
    const options = {
      filter,
    };
    const modifyAction = new VlModifyAction(layers, null, options);
    expect(modifyAction.filter).to.equal(filter);
  });

  it('contains 4 interactions by default: select, modify, hover and mark interaction', () => {
    const modifyAction = new VlModifyAction(layer, callback, {});
    expect(modifyAction.interactions.length).to.equal(4);
    expect(modifyAction.interactions.filter((interaction) => interaction instanceof Modify).length).to.equal(1);
    expect(modifyAction.interactions.filter((interaction) => interaction instanceof Select).length).to.equal(3);
  });

  it('can enable snapping via options with the default snapping layer the modify action layer', () => {
    const options = {
      filter,
    };
    let modifyAction = new VlModifyAction(layer, callback, options);
    expect(modifyAction.interactions.length).to.equal(4);
    expect(modifyAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction)).to.be.undefined;

    options.snapping = false;
    modifyAction = new VlModifyAction(layer, callback, options);
    expect(modifyAction.interactions.length).to.equal(4);
    expect(modifyAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction)).to.be.undefined;

    options.snapping = true;
    modifyAction = new VlModifyAction(layer, callback, options);
    expect(modifyAction.interactions.length).to.equal(5);
    expect(modifyAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction)).to.not.be
      .undefined;
    expect(modifyAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction).source_).to.equal(
      source,
    );

    const snappingSource = new SourceVector({ features: [] });
    const snappingLayer = new Vector({ source: snappingSource });
    options.snapping = {
      layer: snappingLayer,
      pixelTolerance: 1000,
    };
    modifyAction = new VlModifyAction(layer, callback, options);
    expect(modifyAction.interactions.length).to.equal(5);
    const snapInteraction = modifyAction.interactions.find((interaction) => interaction instanceof VlSnapInteraction);
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
    const modifyAction = createModifyActionWithMap(options);
    sinon.stub(modifyAction.map, 'addLayer');
    modifyAction.activate();
    expect(modifyAction.map.addLayer.calledWith(snappingLayer)).to.be.true;
    sinon.stub(modifyAction.map, 'removeLayer');
    modifyAction.deactivate();
    expect(modifyAction.map.removeLayer.calledWith(snappingLayer)).to.be.true;
  });

  const createModifyActionWithMap = (options) => {
    const modifyAction = new VlModifyAction(layer, callback, options);
    modifyAction.map = {
      addLayer: () => {},
      removeLayer: () => {},
    };
    return modifyAction;
  };
});
