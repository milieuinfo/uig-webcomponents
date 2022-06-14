import { assert, getDriver, config } from '../../../../utils/test';
import { VlBreadcrumb } from './autocomplete.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-breadcrumb--default`;

describe('vl-breadcrumb', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can see a breadcrumb with items', async () => {
    await driver.get(defaultUrl);
    const breadcrumb = await new VlBreadcrumb(driver, 'vl-breadcrumb');

    await assert.eventually.isTrue(breadcrumb.isDisplayed());
    await assert.eventually.lengthOf(breadcrumb.getLinks(), 4);
    const link1 = await breadcrumb.getLink(1);
    const link2 = await breadcrumb.getLink(2);
    const link3 = await breadcrumb.getLink(3);
    const link4 = await breadcrumb.getLink(4);
    await assert.eventually.equal(link1.getText(), 'Vlaanderen Intern');
    await assert.eventually.equal(link2.getText(), 'Regelgeving');
    await assert.eventually.equal(link3.getText(), 'Webuniversum');
    await assert.eventually.equal(link4.getText(), 'Componenten');
  });
});
