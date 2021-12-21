import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlButtonPill } from './button-pill.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-pill-vl-button-pill--default`;

describe('vl-pill', async () => {
  let driver;
  let identifier = 'button';

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker zie ik een pill button', async () => {
    await driver.get(defaultUrl);
    const pillButton = await new VlButtonPill(driver, identifier);
    await assert.eventually.isTrue(pillButton.isDisplayed());
    await assert.eventually.equal(pillButton.getText(), 'Optie 1');
  });
});
