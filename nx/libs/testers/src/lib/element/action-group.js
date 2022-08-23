import { VlElement } from '../util/vl-element';

const ALIGNMENTS = {
  CENTER: 'center',
  RIGHT: 'right',
};

export class VlActionGroup extends VlElement {
  async getAlignedType() {
    return this.getAttribute('data-vl-align');
  }

  async isLeftAligned() {
    const alignType = await this.getAlignedType();
    return alignType !== ALIGNMENTS.CENTER && alignType !== ALIGNMENTS.RIGHT;
  }

  async isCenterAligned() {
    return (await this.getAlignedType()) === ALIGNMENTS.CENTER;
  }

  async isRightAligned() {
    return (await this.getAlignedType()) === ALIGNMENTS.RIGHT;
  }

  async hasSpaceBetween() {
    return this.hasAttribute('space-between');
  }

  async isBordered() {
    return this.hasAttribute('bordered');
  }
}
