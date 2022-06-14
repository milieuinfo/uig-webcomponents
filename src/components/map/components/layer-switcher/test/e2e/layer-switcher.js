import { VlElement, By } from '../../../../../../utils/test';
import { VlCheckbox } from '../../../../../../legacy/checkbox/test/e2e/checkbox.js';

export class VlTestMapLayerSwitcher extends VlElement {
  async getCheckboxForLayer(name) {
    const element = await this.findElement(By.css(`[data-vl-layer="${name}"]`));
    return new VlCheckbox(this.driver, element);
  }

  async getCheckboxes() {
    const elements = await this.findElements(By.css(`[data-vl-layer]`));
    return Promise.all(elements.map((element) => new VlCheckbox(this.driver, element)));
  }
}
