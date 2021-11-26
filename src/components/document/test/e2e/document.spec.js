import { assert, getDriver, config } from '../../../../utils/test';
import { VlDocument } from './document';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-document--default`;

describe('vl-document', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can view the document type', async () => {
    await driver.get(defaultUrl);
    const document = await new VlDocument(driver, 'vl-document');
    await assert.eventually.equal(document.getType(), 'PDF');
  });

  it('as a user, I can view the document title', async () => {
    await driver.get(defaultUrl);
    const document = await new VlDocument(driver, 'vl-document');
    await assert.eventually.equal(document.getTitle(), 'Hubert en Jan van Eyck, Vlaamse Primitieven');
  });

  it('as a user, I can view the document metadata', async () => {
    await driver.get(defaultUrl);
    const document = await new VlDocument(driver, 'vl-document');
    await assert.eventually.equal(document.getMetadata(), 'PDF - 580 kB');
  });
});
