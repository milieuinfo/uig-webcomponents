import { expect } from 'chai';
import { VlSelectAction } from '../../select-action';

describe('build', () => {
  it('zal de veriabelen niet wijzigen zodat instanceof mogelijk blijft', () => {
    const action = new VlSelectAction();
    expect(action.hoverInteraction.constructor.name).to.be.equal('Select');
  });
});
