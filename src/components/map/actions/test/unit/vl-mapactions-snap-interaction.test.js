import './setup.js';
import { expect } from 'chai';
import { Vector as SourceVector } from 'ol/source';
import { VlSnapInteraction } from '../../..';

describe('snapinteraction interaction', () => {
  it('bij het aanmaken van een snap interactie zullen de options correct worden gezet', () => {
    const source = new SourceVector({ features: [] });
    const snapInteraction = new VlSnapInteraction(source);
    expect(snapInteraction.source_).to.equal(source);
    expect(snapInteraction.pixelTolerance_).to.equal(7);
  });

  it('pixel tolerance kan ook meegegeven worden', () => {
    const source = new SourceVector({ features: [] });
    const snapInteraction = new VlSnapInteraction(source, { pixelTolerance: 1000 });
    expect(snapInteraction.source_).to.equal(source);
    expect(snapInteraction.pixelTolerance_).to.equal(1000);
  });
});
