import { assert, getDriver } from "../../../../utils/test";
import VlInputAddonPage from "./input-addon.page";

describe("vl-input-addon", async () => {
  let vlInputAddonPage;

  before(() => {
    vlInputAddonPage = new VlInputAddonPage(getDriver());
    return vlInputAddonPage.load();
  });

  // it("WCAG", async () => {
  //   await assert.eventually.isFalse(vlInputAddonPage.hasWcagIssues());
  // });

  it("als gebruiker kan ik de tekst zien van een input addon", async () => {
    const inputAddon = await vlInputAddonPage.getInputAddon();
    await assert.eventually.include(inputAddon.getText(), "€");
  });

  it("als gebruiker kan ik de tekst van een tooltip op een input-addon raadplegen", async () => {
    const tooltip = await vlInputAddonPage.getTooltipFromInputAddon();
    await assert.eventually.equal(tooltip.getText(), "Euro");
  });

  it("als gebruiker zie ik een input addon", async () => {
    const inputAddonButton = await vlInputAddonPage.getInputAddonButton();
    await assert.eventually.isTrue(inputAddonButton.isDisplayed());
    const inputAddonButtonIcon = await inputAddonButton.getIcon();
    await assert.eventually.isTrue(inputAddonButtonIcon.isDisplayed());
    await assert.eventually.equal(inputAddonButtonIcon.getType(), "location");
  });
});
