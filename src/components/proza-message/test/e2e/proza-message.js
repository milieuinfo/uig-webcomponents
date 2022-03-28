import { VlElement, By, Key } from '../../../../utils/test';
import { VlButton } from '../../../../components/button/test/e2e/button';
import { VlTypography } from '../../../../components/typography/test/e2e/typography';
import VlToaster from '../../../../../node_modules/vl-ui-toaster/test/e2e/components/vl-toaster';

export class VlProzaMessage extends VlElement {
  async getEditButton() {
    return new VlButton(this.driver, await this.shadowRoot.findElement(By.css('#edit-button')));
  }

  async getText() {
    return (await this._getTypography()).getText();
  }

  async getWysiwygText() {
    return (await this._getWysiwyg()).getAttribute('innerText');
  }

  async hasBoldStyle() {
    return this._hasStyleElement('strong');
  }

  async hasItalicStyle() {
    return this._hasStyleElement('em');
  }

  async hasUnderlineStyle() {
    return this._hasStyleElement('span[style="text-decoration: underline;"]');
  }

  async shiftEnter() {
    const wysiwyg = await this._getWysiwyg();
    const shiftEnter = Key.chord(Key.SHIFT, Key.ENTER);
    await wysiwyg.sendKeys(shiftEnter);
  }

  async clear() {
    const wysiwyg = await this._getWysiwyg();
    await this.driver.executeScript('return arguments[0].innerText = ""', wysiwyg);
  }

  async cancel() {
    const wysiwyg = await this._getWysiwyg();
    await wysiwyg.sendKeys(Key.ESCAPE);
  }

  async confirm() {
    const wysiwyg = await this._getWysiwyg();
    await wysiwyg.sendKeys(Key.ENTER);
  }

  async edit() {
    const pencilButton = await this.getEditButton();
    await pencilButton.click();
    await this._waitUntilEditable();
  }

  async type(text) {
    const input = await this._getWysiwyg();
    await this.clear();
    await input.sendKeys(text);
  }

  async append(text) {
    const input = await this._getWysiwyg();
    await input.sendKeys(text);
  }

  async isEditable() {
    const wysiwyg = await this._getWysiwyg();
    return wysiwyg.hasAttribute('contenteditable');
  }

  async selectAllText() {
    const input = await this._getWysiwyg();
    const actions = this.driver.actions({ bridge: true });
    await await actions.doubleClick(input).perform();
  }

  async isWysiwygPresent() {
    const wrapper = await this.driver.findElement(By.css('.tox'));
    const wysiwig = await wrapper.findElement(By.css('div'));
    return !!wysiwig;
  }

  async blur() {
    await (await this.driver.findElement(By.css('body'))).click();
  }

  async clickWysiwygBoldButton() {
    await this._clickWysiwygButton('Bold');
  }

  async clickWysiwygItalicButton() {
    await this._clickWysiwygButton('Italic');
  }

  async clickWysiwygUnderlineButton() {
    await this._clickWysiwygButton('Underline');
  }

  async waitUntilWysiwygIsPresent() {
    await this.driver.wait(async () => this.isWysiwygPresent());
  }

  async _getTypography() {
    const element = await this.findElement(By.css('vl-typography'));
    return new VlTypography(this.driver, element);
  }

  async getToaster() {
    const toaster = await this.driver.findElement(By.css('[is="vl-toaster"]'));
    if (toaster) {
      return new VlToaster(this.driver, toaster);
    }
    return undefined;
  }

  async _getWysiwyg() {
    return this.findElement(By.css('#wysiwyg'));
  }

  async _waitUntilEditable() {
    await this.driver.wait(async () => this.isEditable());
  }

  async _hasStyleElement(selector) {
    const wysiwyg = await this._getWysiwyg();
    return wysiwyg
      .findElement(By.css(selector))
      .then(() => true)
      .catch(() => false);
  }

  async _clickWysiwygButton(title) {
    await this.waitUntilWysiwygIsPresent();
    const wysiwygBoldButton = await this.driver.findElement(By.css(`.tox-tbtn[title="${title}"]`));
    await wysiwygBoldButton.click();
  }
}
