import '../../../../../../test/unit/setup.js';
import { expect } from 'chai';
import Feature from 'ol/Feature';
import Style from 'ol/style/Style';
import { Vector } from 'ol/layer';
import { Vector as SourceVector } from 'ol/source';
import { VlHighlightAction } from '../..';

describe('highlight action', () => {
  it('can define the highlight style', () => {
    const style = new Style();
    const highlightAction = new VlHighlightAction(
      {},
      {
        style,
      },
    );
    expect(highlightAction.highlightInteraction.getStyle()).to.equal(style);
  });

  it('can highlight and dehighlight features', () => {
    const feature1 = new Feature();
    const feature2 = new Feature();
    feature1.setId(1);
    feature2.setId(2);
    const highlightAction = new VlHighlightAction({
      getSource: () => ({
        getFeatureById: (id) => (id == 1 ? feature1 : feature2),
      }),
    });

    highlightAction.highlightFeatureWithId(1);
    expect(highlightAction.isHighlighted(feature1)).to.be.true;
    expect(highlightAction.highlightInteraction.getFeatures().getLength()).to.equal(1);
    highlightAction.highlightFeatureWithId(2);
    expect(highlightAction.isHighlighted(feature2)).to.be.true;
    expect(highlightAction.highlightInteraction.getFeatures().getLength()).to.equal(2);
    highlightAction.dehighlightAllFeatures();
    expect(highlightAction.highlightInteraction.getFeatures().getLength()).to.equal(0);
    expect(highlightAction.isHighlighted(feature1)).to.be.false;
    expect(highlightAction.isHighlighted(feature2)).to.be.false;
  });

  it('can highlight and dehighlight clusters', () => {
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
    const highlightAction = new VlHighlightAction(layer);
    highlightAction.highlightFeatureWithId(1);
    expect(highlightAction.isHighlighted(cluster1)).to.be.true;
    expect(highlightAction.isHighlighted(cluster2)).to.be.false;
    expect(highlightAction.highlightInteraction.getFeatures().getLength()).to.equal(1);
    highlightAction.highlightFeatureWithId(2);
    expect(highlightAction.isHighlighted(cluster1)).to.be.true;
    expect(highlightAction.isHighlighted(cluster2)).to.be.false;
    highlightAction.dehighlightAllFeatures();
    expect(highlightAction.isHighlighted(cluster1)).to.be.false;
    expect(highlightAction.isHighlighted(cluster2)).to.be.false;
  });

  it('cannot define the highlight style if it is not defined', () => {
    const highlightAction = new VlHighlightAction({});
    expect(highlightAction.style).to.be.undefined;
  });

  it('will clear the highlight features with a deactivate', () => {
    const highlightAction = new VlHighlightAction({});
    const feature = new Feature({ id: 1 });
    highlightAction.highlightInteraction.getFeatures().push(feature);
    highlightAction.deactivate();
    expect(highlightAction.highlightInteraction.getFeatures().getLength()).to.equal(0);
  });
});
