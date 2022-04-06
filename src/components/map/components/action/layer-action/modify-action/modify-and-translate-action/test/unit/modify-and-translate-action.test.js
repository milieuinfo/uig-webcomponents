import '../../../../../../../test/unit/setup.js';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { Vector as SourceVector } from 'ol/source';
import { Vector } from 'ol/layer';
import { VlSnapInteraction } from '../../../../../../snap-interaction/snap-interaction';
import { VlModifyAndTranslateAction } from '../../modify-and-translate-action';

describe('modify and translate action', () => {
  const source = new SourceVector();
  const layer = new Vector({ source });

  it('calls the callback function after a translate has been executed and also clears the selection interaction', () => {
    const callback = sinon.spy();
    const modifyAndTranslateAction = new VlModifyAndTranslateAction({}, callback);
    const feature = new Feature({ geometry: new Point([0, 0]) });
    modifyAndTranslateAction.selectInteraction.getFeatures().push(feature);
    modifyAndTranslateAction.translateInteraction.dispatchEvent({
      type: 'translateend',
      features: [feature],
    });
    expect(callback.calledWith(feature)).to.be.true;
    expect(modifyAndTranslateAction.selectInteraction.getFeatures().getLength()).to.equal(0);
  });

  it('can enable snapping via options by calling the modify action correctly', () => {
    const options = {
      snapping: true,
    };
    const action = new VlModifyAndTranslateAction(layer, sinon.spy(), options);
    expect(action.interactions.find((interaction) => interaction instanceof VlSnapInteraction)).to.not.be.undefined;
  });
});
