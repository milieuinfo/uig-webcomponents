export class VlMapAction {
  constructor(interactions) {
    if (!Array.isArray(interactions)) {
      interactions = [interactions];
    }
    this.interactions = [];
    interactions.forEach((interaction) => {
      this.addInteraction(interaction);
    });
  }

  addInteraction(interaction) {
    interaction.setActive(false);
    this.interactions.push(interaction);
  }

  activate() {
    this.interactions.forEach((interaction) => {
      interaction.setActive(true);
    });
  }

  deactivate() {
    this.interactions.forEach((interaction) => {
      interaction.setActive(false);
    });
  }

  getControl() {
    return this.map.getActionControlWithIdentifier(this.element.identifier);
  }
}
