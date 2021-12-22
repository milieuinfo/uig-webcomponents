import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlButtonInputAddon } from './button-input-addon';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-input-addon-vl-button-input-addon--default`;

describe('vl-input-addon', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker zie ik een input addon', async () => {
    await driver.get(defaultUrl);
    const inputAddonButton = await new VlButtonInputAddon(driver, 'button[is="vl-button-input-addon"]');
    await assert.eventually.isTrue(inputAddonButton.isDisplayed());
    const inputAddonButtonIcon = await inputAddonButton.getIcon();
    await assert.eventually.isTrue(inputAddonButtonIcon.isDisplayed());
    await assert.eventually.equal(inputAddonButtonIcon.getType(), 'location');
  });
});
