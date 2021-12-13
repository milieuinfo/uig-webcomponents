import { assert, getDriver, config } from '../../../../utils/test';
import { VlFunctionalHeader } from './functional-header';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-functional-header--default`;
const withSlotsUrl = `${sbUrl}?id=custom-elements-vl-functional-header--with-slot-elements`;
const withActionsUrl = `${sbUrl}?id=custom-elements-vl-functional-header--with-user-interaction`;
const selector = 'vl-functional-header';

describe('vl-functional-header', async () => {
  let driver;
  const getCurrentUrl = async () => await driver.getCurrentUrl();

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the title and sub title of the functional header', async () => {
    await driver.get(defaultUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const title = await functionalHeader.getTitle();
    const subTitle = await functionalHeader.getSubTitle();
    await assert.eventually.equal(title.getText(), 'SCHOOL- EN STUDIETOELAGEN');
    await assert.eventually.equal(subTitle.getText(), 'Voor lager, middelbaar en hoger onderwijs');
  });

  it('as a user, I can the title and sub title of the functional header set via a slot', async () => {
    await driver.get(withSlotsUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const titleSlotNodes = await functionalHeader.getTitleSlotNodes();
    const subTitleSlotNodes = await functionalHeader.getSubTitleSlotNodes();
    await assert.eventually.equal(titleSlotNodes[0].getText(), 'SCHOOL- EN STUDIETOELAGEN');
    await assert.eventually.equal(subTitleSlotNodes[0].getText(), 'Voor lager, middelbaar en hoger onderwijs');
  });

  it('as a user, I can click on the title link', async () => {
    await driver.get(defaultUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const title = await functionalHeader.getTitle();
    await assert.eventually.isTrue(getCurrentUrl().then((url) => url.endsWith('&viewMode=story')));
    await title.click();
    await assert.eventually.isFalse(getCurrentUrl().then((url) => url.endsWith('&viewMode=story')));
    await assert.eventually.isTrue(getCurrentUrl().then((url) => url.endsWith('#')));
  });

  it('as a user, I can click on an action', async () => {
    await driver.get(withActionsUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const actions = await functionalHeader.getActionNodes();
    await actions[0].click();
    await assert.eventually.isTrue(getCurrentUrl().then((url) => url.endsWith('#')));
  });
});
