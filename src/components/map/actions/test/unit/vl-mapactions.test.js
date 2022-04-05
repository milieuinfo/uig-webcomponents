import { expect } from 'chai';
import { VlSelectAction } from '../../../actions';

describe('build', () => {
  it('zal de veriabelen niet wijzigen zodat instanceof mogelijk blijft', () => {
    const action = new VlSelectAction();
    expect(action.hoverInteraction.constructor.name).to.be.equal('Select');
  });
});
