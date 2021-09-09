import { assert, getDriver } from "../../../../utils/test";
import { VlButtonPage } from "./button.page.js";

describe("vl-button", async () => {
  let vlButtonPage;

  before(() => {
    vlButtonPage = new VlButtonPage(getDriver());
    return vlButtonPage.load();
  });

  it("als gebruiker wil ik dat mijn klik geregistreerd wordt wanneer ik op een knop klik", async () => {
    const button = await vlButtonPage.getPrimaryButton();
    await assert.eventually.equal(button.getText(), "Gegevens opslaan");
    await button.click();
    await assert.eventually.equal(button.getText(), "Klik geregistreerd");
  });

  it("als gebruiker wil ik niet dat mijn klik geregistreerd wordt wanneer ik op een disabled knop klik", async () => {
    const button = await vlButtonPage.getDisabledButton();
    await assert.eventually.equal(button.getText(), "Gegevens opslaan");
    await button.click();
    await assert.eventually.equal(button.getText(), "Gegevens opslaan");
    await assert.eventually.isFalse(button.isEnabled());
    await assert.eventually.isTrue(button.isDisabled());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een error en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const errorButton = await vlButtonPage.getErrorButton();
    await assert.eventually.isFalse(primaryButton.isError());
    await assert.eventually.isTrue(errorButton.isError());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een knop met en zonder icoon", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const iconBeforeButton = await vlButtonPage.getIconBeforeButton();
    const iconBeforeButtonIcon = await iconBeforeButton.getIcon();
    await assert.eventually.isFalse(primaryButton.hasIcon());
    await assert.eventually.isTrue(iconBeforeButton.hasIcon());
    await assert.eventually.equal(iconBeforeButtonIcon.getType(), "location");
  });

  it("als gebruiker wil ik een icoon voor en na de tekst in de knop kunnen zien", async () => {
    const iconBeforeButton = await vlButtonPage.getIconBeforeButton();
    const iconAfterButton = await vlButtonPage.getIconAfterButton();
    const iconBeforeButtonIcon = await iconBeforeButton.getIcon();
    const iconAfterButtonIcon = await iconAfterButton.getIcon();
    await assert.eventually.equal(
      iconBeforeButton.getText(),
      "Contactpersoon opslaan"
    );
    await assert.eventually.isTrue(iconBeforeButtonIcon.isBefore());
    await assert.eventually.isFalse(iconBeforeButtonIcon.isAfter());
    await assert.eventually.equal(
      iconAfterButton.getText(),
      "Contactpersoon opslaan"
    );
    await assert.eventually.isFalse(iconAfterButtonIcon.isBefore());
    await assert.eventually.isTrue(iconAfterButtonIcon.isAfter());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een block en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const blockButton = await vlButtonPage.getBlockButton();
    await assert.eventually.isFalse(primaryButton.isBlock());
    await assert.eventually.isTrue(blockButton.isBlock());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een large en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const largeButton = await vlButtonPage.getLargeButton();
    await assert.eventually.isFalse(primaryButton.isLarge());
    await assert.eventually.isTrue(largeButton.isLarge());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een wide en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const wideButton = await vlButtonPage.getWideButton();
    await assert.eventually.isFalse(primaryButton.isWide());
    await assert.eventually.isTrue(wideButton.isWide());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een narrow en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const narrowButton = await vlButtonPage.getNarrowButton();
    await assert.eventually.isFalse(primaryButton.isNarrow());
    await assert.eventually.isTrue(narrowButton.isNarrow());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een loading en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const loadingButton = await vlButtonPage.getLoadingButton();
    await assert.eventually.isFalse(primaryButton.isLoading());
    await assert.eventually.isTrue(loadingButton.isLoading());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een secondary en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const secondaryButton = await vlButtonPage.getSecondaryButton();
    await assert.eventually.isFalse(primaryButton.isSecondary());
    await assert.eventually.isTrue(secondaryButton.isSecondary());
  });

  it("als gebruiker wil ik het verschil kunnen zien tussen een tertiary en een gewone knop", async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const tertiaryButton = await vlButtonPage.getTertiaryButton();
    await assert.eventually.isFalse(primaryButton.isTertiary());
    await assert.eventually.isTrue(tertiaryButton.isTertiary());
  });

  it("als gebruiker zie ik een link button", async () => {
    const linkButton = await vlButtonPage.getLinkButton();
    await assert.eventually.isTrue(linkButton.isDisplayed());
    await assert.eventually.equal(linkButton.getText(), "Ga naar startpagina");
  });
});
