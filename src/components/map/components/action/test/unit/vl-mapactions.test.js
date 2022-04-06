import { expect } from 'chai';
import { VlSelectAction } from '../../layer-action/select-action/select-action';

describe('build', () => {
  it('will not change the verables so that instanceof remains possible', () => {
    const action = new VlSelectAction();
    expect(action.hoverInteraction.constructor.name).to.be.equal('Select');
  });
});
