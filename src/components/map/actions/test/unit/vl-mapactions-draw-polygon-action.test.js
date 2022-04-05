import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import { Vector as SourceVector } from 'ol/source';
import { VlDrawPolygonAction } from '../../../actions/draw-polygon-action';

describe('draw polygon action', () => {
  const source = new SourceVector({});

  const layer = {
    getSource: () => source,
  };

  const callback = sinon.spy();

  it('geeft de snapping configuratie door aan de draw action', () => {
    const snappingLayer = sinon.spy();
    const snapping = {
      layer: snappingLayer,
    };
    const action = new VlDrawPolygonAction(layer, callback, snapping);
    expect(action.options.layer).to.deep.equal(snappingLayer);
  });

  it('geeft de juiste configuratie mee aan de draw interaction', () => {
    const action = new VlDrawPolygonAction(layer, callback);
    expect(action.options).to.deep.equal(action.options);
  });
});
