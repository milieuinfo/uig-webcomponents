import { assert, getDriver } from '../../../../utils/test';
import { VlStepsPage } from './steps.page.js';

describe('vl-steps', async () => {
  let vlStepsPage;

  before(() => {
    vlStepsPage = new VlStepsPage(getDriver());
    return vlStepsPage.load();
  });

  it('als gebruiker kan ik de stappen zien', async () => {
    const steps = await vlStepsPage.getSteps(1);
    await assert.eventually.lengthOf(steps.getSteps(), 5);
  });

  it('als gebruiker kan ik de identifier van de stap zien', async () => {
    const steps = await vlStepsPage.getSteps(1);
    const step = await steps.getStep(1);
    const identifier = await step.getIdentifier();
    await assert.eventually.equal(identifier.getText(), '2');
  });

  it('als gebruiker kan ik de titel en sub titel van de stap zien', async () => {
    const steps = await vlStepsPage.getSteps(1);
    const step = await steps.getStep(1);
    const title = await step.getTitle();
    const subTitle = await step.getSubTitle();
    await assert.eventually.equal(title.getText(), 'Step 2: Second action');
    await assert.eventually.equal(subTitle.getText(), 'This is a subtitle.');
  });

  it('als gebruiker kan ik het verschil zien tussen een disabled en normale stap', async () => {
    const steps = await vlStepsPage.getSteps(1);
    const step = await steps.getStep(1);
    const disabledStep = await steps.getStep(2);
    await assert.eventually.isFalse(step.isDisabled());
    await assert.eventually.isTrue(disabledStep.isDisabled());
  });

  it('als gebruiker kan ik het verschil zien tussen een stap met en zonder type', async () => {
    const steps = await vlStepsPage.getSteps(1);

    const step = await steps.getStep(1);
    await assert.eventually.isFalse(step.isSuccess());
    await assert.eventually.isFalse(step.isWarning());
    await assert.eventually.isFalse(step.isError());

    const successStep = await steps.getStep(3);
    await assert.eventually.isTrue(successStep.isSuccess());
    await assert.eventually.isFalse(successStep.isWarning());
    await assert.eventually.isFalse(successStep.isError());

    const warningStep = await steps.getStep(4);
    await assert.eventually.isFalse(warningStep.isSuccess());
    await assert.eventually.isTrue(warningStep.isWarning());
    await assert.eventually.isFalse(warningStep.isError());

    const errorStep = await steps.getStep(5);
    await assert.eventually.isFalse(errorStep.isSuccess());
    await assert.eventually.isFalse(errorStep.isWarning());
    await assert.eventually.isTrue(errorStep.isError());
  });

  it('als gebruiker kan ik de content van de stap zien', async () => {
    const steps = await vlStepsPage.getSteps(2);
    const step = await steps.getStep(1);
    const content = await step.getContent();
    await assert.eventually.equal(content.getText(), 'Now, it\'s your turn to feel that pain. The gates are open.');
  });

  it('als gebruiker kan ik de sub identifier van de stap zien', async () => {
    const steps = await vlStepsPage.getSteps(3);
    const step = await steps.getStep(1);
    const identifierAnnotation = await step.getIdentifierAnnotation();
    await assert.eventually.equal(identifierAnnotation.getText(), 'maa');
  });

  it('als gebruiker kan ik de titel annotatie van de stap zien', async () => {
    const steps = await vlStepsPage.getSteps(3);
    const step = await steps.getStep(1);
    const titleAnnotation = await step.getTitleAnnotation();
    await assert.eventually.equal(titleAnnotation.getText(), '13u00 - 15u00');
  });

  it('als gebruiker kan ik de duur stappen zien', async () => {
    const steps = await vlStepsPage.getSteps(3);
    await assert.eventually.lengthOf(steps.getDurationSteps(), 2);
  });

  it('als gebruiker kan ik de tekst van een duur stap zien', async () => {
    const steps = await vlStepsPage.getSteps(3);
    const durationStep = await steps.getDurationStep(1);
    await assert.eventually.equal(durationStep.getText(), 'Vrije tijd: 1 uur');
  });

  it('als gebruiker kan ik het verschil zien tussen een toggleable en normale stap', async () => {
    const steps = await vlStepsPage.getSteps(2);
    const step = await steps.getStep(1);
    const toggleableStep = await steps.getStep(2);
    await assert.eventually.isFalse(step.isToggleable());
    await assert.eventually.isTrue(toggleableStep.isToggleable());
  });

  it('als gebruiker kan ik een toggleable step openen en sluiten', async () => {
    const steps = await vlStepsPage.getSteps(2);
    const step = await steps.getStep(1);
    const toggleableStep = await steps.getStep(2);
    await assert.eventually.isTrue(step.isOpen());
    await assert.eventually.isFalse(toggleableStep.isOpen());
    await toggleableStep.toggle();
    await assert.eventually.isTrue(toggleableStep.isOpen());
  });
});
