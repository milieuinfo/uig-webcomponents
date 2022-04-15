import sinon from 'sinon/pkg/sinon';
import { expect } from 'chai';
import Feature from 'ol/Feature';
import { VlTranslateAction } from '../../translate-action';

describe('translate action', () => {
  it('roept de callback functie op nadat er een translate werd uitgevoerd en cleart ook de selectie interactie', () => {
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

  it('na het deactiveren wordt de selectie verwijderd', () => {
    const translateAction = new VlTranslateAction({});
    const feature = new Feature();
    translateAction.selectInteraction.getFeatures().push(feature);
    translateAction.deactivate();
    expect(translateAction.selectInteraction.getFeatures().getLength()).to.equal(0);
  });

  it('bij de Translate interaction constructor moet ook de laag meegegeven worden zodat na het selecteren steeds de feature op de laag verplaatst zal worden en geen features op een andere laag', () => {
    const layer = { id: 'layer1' };
    const translateAction = new VlTranslateAction(layer, {});
    expect(translateAction.translateOptions.layers.length).to.equal(1);
    expect(translateAction.translateOptions.layers[0]).to.deep.equal(layer);
  });
});
