import { By, Page, config } from '../../../../utils/test';
import { VlUpload } from './upload';

export class VlUploadPage extends Page {
  async getUpload() {
    return this._getUpload('#vl-upload');
  }

  async getUploadError() {
    return this._getUpload('#vl-upload-error');
  }

  async getUploadSuccess() {
    return this._getUpload('#vl-upload-success');
  }

  async getUploadAutoProcess() {
    return this._getUpload('#vl-upload-auto-process');
  }

  async getUploadClear() {
    return this._getUpload('#vl-upload-clear');
  }

  async getUploadMax5() {
    return this._getUpload('#vl-upload-max-5');
  }

  async getUploadMaxSize() {
    return this._getUpload('#vl-upload-max-10-kb');
  }

  async getUploadUnique() {
    return this._getUpload('#vl-upload-unique');
  }

  async getUploadFileTypes() {
    return this._getUpload('#vl-upload-file-types');
  }

  async getUploadProgrammatically() {
    return this._getUpload('#vl-upload-programmatically');
  }

  async getUploadCustomTextViaAttributes() {
    return this._getUpload('#vl-upload-custom-text');
  }

  async getUploadCustomTextViaSlot() {
    return this._getUpload('#vl-title-sub-title-slot');
  }

  async getUploadDisabled() {
    return this._getUpload('#vl-upload-disabled');
  }

  async listenForEventsOnUpload() {
    const addListenerButton = await this.driver.findElement(By.css('#vl-upload-listener-button'));
    return addListenerButton.click();
  }

  async getVlUploadLogText() {
    const log = await this.driver.findElement(By.css('#vl-upload-log'));
    return log.getText();
  }

  async uploadClearButton() {
    return this.driver.findElement(By.css('#vl-upload-clear-button'));
  }

  async changeAllUploadUrlsTo(url) {
    const script = `document.querySelectorAll("vl-upload").forEach(upload => upload.setAttribute("url", "${url}"));`;
    return this.driver.executeScript(script);
  }

  async clearAllUploads() {
    const uploads = await this.driver.findElements(By.css('vl-upload'));
    await Promise.all(uploads.map((upload) => this.driver.executeScript('arguments[0].clear();', upload)));
  }

  async uploadFiles() {
    return this.driver.executeScript(`document.querySelector("#vl-upload").upload();`);
  }

  async addFileProgrammatically() {
    const button = await this.driver.findElement(By.css('#add-file'));
    await button.click();
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/upload/test/e2e/index.html`);
  }

  async _getUpload(selector) {
    return new VlUpload(this.driver, selector);
  }
}
