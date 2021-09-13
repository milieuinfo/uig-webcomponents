import { Page, By, config } from "../../../test";

export class VlCorePage extends Page {
  async getSlowElement() {
    return this.driver.findElement(By.css("#slow-element"));
  }

  async load() {
    await super.load(config.baseUrl + "utils/core/test/e2e");
  }
}
