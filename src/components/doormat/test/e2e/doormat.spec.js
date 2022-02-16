import { assert, getDriver, config } from '../../../../utils/test';
import { VlDoormat } from './doormat';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-doormat--default`;
const imageUrl = `${sbUrl}?id=native-elements-vl-doormat-vl-doormat-image--default`;
const selector = '[is="vl-doormat"]';

describe('vl-doormat', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the title of a doormat', async () => {
    await driver.get(defaultUrl);
    const doormat = await new VlDoormat(driver, selector);
    await assert.eventually.equal(doormat.getTitle(), 'Bouwen, wonen en energie');
  });

  it('as a user, I can see the text of a doormat', async () => {
    await driver.get(defaultUrl);
    const doormat = await new VlDoormat(driver, selector);
    await assert.eventually.equal(
      doormat.getText(),
      'De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te houden.',
    );
  });

  it('as a dev, I can use the doormat image wrapper functionality', async () => {
    await driver.get(defaultUrl);
    const doormat = await new VlDoormat(driver, selector);
    await assert.eventually.isFalse(doormat.hasImage());

    await driver.get(imageUrl);
    const imageDoormat = await new VlDoormat(driver, selector);
    await assert.eventually.isTrue(imageDoormat.hasImage());
  });

  it('as a dev, I can use the doormat alt wrapper functionality', async () => {
    await driver.get(defaultUrl);
    const doormat = await new VlDoormat(driver, selector);
    await assert.eventually.isFalse(doormat.isAlt());

    await driver.get(`${defaultUrl}&args=alt:true`);
    const altDoormat = await new VlDoormat(driver, selector);
    await assert.eventually.isTrue(altDoormat.isAlt());
  });

  it('as a dev, I can use the doormat graphic wrapper functionality', async () => {
    await driver.get(defaultUrl);
    const doormat = await new VlDoormat(driver, selector);
    await assert.eventually.isFalse(doormat.isGraphic());

    await driver.get(`${imageUrl}&args=graphic:true`);
    const graphicDoormat = await new VlDoormat(driver, selector);
    await assert.eventually.isTrue(graphicDoormat.isGraphic());
  });
});
