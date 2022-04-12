import { expect } from 'chai';
import Interaction from 'ol/interaction/Interaction';
import { VlMapAction } from '../..';

describe('map action', () => {
  it('can add an interaction that is not active', () => {
    const VlmapAction = new VlMapAction([new Interaction({}), new Interaction({})]);
    const extraInteractie = new Interaction({});
    VlmapAction.addInteraction(extraInteractie);
    expect(VlmapAction.interactions.length).to.equal(3);
    expect(extraInteractie.getActive()).to.be.false;
  });

  it('set all interactions to inactive by default', () => {
    const VlmapAction = new VlMapAction([new Interaction({}), new Interaction({})]);
    VlmapAction.interactions.forEach((interaction) => expect(interaction.getActive()).to.be.false);
  });

  it('can activate the interactions', () => {
    const VlmapAction = new VlMapAction([new Interaction({}), new Interaction({})]);
    VlmapAction.activate();
    VlmapAction.interactions.forEach((interaction) => expect(interaction.getActive()).to.be.true);
  });

  it('can deactivate the interactions again', () => {
    const VlmapAction = new VlMapAction([new Interaction({}), new Interaction({})]);
    VlmapAction.deactivate();
    VlmapAction.interactions.forEach((interaction) => expect(interaction.getActive()).to.be.false);
  });
});
