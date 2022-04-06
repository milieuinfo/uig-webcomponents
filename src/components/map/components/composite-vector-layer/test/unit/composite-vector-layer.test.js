import '../../../../test/unit/setup.js';
import { Vector } from 'ol/layer';
import OlVectorSource from 'ol/source/Vector';
import OlGML2 from 'ol/format/GML2';
import { expect } from 'chai';
import { VlCompositeVectorSource } from '../../../composite-vector-source/composite-vector-source';
import { VlCompositeVectorLayer } from '../../composite-vector-layer';

describe('composite wfs layer', () => {
  const source1 = new OlVectorSource({
    format: new OlGML2(),
    url: () => 'http://localhost/kaartlaag1',
  });

  const source2 = new OlVectorSource({
    format: new OlGML2(),
    url: () => 'http://localhost/kaartlaag2',
  });

  const layer1 = new Vector({
    title: 'Laag 1',
    source: source1,
    minResolution: 4,
    maxResolution: 8,
  });

  const layer2 = new Vector({
    title: 'Laag 1',
    source: source2,
    minResolution: 2,
    maxResolution: 10,
  });

  it('makes a combination of all layers', () => {
    const compositeVectorLayer = new VlCompositeVectorLayer([layer1, layer2], { title: 'Composite laag' });
    expect(compositeVectorLayer.getMinResolution()).to.equal(2);
    expect(compositeVectorLayer.getMaxResolution()).to.equal(10);
    expect(compositeVectorLayer.getSource() instanceof VlCompositeVectorSource).to.equal(true);
    expect(compositeVectorLayer.getSource().sources[0]).to.equal(source1);
    expect(compositeVectorLayer.getSource().sources[1]).to.equal(source2);
  });

  it('het options argument is optioneel', () => {
    new VlCompositeVectorLayer([layer1, layer2]);
  });
});
