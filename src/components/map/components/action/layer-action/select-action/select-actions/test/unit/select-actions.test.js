import '../../../../../../../test/unit/setup.js';
import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import { Vector as SourceVector } from 'ol/source';
import { Vector } from 'ol/layer';
import Feature from 'ol/Feature';
import Style from 'ol/style/Style';
import { VlSelectActions } from '../../select-actions';
import { VlSelectAction } from '../../../select-action';

describe('select actions', () => {
  it('select actions is a select action', () => {
    const selectActions = new VlSelectActions([{}], null, {});
    expect(selectActions instanceof VlSelectAction).to.be.true;
  });

  it('select actions contains the layers and configurations', () => {
    const feature1 = new Feature();
    const feature2 = new Feature();
    const layer1 = new Vector({
      source: new SourceVector({
        features: [feature1],
      }),
    });
    const layer2 = new Vector({
      source: new SourceVector({
        features: [feature2],
      }),
    });
    const style1 = new Style();
    const style2 = new Style();
    const hoverStyle1 = new Style();
    const hoverStyle2 = new Style();
    const layerConfiguraties = [
      {
        layer: layer1,
        style: style1,
        hoverStyle: hoverStyle1,
      },
      {
        layer: layer2,
        style: style2,
        hoverStyle: hoverStyle2,
      },
    ];
    const onSelect = sinon.spy();
    const selectActions = new VlSelectActions(layerConfiguraties, onSelect);
    expect(selectActions.layerConfiguraties).to.equal(layerConfiguraties);
    expect(selectActions.layers).to.deep.equal([layer1, layer2]);
  });

  it('select actions may contain a custom filter', () => {
    const layer1 = new Vector({
      source: new SourceVector({
        features: [new Feature()],
      }),
    });
    const layerConfiguraties = [
      {
        layer: layer1,
        style: new Style(),
        hoverStyle: new Style(),
      },
    ];
    const onSelect = sinon.spy();
    const filter = sinon.spy();
    const options = {
      filter,
    };
    const feature = sinon.spy();
    const selectActions = new VlSelectActions(layerConfiguraties, onSelect, options);
    selectActions.filter(feature, layer1);
    expect(filter.calledWith(feature)).to.be.true;
  });

  it('can define the selection and hover style per map layer', () => {
    const selectieStyle1 = () => new Style();
    const selectieStyle2 = () => {
      new Style();
    };
    const hoverStyle1 = () => new Style();
    const hoverStyle2 = () => new Style();
    const feature1 = new Feature();
    const feature2 = new Feature();
    const layerConfiguraties = [
      {
        layer: new Vector({
          source: new SourceVector({
            features: [feature1],
          }),
        }),
        style: selectieStyle1,
        hoverStyle: hoverStyle1,
      },
      {
        layer: new Vector({
          source: new SourceVector({
            features: [feature2],
          }),
        }),
        style: selectieStyle2,
        hoverStyle: hoverStyle2,
      },
    ];
    const selectActions = new VlSelectActions(layerConfiguraties, null, {});
    expect(selectActions.style(feature1)).to.deep.equal(selectieStyle1(feature1));
    expect(selectActions.style(feature2)).to.deep.equal(selectieStyle2(feature2));
    expect(selectActions.hoverStyle(feature1)).to.deep.equal(hoverStyle1(feature1));
    expect(selectActions.hoverStyle(feature2)).to.deep.equal(hoverStyle2(feature2));
  });

  it('will fall back to the selection style per map layer if no hover style is defined', () => {
    const selectieStyle1 = () => new Style();
    const selectieStyle2 = () => {
      new Style();
    };
    const feature1 = new Feature();
    const feature2 = new Feature();
    const layerConfiguraties = [
      {
        layer: new Vector({
          source: new SourceVector({
            features: [feature1],
          }),
        }),
        style: selectieStyle1,
      },
      {
        layer: new Vector({
          source: new SourceVector({
            features: [feature2],
          }),
        }),
        style: selectieStyle2,
      },
    ];
    const selectActions = new VlSelectActions(layerConfiguraties, null, {});
    expect(selectActions.hoverStyle(feature1)).to.deep.equal(selectieStyle1(feature1));
    expect(selectActions.hoverStyle(feature2)).to.deep.equal(selectieStyle2(feature2));
  });

  it('cannot determine the selection and hover style if it is not defined', () => {
    const feature = new Feature();
    const layerConfiguraties = [
      {
        layer: new Vector({
          source: new SourceVector({
            features: [feature],
          }),
        }),
      },
    ];
    const selectActions = new VlSelectActions(layerConfiguraties);
    expect(selectActions.style(feature)).to.be.undefined;
    expect(selectActions.hoverStyle(feature)).to.be.undefined;
  });

  it('cannot determine the selection and hover style if the layer is unknown', () => {
    const feature = new Feature();
    const selectActions = new VlSelectActions([]);
    expect(selectActions.style(feature)).to.be.null;
    expect(selectActions.hoverStyle(feature)).to.be.null;
  });

  it('can mark and unmark features', () => {
    const feature1 = new Feature();
    const feature2 = new Feature();
    const feature3 = new Feature();
    feature1.setId(1);
    feature2.setId(2);
    feature3.setId(3);
    const selectActions = new VlSelectActions([
      {
        layer: new Vector({
          source: new SourceVector({
            features: [feature1, feature2],
          }),
        }),
      },
      {
        layer: new Vector({
          source: new SourceVector({
            features: [feature3],
          }),
        }),
      },
    ]);

    selectActions.markFeatureWithId(1);
    expect(selectActions.isMarked(feature1)).to.be.true;
    expect(selectActions.markInteraction.getFeatures().getLength()).to.equal(1);
    selectActions.markFeatureWithId(2);
    expect(selectActions.isMarked(feature2)).to.be.true;
    expect(selectActions.markInteraction.getFeatures().getLength()).to.equal(2);
    selectActions.markFeatureWithId(3);
    expect(selectActions.isMarked(feature3)).to.be.true;
    expect(selectActions.markInteraction.getFeatures().getLength()).to.equal(3);
    selectActions.demarkAllFeatures();
    expect(selectActions.markInteraction.getFeatures().getLength()).to.equal(0);
    expect(selectActions.isMarked(feature1)).to.be.false;
    expect(selectActions.isMarked(feature2)).to.be.false;
  });

  it('can mark and unmark clusters', () => {
    const feature1 = new Feature();
    const feature2 = new Feature();
    const feature3 = new Feature();
    const feature4 = new Feature();
    feature1.setId(1);
    feature2.setId(2);
    feature3.setId(3);
    feature4.setId(4);
    const cluster1 = new Feature();
    const cluster2 = new Feature();
    const cluster3 = new Feature();
    cluster1.set('features', [feature1, feature2]);
    cluster2.set('features', [feature3]);
    cluster3.set('features', [feature4]);
    const layer1 = new Vector({
      source: new SourceVector({
        features: [cluster1, cluster2],
      }),
    });
    const layer2 = new Vector({
      source: new SourceVector({
        features: [cluster3],
      }),
    });
    const selectActions = new VlSelectActions([
      {
        layer: layer1,
      },
      {
        layer: layer2,
      },
    ]);
    selectActions.markFeatureWithId(1);
    expect(selectActions.isMarked(cluster1)).to.be.true;
    expect(selectActions.isMarked(cluster2)).to.be.false;
    expect(selectActions.isMarked(cluster3)).to.be.false;
    expect(selectActions.markInteraction.getFeatures().getLength()).to.equal(1);
    selectActions.markFeatureWithId(2);
    expect(selectActions.isMarked(cluster1)).to.be.true;
    expect(selectActions.isMarked(cluster2)).to.be.false;
    expect(selectActions.isMarked(cluster3)).to.be.false;
    selectActions.markFeatureWithId(4);
    expect(selectActions.isMarked(cluster1)).to.be.true;
    expect(selectActions.isMarked(cluster2)).to.be.false;
    expect(selectActions.isMarked(cluster3)).to.be.true;
    selectActions.demarkAllFeatures();
    expect(selectActions.isMarked(cluster1)).to.be.false;
    expect(selectActions.isMarked(cluster2)).to.be.false;
    expect(selectActions.isMarked(cluster3)).to.be.false;
  });
});
