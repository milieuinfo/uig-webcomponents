import { assert, getDriver, config } from '../../../../utils/test';
import { VlImage } from './image';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-image--default`;
const selector = 'img[is="vl-image"]';

describe('vl-image', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see an image', async () => {
    await driver.get(defaultUrl);
    const image = await new VlImage(driver, selector);
    await assert.eventually.isTrue(image.isDisplayed());
  });
});
