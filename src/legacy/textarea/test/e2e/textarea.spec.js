import { assert, getDriver, config, By, Key } from '../../../../utils/test';
import { VlTextarea } from './textarea';
import { VlInputField } from '../../../input-field/test/e2e/input-field';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-textarea--default`;
const blockUrl = `${sbUrl}?id=native-elements-vl-textarea--default&args=block:true`;
const errorUrl = `${sbUrl}?id=native-elements-vl-textarea--default&args=error:true`;
const successUrl = `${sbUrl}?id=native-elements-vl-textarea--default&args=success:true`;
const focusUrl = `${sbUrl}?id=native-elements-vl-textarea--default&args=focus:true`;
const disabledUrl = `${sbUrl}?id=native-elements-vl-textarea--default&args=disabled:true`;
const richUrl = `${sbUrl}?id=native-elements-vl-textarea--rich-textarea`;

const selector = 'textarea';

describe('vl-textarea', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can fill in the textarea, read the added text and clear the textarea', async () => {
    await driver.get(defaultUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.setValue('Dit is de tekst in de textarea');
    await assert.eventually.equal(textarea.getValue(), 'Dit is de tekst in de textarea');
    await textarea.clear();
    await assert.eventually.equal(textarea.getValue(), '');
  });

  it('as a user I can see the difference between and inline and a block textarea', async () => {
    await driver.get(defaultUrl);
    let textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isFalse(textarea.isBlock());

    await driver.get(blockUrl);
    textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isTrue(textarea.isBlock());
  });

  it('as a user I can see the difference between a normal and an error textarea', async () => {
    await driver.get(defaultUrl);
    let textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isFalse(textarea.isError());

    await driver.get(errorUrl);
    textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isTrue(textarea.isError());
  });

  it('as a user I can see the difference between a normal and a success textarea', async () => {
    await driver.get(defaultUrl);
    let textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isFalse(textarea.isSuccess());

    await driver.get(successUrl);
    textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isTrue(textarea.isSuccess());
  });

  it('as a user I can see the difference between a normal and a focus textarea', async () => {
    await driver.get(defaultUrl);
    let textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isFalse(textarea.isFocus());

    await driver.get(focusUrl);
    textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isTrue(textarea.isFocus());
  });

  it('as a user I can see the difference between a normal and a disabled textarea', async () => {
    await driver.get(defaultUrl);
    let textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isFalse(textarea.isDisabled());

    await driver.get(disabledUrl);
    textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isTrue(textarea.isDisabled());
  });

  it('as a user I can only add text to a textarea that is not disabled', async () => {
    await driver.get(defaultUrl);
    let textarea = await new VlTextarea(driver, selector);

    await assert.eventually.isTrue(textarea.isEnabled());

    await driver.get(disabledUrl);
    textarea = await new VlTextarea(driver, selector);

    await assert.eventually.isFalse(textarea.isEnabled());

    try {
      await textarea.setValue('text');
      assert.isTrue(false);
    } catch (error) {
      return Promise.resolve();
    }
  });

  it('as a user I can see the difference between a normal and a rich textarea', async () => {
    await driver.get(defaultUrl);
    let textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isFalse(textarea.isRich());

    await driver.get(richUrl);
    textarea = await new VlTextarea(driver, selector);
    await assert.eventually.isTrue(textarea.isRich());
  });

  it('as a user I can add text to a rich textarea and a root paragraph tag will be automatically added', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'text';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `<p>${text}</p>`);
  });

  it('as a user I can add text to a rich textarea add a bold, italic, underline and strikethrough styling', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'text';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.activateBold();
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `<b>${text}</b>`);
    await textarea.deactivateBold();
    await textarea.activateItalic();
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `<i>${text}</i>`);
    await textarea.deactivateItalic();
    await textarea.activateUnderline();
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `<u>${text}</u>`);
    await textarea.deactivateUnderline();
    await textarea.activateStrikethrough();
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `<s>${text}</s>`);
    await textarea.deactivateStrikethrough();
  });

  it('ad a user I can add titles to a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'title';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.activateH1();
    await assert.eventually.include(textarea.getValue(), `<h1>${text}</h1>`);
    await textarea.activateH2();
    await assert.eventually.include(textarea.getValue(), `<h2>${text}</h2>`);
    await textarea.activateH3();
    await assert.eventually.include(textarea.getValue(), `<h3>${text}</h3>`);
    await textarea.activateH4();
    await assert.eventually.include(textarea.getValue(), `<h4>${text}</h4>`);
    await textarea.activateH5();
    await assert.eventually.include(textarea.getValue(), `<h5>${text}</h5>`);
    await textarea.activateH6();
    await assert.eventually.include(textarea.getValue(), `<h6>${text}</h6>`);
  });

  it('as I user I can add a quote to a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'quote';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.activateBlockquote();
    await assert.eventually.include(textarea.getValue(), `<blockquote>\n<p>${text}</p>\n</blockquote>`);
    await textarea.deactivateBlockquote();
    await assert.eventually.include(textarea.getValue(), `${text}`);
  });

  it('as a user I can add a horizontal line to a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'text';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.addHorizontalLine();
    await assert.eventually.include(textarea.getValue(), `<hr />`);
  });

  it('as a user I can add a numbered list to a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'item';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.addNumberedList();
    await assert.eventually.include(textarea.getValue(), `<ol>\n<li>${text}</li>\n</ol>`);
  });

  it('as a user I can add a list to a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'item';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.addList();
    await assert.eventually.include(textarea.getValue(), `<ul>\n<li>${text}</li>\n</ul>`);
  });

  it('as a user I can add a link to a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    const text = 'Google';
    const link = 'https://www.google.be';
    await textInputField.setValue(text);
    await linkInputField.setValue(link);
    await modal.submit();
    await assert.eventually.include(
      textarea.getValue(),
      `<a target="_blank" href="${link}" rel="noopener">${text}</a>`,
    );
  });

  it("as a user I get an error message if I don't provide a valid text or link when adding a link to a rich textarea", async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.isFalse(textInputField.hasError());
    await assert.eventually.isFalse(linkInputField.hasError());
    await modal.submit();
    await assert.eventually.isTrue(textInputField.hasError());
    await assert.eventually.isTrue(linkInputField.hasError());
    await modal.cancel();
  });

  it('as a user I can cancel the link modal of a rich textarea and upon opening the link modal again the input fields will be empty', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    await assert.eventually.isEmpty(textarea.getValue());
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    await textInputField.setValue('text');
    await modal.cancel();
    await textarea.addLink();
    await assert.eventually.isEmpty(textarea.getValue());
    await modal.cancel();
  });

  it('as a user I create a new paragraph element on every enter in a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'text';
    await textarea.sendKeys(text + Key.RETURN + text);
    await assert.eventually.include(textarea.getValue(), `<p>text</p>\n<p>text</p>`);
  });

  it('as I user I can copy text with styling in a rich textarea', async () => {
    if (config.browserName !== 'edge') {
      await driver.get(richUrl);
      const textarea = await new VlTextarea(driver, selector);

      await textarea.clear();
      await assert.eventually.isEmpty(textarea.getValue());
      await textarea.activateBold();
      const text = 'text';
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `<p><b>${text}</b></p>`);
      await textarea.copyPasteValue();
      await assert.eventually.include(textarea.getValue(), `<p><b>${text}${text}</b></p>`);
    }
  });

  it('as a user I can select a text in a rich textarea and add a link to it without having to re-enter the text', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'this is a link!';
    const link = 'https://www.google.be';
    await textarea.setValue(text);
    await textarea.selectValue();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.equal(textInputField.getValue(), text);
    await linkInputField.setValue(link);
    await modal.submit();
    await assert.eventually.include(
      textarea.getValue(),
      `<a target="_blank" href="${link}" rel="noopener">${text}</a>`,
    );
  });

  it('as a user I can select a text with special characters in a rich textarea and add a link to it without having to re-enter the text', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.clear();
    const text = 'this is a <spécîàl> link!';
    const link = 'https://www.google.be';
    await textarea.setValue(text);
    await textarea.selectValue();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.equal(textInputField.getValue(), text);
    await linkInputField.setValue(link);
    await modal.submit();
    await assert.eventually.include(
      textarea.getValue(),
      `<a target="_blank" href="${link}" rel="noopener">this is a &lt;sp&eacute;c&icirc;&agrave;l&gt; link!</a>`,
    );
  });

  it('as a user I can edit a link in a rich textarea', async () => {
    await driver.get(richUrl);
    const textarea = await new VlTextarea(driver, selector);

    await textarea.selectValue();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.include(textInputField.getValue(), 'Vlaanderen');
    await assert.eventually.equal(linkInputField.getValue(), 'https://www.vlaanderen.be/');
  });
});
