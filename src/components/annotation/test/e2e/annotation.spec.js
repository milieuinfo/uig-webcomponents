import { assert, getDriver, config } from '../../../../utils/test';
import { VlTestAnnotation } from './annotation.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-annotation--default`;
const selector = 'vl-annotation';

describe('vl-annotation', async () => {
  let driver;

  function delay(interval) {
    return it('should delay', (done) => {
      setTimeout(() => done(), interval);
    }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
  }

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the annotation with the correct content and normal style', async () => {
    await driver.get(`${defaultUrl}&args=content:AnnotationText`);
    const autocomplete = await new VlTestAnnotation(driver, selector);

    await assert.eventually.equal(autocomplete.getTextContent(), 'AnnotationText');
    await assert.eventually.equal(autocomplete.hasSmallClassName(), false);
  });

  it('as a user, I can see the annotation with the correct content and small style', async () => {
    await driver.get(`${defaultUrl}&args=content:SmallAnnotationText;small:true`);
    const autocomplete = await new VlTestAnnotation(driver, selector);

    await assert.eventually.equal(autocomplete.getTextContent(), 'SmallAnnotationText');
    await assert.eventually.equal(autocomplete.hasSmallClassName(), true);
  });
});
