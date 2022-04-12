import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import Feature from 'ol/Feature';
import { VlTranslateAction } from '../..';

describe('translate action', () => {
  it('calls the callback function after a translate has been executed and also clears the selection interaction', () => {
    const callback = sinon.spy();
    const translateAction = new VlTranslateAction({}, callback);
    const feature = new Feature();
    translateAction.selectInteraction.getFeatures().push(feature);
    translateAction.translateInteraction.dispatchEvent({
      type: 'translateend',
      features: [feature],
    });
    expect(callback.calledWith(feature)).to.be.true;
    expect(translateAction.selectInteraction.getFeatures().getLength()).to.equal(0);
  });

  it('after deactivation, the selection is removed', () => {
    const translateAction = new VlTranslateAction({});
    const feature = new Feature();
    translateAction.selectInteraction.getFeatures().push(feature);
    translateAction.deactivate();
    expect(translateAction.selectInteraction.getFeatures().getLength()).to.equal(0);
  });

  it('with the Translate interaction constructor the layer must also be included so that after selection the feature on the layer will always be moved and no features on another layer', () => {
    const layer = { id: 'layer1' };
    const translateAction = new VlTranslateAction(layer, {});
    expect(translateAction.translateOptions.layers.length).to.equal(1);
    expect(translateAction.translateOptions.layers[0]).to.deep.equal(layer);
  });
});
