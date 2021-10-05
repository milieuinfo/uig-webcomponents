import { VlElement, By } from "../../../../utils/test";

export class VlProperties extends VlElement {
  async getSlotElements() {
    const slot = await this.shadowRoot.findElement(By.css("slot"));
    return this.getAssignedElements(slot);
  }
}

export class VlPropertiesColumn extends VlElement {
  async isFullSize() {
    return this.hasAttribute("full");
  }

  async getPropertiesList() {
    return new VlPropertiesList(
      this.driver,
      await this.findElement(By.css('[is="vl-properties-list"]'))
    );
  }
}

export class VlPropertiesList extends VlElement {
  async getPropertyByTermText(termText) {
    const properties = await this.getProperties();
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      if (property.term && (await property.term.getText()) === termText) {
        return property;
      }
    }
  }

  async getProperties() {
    const terms = await this._getTerms();
    const values = await this._getValues();
    return terms.map((term, index) => {
      const value = values[index];
      return {
        term: term,
        value: value,
      };
    });
  }

  async _getTerms() {
    const rawTerms = await this.findElements(By.css('[is="vl-property-term"]'));
    return Promise.all(
      rawTerms.map((term) => new VlPropertyTerm(this.driver, term))
    );
  }

  async _getValues() {
    const rawValues = await this.findElements(
      By.css('[is="vl-property-value"]')
    );
    return Promise.all(
      rawValues.map((value) => new VlPropertyValue(this.driver, value))
    );
  }
}

export class VlPropertyTerm extends VlElement {}

export class VlPropertyValue extends VlElement {}
