import '../../../../test/unit/setup.js';
import { expect } from 'chai';
import { Vector as SourceVector } from 'ol/source';
import { VlSnapInteraction } from '../../snap-interaction';

describe('snapinteraction interaction', () => {
  it('when creating a snap interaction the options will be set correctly', () => {
    const source = new SourceVector({ features: [] });
    const snapInteraction = new VlSnapInteraction(source);
    expect(snapInteraction.source_).to.equal(source);
    expect(snapInteraction.pixelTolerance_).to.equal(7);
  });

  it('pixel tolerance can also be added', () => {
    const source = new SourceVector({ features: [] });
    const snapInteraction = new VlSnapInteraction(source, { pixelTolerance: 1000 });
    expect(snapInteraction.source_).to.equal(source);
    expect(snapInteraction.pixelTolerance_).to.equal(1000);
  });
});
