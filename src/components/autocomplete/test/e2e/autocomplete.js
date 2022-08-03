import { VlElement, By } from '../../../../utils/test';

export class VlTestAutocomplete extends VlElement {
  async getPlaceHolder() {
    const input = await this.getElementInShadow(this, 'input');
    return input.getAttribute('placeholder');
  }

  async isDisabled() {
    return this.hasAttribute('disabled');
  }

  async setInputValue(value) {
    const input = await this.getElementInShadow(this, 'input');

    const actions = this.driver.actions();
    await actions.click(input).sendKeys(value).perform();

    await this.driver.sleep(1000);
  }

  async assertSuggestionsCount(count) {
    await this.waitUntilShadowDomElementsCount(this, `ul.vl-autocomplete__list li.uig-autocomplete-item`, count);
  }

  async getSuggestions() {
    await this.waitUntilShadowDomElementLocated(this, 'div.vl-autocomplete:not([hidden])');
    const list = await this.findShadowDomElements(this, `ul.vl-autocomplete__list li.uig-autocomplete-item`);
    const asyncItemInfos = [];
    list.forEach((e) => {
      asyncItemInfos.push(this.getItemInfo(e));
    });
    return Promise.all(asyncItemInfos).then((items) => items);
  }

  async getGroupInfos() {
    await this.waitUntilShadowDomElementLocated(this, 'div.vl-autocomplete:not([hidden])');
    const list = await this.findShadowDomElements(this, `ul.vl-autocomplete__list li.uig-autocomplete-group`);
    return Promise.all(list.map(this.getGroupInfo)).then((g) => g);
  }

  async getGroupIndex(groupName) {
    const groups = await this.getGroupInfos();
    const group = groups.find((g) => g.name === groupName);
    return group.index;
  }

  async getGroupInfo(e) {
    const name = await e.getText();
    const index = await e.getAttribute('groupindex');

    return { name, index };
  }

  async getGroupNames() {
    const groups = await this.getGroupInfos();
    return groups.map((g) => g.name);
  }

  async getSuggestionsOfGroup(groupName) {
    const groupIndex = await this.getGroupIndex(groupName);
    await this.waitUntilShadowDomElementLocated(this, 'div.vl-autocomplete:not([hidden])');

    const list = await this.findShadowDomElements(
      this,
      `ul.vl-autocomplete__list li.uig-autocomplete-item[groupindex='${groupIndex}']`,
    );

    const asyncItemInfos = [];
    list.forEach((e) => {
      asyncItemInfos.push(this.getItemInfo(e));
    });

    return Promise.all(asyncItemInfos).then((items) => items);
  }

  async getItemTitleInfo(e) {
    const title = await e.getText();

    return { title };
  }

  async getItemInfo(item) {
    const itemInfo = {};

    try {
      itemInfo.title = await this.getItemProperty(item, 'uig-autocomplete_title');
    } catch (e) {
      // title is optional, do nothing if item cannot be found
    }

    try {
      itemInfo.subtitle = await this.getItemProperty(item, 'uig-autocomplete_subtitle');
    } catch (e) {
      // subtitle is optional, do nothing if item cannot be found
    }

    try {
      itemInfo.value = await this.getItemProperty(item, 'uig-autocomplete_value');
    } catch (e) {
      // value is optional, do nothing if item cannot be found
    }

    return itemInfo;
  }

  async getItemProperty(item, propertyClassName) {
    const titleElement = await item.findElement(By.css(`span[class*='${propertyClassName}']`));
    return titleElement.getText();
  }
}
