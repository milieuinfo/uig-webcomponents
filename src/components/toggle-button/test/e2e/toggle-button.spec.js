import { assert, getDriver, config } from '../../../../utils/test';
import { VlTestToggleButton } from './toggle-button';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-toggle-button--default`;
const controlledUrl = `${sbUrl}?id=custom-elements-vl-toggle-button--controlled`;
const selector = 'vl-toggle-button';

describe('vl-toggle-button', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the toggle button text', async () => {
    await driver.get(defaultUrl);
    const toggleButton = await new VlTestToggleButton(driver, selector);

    await assert.eventually.equal(toggleButton.getText(), 'Toggle button');
  });

  it('as a user, I can hide the toggle button text', async () => {
    await driver.get(`${defaultUrl}&args=textHidden:true`);
    const toggleButton = await new VlTestToggleButton(driver, selector);

    await assert.eventually.isTrue(toggleButton.hasHiddenText());
  });

  it('as a user, I can see the toggle button icon', async () => {
    await driver.get(defaultUrl);
    const toggleButton = await new VlTestToggleButton(driver, selector);

    const button = await toggleButton.getButton();
    const icon = await button.getIcon();
    await assert.eventually.equal(icon.getType(), 'pencil');
  });

  it('as a user, I can see the toggle button icon on the left of the text', async () => {
    await driver.get(`${defaultUrl}&args=iconPlacement:before`);
    const toggleButton = await new VlTestToggleButton(driver, selector);

    const button = await toggleButton.getButton();
    const icon = await button.getIcon();

    await assert.eventually.isTrue(icon.isBefore());
  });

  it('as a user, I can see the toggle button icon on the right of the text', async () => {
    await driver.get(defaultUrl);
    const toggleButton = await new VlTestToggleButton(driver, selector);

    const button = await toggleButton.getButton();
    const icon = await button.getIcon();

    await assert.eventually.isTrue(icon.isAfter());

    await driver.get(`${defaultUrl}&args=iconPlacement:after`);
    const toggleButtonAfter = await new VlTestToggleButton(driver, selector);

    const buttonAfter = await toggleButtonAfter.getButton();
    const iconAfter = await buttonAfter.getIcon();

    await assert.eventually.isTrue(iconAfter.isAfter());
  });

  it('as a user I can see the difference between a disabled toggle button and a normal toggle button', async () => {
    await driver.get(defaultUrl);
    const toggleButton = await new VlTestToggleButton(driver, selector);

    await assert.eventually.isFalse(toggleButton.isDisabled());

    await driver.get(`${defaultUrl}&args=disabled:true`);
    const toggleButtonDisabled = await new VlTestToggleButton(driver, selector);

    await assert.eventually.isTrue(toggleButtonDisabled.isDisabled());
  });

  it('as a user I can click on a toggle button to change its active state', async () => {
    await driver.get(defaultUrl);

    const toggleButton = await new VlTestToggleButton(driver, selector);

    const button = await toggleButton.getButton();
    await assert.eventually.isTrue(button.isTertiary());

    await toggleButton.click();

    await assert.eventually.isFalse(button.isTertiary());
  });

  it('as a user I can click on a toggle button and the click event gets fired', async () => {
    await driver.get(defaultUrl);

    const toggleButton = await new VlTestToggleButton(driver, selector);

    await toggleButton.driver.executeScript(
      'arguments[0].addEventListener("click", () => {window.clickIsFired = true})',
      toggleButton,
    );

    await toggleButton.click();

    const clickIsFired = await toggleButton.driver.executeScript('return window.clickIsFired');
    assert.isTrue(clickIsFired);

    await toggleButton.driver.executeScript(
      'arguments[0].removeEventListener("click", () => {window.clickIsFired = true})',
      toggleButton,
    );
  });

  it('as a user I can click on a toggle button and the change event gets fired', async () => {
    await driver.get(defaultUrl);

    const toggleButton = await new VlTestToggleButton(driver, selector);

    await toggleButton.driver.executeScript(
      'arguments[0].addEventListener("change", () => {window.changeIsFired = true})',
      toggleButton,
    );

    await toggleButton.click();

    const changeIsFired = await toggleButton.driver.executeScript('return window.changeIsFired');
    assert.isTrue(changeIsFired);

    await toggleButton.driver.executeScript(
      'arguments[0].removeEventListener("change", () => {window.changeIsFired = true})',
      toggleButton,
    );
  });

  it('as a user I can control the active state of the toggle button', async () => {
    await driver.get(controlledUrl);

    const toggleButton = await new VlTestToggleButton(driver, selector);

    const button = await toggleButton.getButton();
    await assert.eventually.isTrue(button.isTertiary());
    await assert.eventually.isFalse(toggleButton.isActive());

    await toggleButton.setActive(true);

    await assert.eventually.isFalse(button.isTertiary());
    await assert.eventually.isTrue(toggleButton.isActive());
  });

  it('as a user I can control the active state of the toggle button and the change event gets fired', async () => {
    await driver.get(controlledUrl);

    const toggleButton = await new VlTestToggleButton(driver, selector);

    await toggleButton.driver.executeScript(
      'arguments[0].addEventListener("change", () => {window.changeIsFired = true})',
      toggleButton,
    );

    await toggleButton.setActive(true);

    const changeIsFired = await toggleButton.driver.executeScript('return window.changeIsFired');
    assert.isTrue(changeIsFired);

    await toggleButton.driver.executeScript(
      'arguments[0].removeEventListener("change", () => {window.changeIsFired = true})',
      toggleButton,
    );
  });
});
