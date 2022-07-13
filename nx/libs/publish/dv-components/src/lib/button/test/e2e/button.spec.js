import { assert, getDriver } from '../../../../utils/test';
import { VlButtonPage } from './button.page.js';

describe('vl-button', async () => {
  let vlButtonPage;

  before(() => {
    vlButtonPage = new VlButtonPage(getDriver());
    return vlButtonPage.load();
  });

  it('as a user I want my click to be registered when I click a button', async () => {
    const button = await vlButtonPage.getPrimaryButton();
    await assert.eventually.equal(button.getText(), 'Gegevens opslaan');
    await button.click();
    await assert.eventually.equal(button.getText(), 'Klik geregistreerd');
  });

  it("as a user I don't want my click to be registered when I click on a disabled button", async () => {
    const button = await vlButtonPage.getDisabledButton();
    await assert.eventually.equal(button.getText(), 'Gegevens opslaan');
    await button.click();
    await assert.eventually.equal(button.getText(), 'Gegevens opslaan');
    await assert.eventually.isFalse(button.isEnabled());
    await assert.eventually.isTrue(button.isDisabled());
  });

  it('as a user I want to be able to see the difference between an error and a normal button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const errorButton = await vlButtonPage.getErrorButton();
    await assert.eventually.isFalse(primaryButton.isError());
    await assert.eventually.isTrue(errorButton.isError());
  });

  it('as a user I want to be able to see the difference between a button with and without an icon', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const iconBeforeButton = await vlButtonPage.getIconBeforeButton();
    const iconBeforeButtonIcon = await iconBeforeButton.getIcon();
    await assert.eventually.isFalse(primaryButton.hasIcon());
    await assert.eventually.isTrue(iconBeforeButton.hasIcon());
    await assert.eventually.equal(iconBeforeButtonIcon.getType(), 'location');
  });

  it('as a user I want to be able to see an icon before and after the text in the button', async () => {
    const iconBeforeButton = await vlButtonPage.getIconBeforeButton();
    const iconAfterButton = await vlButtonPage.getIconAfterButton();
    const iconBeforeButtonIcon = await iconBeforeButton.getIcon();
    const iconAfterButtonIcon = await iconAfterButton.getIcon();
    await assert.eventually.equal(iconBeforeButton.getText(), 'Contactpersoon opslaan');
    await assert.eventually.isTrue(iconBeforeButtonIcon.isBefore());
    await assert.eventually.isFalse(iconBeforeButtonIcon.isAfter());
    await assert.eventually.equal(iconAfterButton.getText(), 'Contactpersoon opslaan');
    await assert.eventually.isFalse(iconAfterButtonIcon.isBefore());
    await assert.eventually.isTrue(iconAfterButtonIcon.isAfter());
  });

  it('as a user I want to be able to see the difference between a block and a regular button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const blockButton = await vlButtonPage.getBlockButton();
    await assert.eventually.isFalse(primaryButton.isBlock());
    await assert.eventually.isTrue(blockButton.isBlock());
  });

  it('as a user I want to be able to see the difference between a large and a regular button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const largeButton = await vlButtonPage.getLargeButton();
    await assert.eventually.isFalse(primaryButton.isLarge());
    await assert.eventually.isTrue(largeButton.isLarge());
  });

  it('as a user I want to be able to see the difference between a wide and a regular button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const wideButton = await vlButtonPage.getWideButton();
    await assert.eventually.isFalse(primaryButton.isWide());
    await assert.eventually.isTrue(wideButton.isWide());
  });

  it('as a user I want to be able to see the difference between a narrow and a regular button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const narrowButton = await vlButtonPage.getNarrowButton();
    await assert.eventually.isFalse(primaryButton.isNarrow());
    await assert.eventually.isTrue(narrowButton.isNarrow());
  });

  it('as a user I want to be able to see the difference between a loading and a regular button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const loadingButton = await vlButtonPage.getLoadingButton();
    await assert.eventually.isFalse(primaryButton.isLoading());
    await assert.eventually.isTrue(loadingButton.isLoading());
  });

  it('as a user I want to be able to see the difference between a secondary and a regular button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const secondaryButton = await vlButtonPage.getSecondaryButton();
    await assert.eventually.isFalse(primaryButton.isSecondary());
    await assert.eventually.isTrue(secondaryButton.isSecondary());
  });

  it('as a user I want to be able to see the difference between a tertiary and a regular button', async () => {
    const primaryButton = await vlButtonPage.getPrimaryButton();
    const tertiaryButton = await vlButtonPage.getTertiaryButton();
    await assert.eventually.isFalse(primaryButton.isTertiary());
    await assert.eventually.isTrue(tertiaryButton.isTertiary());
  });

  it('as a user I see a link button', async () => {
    const linkButton = await vlButtonPage.getLinkButton();
    await assert.eventually.isTrue(linkButton.isDisplayed());
    await assert.eventually.equal(linkButton.getText(), 'Ga naar startpagina');
  });
});
