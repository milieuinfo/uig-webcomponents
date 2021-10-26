import { Page, config, By } from "../../../../utils/test";
import VlInputField from "../../../input-field/test/e2e/input-field";
import VlSearchResults from "../../../search-results/test/e2e/search-results";
import VlRichData from "../../../rich-data/test/e2e/rich-data";

class VlRichDataPage extends Page {
  async getRichData() {
    return new VlRichData(this.driver, "#rich-data");
  }

  async getSearchFilterInputFieldByName(searchFilter, name) {
    return new VlInputField(
      this.driver,
      await searchFilter.findElement(By.css(`[name="${name}"]`))
    );
  }

  async resetSearchFilter(searchFilter) {
    const button = await searchFilter.findElement(
      By.css('button[type="reset"]')
    );
    await button.click();
  }

  async submitSearchFilter(searchFilter) {
    const button = await searchFilter.findElement(
      By.css('button[type="submit"]')
    );
    await button.click();
  }

  async getSearchResults(richData) {
    const slotElements = await richData.getContentSlotElements();
    return new VlSearchResults(this.driver, slotElements[0]);
  }

  async load() {
    await super.load(config.baseUrl + "components/rich-data/test/e2e");
  }
}

export default VlRichDataPage;
