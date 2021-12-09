import { assert, getDriver, config } from '../../../../utils/test';
import { VlLink } from './link';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-link--default`;
const selector = 'a[is="vl-link"]';

describe('vl-link', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the text of a link', async () => {
    await driver.get(defaultUrl);
    const link = await new VlLink(driver, selector);
    await assert.eventually.equal(link.getText(), 'Terug naar overzicht');
  });

  it('as a dev, I can use the link wrapper block functionality', async () => {
    await driver.get(defaultUrl);
    const link = await new VlLink(driver, selector);
    await assert.eventually.isFalse(link.isBlock());

    await driver.get(`${defaultUrl}&args=block:true`);
    const blockedLink = await new VlLink(driver, selector);
    await assert.eventually.isTrue(blockedLink.isBlock());
  });

  it('as a dev, I can use the link wrapper error functionality', async () => {
    await driver.get(defaultUrl);
    const link = await new VlLink(driver, selector);
    await assert.eventually.isFalse(link.isError());

    await driver.get(`${defaultUrl}&args=error:true`);
    const errorLink = await new VlLink(driver, selector);
    await assert.eventually.isTrue(errorLink.isError());
  });
});
