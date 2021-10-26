import { VlElement, By } from "../../../../utils/test";

export class VlInputAddon extends VlElement { }

export class VlButtonInputAddon extends VlInputAddon {
  async getIcon() {
    const icon = await this.findElement(
      By.css(this.selector + ' [is="vl-icon"]')
    );
    if (icon) {
      const { VlIcon } = require("vl-ui-icon").Test;
      return new VlIcon(this.driver, icon);
    }
  }
}
