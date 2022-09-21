import { By, assert, getDriver, config } from '../../../../utils/test';
import { VlFunctionalHeader } from './functional-header';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-functional-header--default`;
const withSlotsUrl = `${sbUrl}?id=custom-elements-vl-functional-header--with-slot-elements`;
const withActionsUrl = `${sbUrl}?id=custom-elements-vl-functional-header--with-user-interaction`;
const withCustomSubHeaderUrl = `${sbUrl}?id=custom-elements-vl-functional-header--inzage-functional-header`;
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
    const defaultSubHeader = await functionalHeader.getDefaultSubHeader();
    await assert.eventually.equal(title.getText(), 'SCHOOL- EN STUDIETOELAGEN');
    await assert.eventually.equal(subTitle.getText(), 'Voor lager, middelbaar en hoger onderwijs');
    await assert.eventually.equal(defaultSubHeader.getAttribute('hidden'), null);

    const topLeftSlotNodes = await functionalHeader.getTopLeftSlotNodes();
    await assert.equal(topLeftSlotNodes.length, 0);
    const topRightSlotNodes = await functionalHeader.getTopRightSlotNodes();
    await assert.equal(topRightSlotNodes.length, 0);
  });

  it('as a user, I can see the title and sub title of the functional header set via a slot', async () => {
    await driver.get(withSlotsUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const titleSlotNodes = await functionalHeader.getTitleSlotNodes();
    const subTitleSlotNodes = await functionalHeader.getSubTitleSlotNodes();
    const defaultSubHeader = await functionalHeader.getDefaultSubHeader();
    await assert.eventually.equal(titleSlotNodes[0].getText(), 'SCHOOL- EN STUDIETOELAGEN');
    await assert.eventually.equal(subTitleSlotNodes[0].getText(), 'Voor lager, middelbaar en hoger onderwijs');
    await assert.eventually.equal(defaultSubHeader.getAttribute('hidden'), null);

    const topLeftSlotNodes = await functionalHeader.getTopLeftSlotNodes();
    await assert.equal(topLeftSlotNodes.length, 0);
    const topRightSlotNodes = await functionalHeader.getTopRightSlotNodes();
    await assert.equal(topRightSlotNodes.length, 0);
  });

  it('as a user, I can click on the title link', async () => {
    await driver.get(defaultUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const title = await functionalHeader.getTitle();
    await assert.eventually.isTrue(getCurrentUrl().then((url) => url.endsWith('&viewMode=story')));
    await title.click();
    await assert.eventually.isFalse(getCurrentUrl().then((url) => url.endsWith('&viewMode=story')));
    await assert.eventually.isTrue(getCurrentUrl().then((url) => url.endsWith('#')));

    const defaultSubHeader = await functionalHeader.getDefaultSubHeader();
    await assert.eventually.equal(defaultSubHeader.getAttribute('hidden'), null);

    const topLeftSlotNodes = await functionalHeader.getTopLeftSlotNodes();
    await assert.equal(topLeftSlotNodes.length, 0);
    const topRightSlotNodes = await functionalHeader.getTopRightSlotNodes();
    await assert.equal(topRightSlotNodes.length, 0);
  });

  it('as a user, I can click on an action', async () => {
    await driver.get(withActionsUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const actions = await functionalHeader.getActionNodes();
    await actions[0].click();
    await assert.eventually.isTrue(getCurrentUrl().then((url) => url.endsWith('#')));

    const defaultSubHeader = await functionalHeader.getDefaultSubHeader();
    await assert.eventually.equal(defaultSubHeader.getAttribute('hidden'), null);

    const topLeftSlotNodes = await functionalHeader.getTopLeftSlotNodes();
    await assert.equal(topLeftSlotNodes.length, 0);
    const topRightSlotNodes = await functionalHeader.getTopRightSlotNodes();
    await assert.equal(topRightSlotNodes.length, 0);
  });

  it('as a user, I see the custom sub header and the default sub header is hidden', async () => {
    await driver.get(withCustomSubHeaderUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);
    const titleSlotNodes = await functionalHeader.getTitleSlotNodes();
    const subHeaderSlotNodes = await functionalHeader.getSubHeaderSlotNodes();
    await assert.eventually.equal(titleSlotNodes[0].getText(), 'PROJECT OVERZICHT');

    const backLinkText = await subHeaderSlotNodes[0].findElement(By.css('#back-link-text'));
    await assert.eventually.equal(backLinkText.getText(), 'Eén stap terug');
    await assert.eventually.equal(subHeaderSlotNodes[1].getText(), 'Project inhoud');
    await assert.eventually.equal(subHeaderSlotNodes[2].getText(), 'Project information');
    await assert.eventually.equal(subHeaderSlotNodes[3].getText(), 'Project verloop');

    const defaultSubHeader = await functionalHeader.getDefaultSubHeader();
    await assert.eventually.equal(defaultSubHeader.getAttribute('hidden'), 'true');

    const topLeftSlotNodes = await functionalHeader.getTopLeftSlotNodes();
    await assert.eventually.equal(topLeftSlotNodes[0].getText(), '2458963498 (MILIEUBEDRIJF - RINGVAART - OCGT)');

    const topRightSlotNodes = await functionalHeader.getTopRightSlotNodes();
    await assert.eventually.equal(topRightSlotNodes[0].getText(), 'Toestand: In beroepsperiode tot 01.02.2023');
    await assert.eventually.equal(topRightSlotNodes[1].getText(), 'Ik wens een beroepschrift aan te maken');
    await assert.eventually.equal(topRightSlotNodes[2].getText(), 'Project navigatie');
  });

  it('as a user, I see the top-left and top-right slots filled with data', async () => {
    await driver.get(withCustomSubHeaderUrl);
    const functionalHeader = await new VlFunctionalHeader(driver, selector);

    const topLeftSlotNodes = await functionalHeader.getTopLeftSlotNodes();
    await assert.eventually.equal(topLeftSlotNodes[0].getText(), '2458963498 (MILIEUBEDRIJF - RINGVAART - OCGT)');

    const topRightSlotNodes = await functionalHeader.getTopRightSlotNodes();
    await assert.eventually.equal(topRightSlotNodes[0].getText(), 'Toestand: In beroepsperiode tot 01.02.2023');
    await assert.eventually.equal(topRightSlotNodes[1].getText(), 'Ik wens een beroepschrift aan te maken');
    await assert.eventually.equal(topRightSlotNodes[2].getText(), 'Project navigatie');
  });
});
