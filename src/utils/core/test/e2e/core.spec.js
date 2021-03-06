import { assert, getDriver } from "../../../test";
import { VlCorePage } from "./core.page.js";

describe("vl-core", async () => {
  let driver;
  let vlCorePage;

  before(async () => {
    driver = getDriver();
    vlCorePage = new VlCorePage(driver);
    return vlCorePage.load();
  });

  it("een element wordt pas visible als het defined wordt", async () => {
    let slowElement = await vlCorePage.getSlowElement();
    await driver.wait(async () => await slowElement.isDisplayed(), 15000);
    await vlCorePage.load();
    slowElement = await vlCorePage.getSlowElement();
    await assert.eventually.isFalse(slowElement.isDisplayed());
  });
});
