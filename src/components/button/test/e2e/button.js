const { VlElement } = require("../../../../../test").Test;
const { By } = require("../../../../../test").Test.Setup;

class VlButtonElement extends VlElement {
  async getIcon() {
    const icon = await this.findElement(By.css('[is="vl-icon"]'));
    if (icon) {
      const VlIcon = require("../../../icon/test/e2e/icon.js");
      return new VlIcon(this.driver, icon);
    }
  }

  async isError() {
    return this.hasAttribute("error");
  }

  async isBlock() {
    return this.hasAttribute("block");
  }

  async isLarge() {
    return this.hasAttribute("large");
  }

  async isWide() {
    return this.hasAttribute("wide");
  }

  async isNarrow() {
    return this.hasAttribute("narrow");
  }

  async isLoading() {
    return this.hasAttribute("loading");
  }

  async isSecondary() {
    return this.hasAttribute("secondary");
  }

  async isTertiary() {
    return this.hasAttribute("tertiary");
  }

  async hasIcon() {
    try {
      await this.getIcon();
      return true;
    } catch (e) {
      return false;
    }
  }
}

class VlButton extends VlButtonElement {}

class VlLinkButton extends VlButtonElement {}

module.exports = {
  VlButton,
  VlLinkButton,
};
