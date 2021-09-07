import { VlAccordion } from "./accordion.js";
import { Page, config, By } from "../../../../utils/test";

export class VlAccordionPage extends Page {
  async _getAccordion(selector) {
    return new VlAccordion(this.driver, selector);
  }

  async getStandaardAccordion() {
    return this._getAccordion("#accordion-standard");
  }

  async getAccordionMetTitleSlot() {
    return this._getAccordion("#accordion-titel-slot");
  }

  async getDynamischeAccordion() {
    return this._getAccordion("#accordion-dynamic-toggle");
  }

  async getAccordionMetDynamischeAttributen() {
    return this._getAccordion("#accordion-dynamic-attributen");
  }

  async getJSAccordion() {
    return this._getAccordion("#accordion-javascript-toggle");
  }

  async clickJSAccordionOpenButton() {
    return this._clickJSAccordionButton("#open-accordion");
  }

  async clickJSAccordionCloseButton() {
    return this._clickJSAccordionButton("#close-accordion");
  }

  async clickJSAccordionToggleButton() {
    return this._clickJSAccordionButton("#toggle-accordion");
  }

  async _clickJSAccordionButton(selector) {
    const element = await this.driver.findElement(By.css(selector));
    await element.click();
  }

  async load() {
    await super.load(config.baseUrl + "components/accordion/test/e2e");
  }
}
