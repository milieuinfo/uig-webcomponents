import { assert, getDriver, config, By } from '../../../../utils/test';
import { VlToggleButton } from './toggle-button';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-toggle-button--default`;
const hiddenTextUrl = `${sbUrl}?id=custom-elements-vl-toggle-button--default&args=textHidden:true`;
const beforeUrl = `${sbUrl}?id=custom-elements-vl-toggle-button--default&args=iconPlacement:before`;
const afterUrl = `${sbUrl}?id=custom-elements-vl-toggle-button--default&args=iconPlacement:after`;
const disabledUrl = `${sbUrl}?id=custom-elements-vl-toggle-button--default&args=disabled:true`;
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
    const toggleButton = await new VlToggleButton(driver, selector);

    await assert.eventually.equal(toggleButton.getText(), 'Toggle button');
  });

  it('as a user, I can hide the toggle button text', async () => {
    await driver.get(hiddenTextUrl);
    const toggleButton = await new VlToggleButton(driver, selector);

    await assert.eventually.isTrue(toggleButton.hasHiddenText());
  });

  it('as a user, I can see the toggle button icon', async () => {
    await driver.get(defaultUrl);
    const toggleButton = await new VlToggleButton(driver, selector);

    const button = await toggleButton.getButton();
    const icon = await button.getIcon();
    await assert.eventually.equal(icon.getType(), 'pencil');
  });

  it('as a user, I can see the toggle button icon on the left of the text', async () => {
    await driver.get(beforeUrl);
    const toggleButton = await new VlToggleButton(driver, selector);

    const button = await toggleButton.getButton();
    const icon = await button.getIcon();

    await assert.eventually.isTrue(icon.isBefore());
  });

  it('as a user, I can see the toggle button icon on the right of the text', async () => {
    await driver.get(defaultUrl);
    let toggleButton = await new VlToggleButton(driver, selector);

    let button = await toggleButton.getButton();
    let icon = await button.getIcon();

    await assert.eventually.isTrue(icon.isAfter());

    await driver.get(afterUrl);
    toggleButton = await new VlToggleButton(driver, selector);

    button = await toggleButton.getButton();
    icon = await button.getIcon();

    await assert.eventually.isTrue(icon.isAfter());
  });

  it('as a user I can see the difference between a disabled toggle button and a normal toggle button', async () => {
    await driver.get(defaultUrl);
    let toggleButton = await new VlToggleButton(driver, selector);

    await assert.eventually.isFalse(toggleButton.isDisabled());

    await driver.get(disabledUrl);
    toggleButton = await new VlToggleButton(driver, selector);

    await assert.eventually.isTrue(toggleButton.isDisabled());
  });

  it('as a user I can click on a toggle button to change its active state', async () => {
    await driver.get(defaultUrl);

    let toggleButton = await new VlToggleButton(driver, selector);

    await assert.eventually.isTrue(toggleButton.isInactive());

    toggleButton.click();

    toggleButton = await new VlToggleButton(driver, selector);

    await assert.eventually.isTrue(toggleButton.isActive());
  });
});
