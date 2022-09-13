import { VlElement, By } from '../../../../utils/test';

export class VlTestAnnotation extends VlElement {
  async hasSmallClassName() {
    const input = await this.getElementInShadow(this, 'span');
    const classValue = await input.getAttribute('class');
    return classValue.includes('vl-annotation--small');
  }
}
