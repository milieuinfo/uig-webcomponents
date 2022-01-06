import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlButtonPill } from './button-pill.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-pill-vl-button-pill--default`;

describe('vl-button-pill', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see a button pill', async () => {
    await driver.get(defaultUrl);
    const buttonPill = await new VlButtonPill(driver, 'button[is="vl-button-pill"]');
    await assert.eventually.isTrue(buttonPill.isDisplayed());
    await assert.eventually.equal(buttonPill.getText(), 'Optie 1');
  });
});
