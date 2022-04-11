import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import { Vector as SourceVector } from 'ol/source';
import { VlDrawRectangleAction } from '../../draw-rectangle-action';

describe('draw rectangle action', () => {
  const source = new SourceVector({});

  const layer = {
    getSource: () => source,
  };

  const callback = sinon.spy();

  it('passes the snapping configuration to the draw action', () => {
    const snappingLayer = sinon.spy();
    const snapping = {
      layer: snappingLayer,
    };
    const action = new VlDrawRectangleAction(layer, callback, snapping);
    expect(action.options.layer).to.deep.equal(snappingLayer);
  });

  it('passes the correct configuration to the draw interaction', () => {
    const action = new VlDrawRectangleAction(layer, callback);
    expect(action.options.maxPoints).to.equal(2);
    const { geometryFunction } = action.options;
    const geometry = geometryFunction(
      [
        [0, 0],
        [1, 2],
      ],
      null,
    );
    expect(geometry.getCoordinates()[0][0]).to.deep.equal([0, 0]);
    expect(geometry.getCoordinates()[0][1]).to.deep.equal([0, 2]);
    expect(geometry.getCoordinates()[0][2]).to.deep.equal([1, 2]);
    expect(geometry.getCoordinates()[0][3]).to.deep.equal([1, 0]);
    expect(geometry.getCoordinates()[0][4]).to.deep.equal([0, 0]);
  });
});
