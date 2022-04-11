import sinon from 'sinon/pkg/sinon-esm';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import { expect } from 'chai';
import { VlBoxSelectAction } from '../../box-select-action';

describe('box select action', () => {
  const feature1 = new Feature({ id: 1 });
  const feature2 = new Feature({ id: 2 });
  const intersectingFeatures = [feature1, feature2];
  let callback;

  const createVlBoxSelectAction = (filter) => {
    callback = sinon.spy();
    const action = new VlBoxSelectAction(
      {
        getSource: () => ({
          getFeatures: () => [],
          forEachFeatureIntersectingExtent: (extent, fn) => {
            intersectingFeatures.forEach(fn);
          },
        }),
      },
      callback,
      { filter },
    );
    sinon.stub(action.dragBoxInteraction, 'getGeometry').returns({ getExtent: () => {} });
    action.map = new Map();
    return action;
  };

  it('can be set to active, so that the selection, hover and dragbox interactions are set to active', () => {
    const boxSelectAction = createVlBoxSelectAction();
    expect(boxSelectAction.hoverInteraction.getActive()).to.be.false;
    expect(boxSelectAction.selectInteraction.getActive()).to.be.false;
    expect(boxSelectAction.dragBoxInteraction.getActive()).to.be.false;

    boxSelectAction.activate();
    expect(boxSelectAction.hoverInteraction.getActive()).to.be.true;
    expect(boxSelectAction.selectInteraction.getActive()).to.be.true;
    expect(boxSelectAction.dragBoxInteraction.getActive()).to.be.true;
  });

  it('can be deactivated again, so that the selection, hover and dragbox interactions are deactivated', () => {
    const boxSelectAction = createVlBoxSelectAction();
    boxSelectAction.activate();
    boxSelectAction.deactivate();
    expect(boxSelectAction.hoverInteraction.getActive()).to.be.false;
    expect(boxSelectAction.selectInteraction.getActive()).to.be.false;
    expect(boxSelectAction.dragBoxInteraction.getActive()).to.be.false;
  });

  it('the callback function will not have happened after making the box selection active', () => {
    const boxSelectAction = createVlBoxSelectAction();
    boxSelectAction.activate();
    expect(callback.notCalled).to.be.true;
  });

  it('when dragging the box selection, will add the features of the layer to the hover interaction', () => {
    const boxSelectAction = createVlBoxSelectAction();
    boxSelectAction.dragBoxInteraction.dispatchEvent('boxdrag');
    expect(boxSelectAction.hoverInteraction.getFeatures().getArray()).to.have.members([feature1, feature2]);
  });

  it('when dragging the box selection, will only add the features of the layer to the hover interaction that match the configured filter', () => {
    const boxSelectAction = createVlBoxSelectAction((feature) => feature === feature1);
    boxSelectAction.dragBoxInteraction.dispatchEvent('boxdrag');
    expect(boxSelectAction.hoverInteraction.getFeatures().getArray()).to.have.members([feature1]);
  });

  it('will call at the end of the box selection if no features intersect no callbcak function', () => {
    const boxSelectAction = createVlBoxSelectAction();
    boxSelectAction.dragBoxInteraction.dispatchEvent('boxend');
    expect(callback.notCalled).to.be.true;
  });

  it('at the end of the box selection, will have the features added to the selection interaction, and call the callback function of the interaction with the intersecting feature', () => {
    const boxSelectAction = createVlBoxSelectAction();
    boxSelectAction.dragBoxInteraction.dispatchEvent('boxdrag');
    boxSelectAction.dragBoxInteraction.dispatchEvent('boxend');
    expect(boxSelectAction.hoverInteraction.getFeatures().getArray()).to.have.members([feature1, feature2]);
    expect(callback.calledWith([feature1, feature2])).to.be.true;
  });

  it('when making a selection by a click, will call the callback function of the interaction', () => {
    const boxSelectAction = createVlBoxSelectAction();
    const selectedFeature = new Feature();
    boxSelectAction.selectInteraction.getFeatures().push(selectedFeature);
    boxSelectAction.selectInteraction.dispatchEvent('select');
    expect(callback.calledWith([selectedFeature])).to.be.true;
  });
});
