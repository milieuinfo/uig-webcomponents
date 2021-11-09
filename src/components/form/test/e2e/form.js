import { VlElement, By } from "../../../../utils/test";
import { VlButton } from "../../../button/test/e2e/button";

class VlForm extends VlElement {
  async submit() {
    const button = await this._getSubmitButton();
    await button.click();
  }

  async _getSubmitButton() {
    const element = await this.findElement(By.css('button[type="submit"]'));
    return new VlButton(this.driver, element);
  }
}

export default VlForm;
