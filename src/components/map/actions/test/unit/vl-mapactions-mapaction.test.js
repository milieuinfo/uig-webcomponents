import { expect } from 'chai';
import Interaction from 'ol/interaction/Interaction';
import { VlMapAction as VlMapActionAction } from '../../mapaction';

describe('map action', () => {
  it('kan een interactie toevoegen die niet actief staat', () => {
    const VlmapAction = new VlMapActionAction([new Interaction({}), new Interaction({})]);
    const extraInteractie = new Interaction({});
    VlmapAction.addInteraction(extraInteractie);
    expect(VlmapAction.interactions.length).to.equal(3);
    expect(extraInteractie.getActive()).to.be.false;
  });

  it('zet alle interacties default op inactief', () => {
    const VlmapAction = new VlMapActionAction([new Interaction({}), new Interaction({})]);
    VlmapAction.interactions.forEach((interaction) => expect(interaction.getActive()).to.be.false);
  });

  it('kan de interacties actief zetten', () => {
    const VlmapAction = new VlMapActionAction([new Interaction({}), new Interaction({})]);
    VlmapAction.activate();
    VlmapAction.interactions.forEach((interaction) => expect(interaction.getActive()).to.be.true);
  });

  it('kan de interacties terug deactief zetten', () => {
    const VlmapAction = new VlMapActionAction([new Interaction({}), new Interaction({})]);
    VlmapAction.deactivate();
    VlmapAction.interactions.forEach((interaction) => expect(interaction.getActive()).to.be.false);
  });
});
