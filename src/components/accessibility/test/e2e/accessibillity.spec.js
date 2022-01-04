import { assert, getDriver, config } from '../../../../utils/test';
import { VlAccessibility } from './accessibility';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-accessibility--default&args=&viewMode=story`;

describe('vl-accessibility', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the accessibility statement', async () => {
    await driver.get(defaultUrl);
    const element = await new VlAccessibility(driver, 'vl-accessibility');
    await assert.eventually.isTrue(element.isDisplayed());
  });
});
