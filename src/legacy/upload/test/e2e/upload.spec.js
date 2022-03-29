import path from 'path';
import remote from 'selenium-webdriver/remote';
import { assert, getDriver, config } from '../../../../utils/test';
import { VlUploadPage } from './upload.page';
import { FileUploadServer } from './file-upload-server';

describe('vl-upload', async () => {
  let driver;
  let vlUploadPage;
  let fileUploadServer;
  const uploadServerPort = 8888;
  const uploadServerPath = '/post';
  const PDF_FILE = 'file.pdf';
  const TXT_FILE = 'file.txt';

  before(async () => {
    driver = getDriver();
    vlUploadPage = new VlUploadPage(driver);
    const host = config.baseUrl.match(/http:\/\/(.*):(.*)/)[1];
    await vlUploadPage.load();
    await vlUploadPage.changeAllUploadUrlsTo(`http://${host}:${uploadServerPort}${uploadServerPath}`);
    fileUploadServer = new FileUploadServer(uploadServerPort, uploadServerPath);
    await fileUploadServer.start();
    driver.setFileDetector(new remote.FileDetector());
  });

  beforeEach(async () => {
    fileUploadServer.reset();
    await vlUploadPage.clearAllUploads();
  });

  after(() => fileUploadServer.stop());

  const file = (name) => {
    if (config.browserstack) {
      switch (name) {
        case PDF_FILE:
          return 'C:\\Users\\hello\\Documents\\documents\\pdf-sample1.pdf';
        case TXT_FILE:
          return 'C:\\Users\\hello\\Documents\\documents\\text-sample1.txt';
        default:
          break;
      }
    } else {
      const __dirname = path.dirname(new URL(import.meta.url).pathname);
      return path.resolve(__dirname, `./${name}`);
    }
  };

  it('as a user I can select a file to upload without immediately uploading', async () => {
    const upload = await vlUploadPage.getUpload();
    await upload.uploadFile(file(PDF_FILE));
    await assert.eventually.lengthOf(upload.getFiles(), 1);
    const files = await upload.getFiles();
    assert.equal(fileUploadServer.uploadedFiles.length, 0);
    await assert.eventually.isFalse(files[0].isProcessing());
    await assert.eventually.isFalse(files[0].isSuccess());
    await assert.eventually.isFalse(files[0].isError());
  });

  it('as a user I can select multiple files to upload en programmatically upload them', async () => {
    const upload = await vlUploadPage.getUpload();
    await upload.uploadFile(file(PDF_FILE));
    await vlUploadPage.uploadFiles();
    await driver.wait(async () => fileUploadServer.uploadedFiles.length === 1);
    await assert.eventually.lengthOf(upload.getFiles(), 1);
    const files = await upload.getFiles();
    await assert.eventually.isTrue(files[0].isProcessing());
    await assert.eventually.isTrue(files[0].isSuccess());
    await assert.eventually.isFalse(files[0].isError());
  });

  it('as a user I can immediately upload a file when selecting', async () => {
    const upload = await vlUploadPage.getUploadAutoProcess();
    await upload.uploadFile(file(PDF_FILE));
    await driver.wait(async () => {
      const files = await upload.getFiles();
      return files.length === 1 && fileUploadServer.uploadedFiles.length === 1;
    });
  });

  it('as a user I can see the difference between a normal upload and an upload with an error state', async () => {
    const upload = await vlUploadPage.getUpload();
    const uploadError = await vlUploadPage.getUploadError();
    await assert.eventually.isFalse(upload.isError());
    await assert.eventually.isTrue(uploadError.isError());
  });

  it('as a user I can see the difference between a normal upload and an upload with a success state', async () => {
    const upload = await vlUploadPage.getUpload();
    const uploadSuccess = await vlUploadPage.getUploadSuccess();
    await assert.eventually.isFalse(upload.isSuccess());
    await assert.eventually.isTrue(uploadSuccess.isSuccess());
  });

  it('as a user I can see an error message when uploading a file fails', async () => {
    const upload = await vlUploadPage.getUploadAutoProcess();
    fileUploadServer.failUploads();
    await upload.uploadFile(file(PDF_FILE));
    await assert.eventually.lengthOf(upload.getFiles(), 1);
    let files;
    await driver.wait(async () => {
      files = await upload.getFiles();
      return (await files[0].getErrorMessage()) === 'Uw bestand kon niet verwerkt worden';
    });
    await assert.eventually.isTrue(files[0].isProcessing());
    await assert.eventually.isFalse(files[0].isSuccess());
    await assert.eventually.isTrue(files[0].isError());
  });

  it('as a user I can programmatically empty the list of selected files', async () => {
    const upload = await vlUploadPage.getUploadClear();
    await upload.uploadFile(file(PDF_FILE));
    await assert.eventually.lengthOf(upload.getFiles(), 1);
    const clearButton = await vlUploadPage.uploadClearButton();
    await clearButton.click();
    await assert.eventually.lengthOf(upload.getFiles(), 0);
  });

  it('as a user i can define the maximum file size', async () => {
    const upload = await vlUploadPage.getUploadMaxSize();
    await assert.eventually.equal(upload.getMaximumFilesize(), 10000);
    const largeFile = file(PDF_FILE);
    await upload.uploadFile(largeFile);
    const filesTooBig = await upload.getFiles();
    await assert.eventually.equal(
      filesTooBig[0].getErrorMessage(),
      'De grootte van het bestand mag maximaal 10 KB zijn.',
    );
  });

  it('as a user I can disallow uploading the same file multiple times', async () => {
    const upload = await vlUploadPage.getUploadUnique();
    await assert.eventually.isTrue(upload.isDuplicatesDisallowed());
    await upload.uploadFile(file(TXT_FILE));
    await upload.uploadFile(file(TXT_FILE));
    await assert.eventually.lengthOf(upload.getFiles(), 1);
    await upload.uploadFile(file(PDF_FILE));
    await assert.eventually.lengthOf(upload.getFiles(), 2);
  });

  it('as a user I can allow certain filetypes', async () => {
    const upload = await vlUploadPage.getUploadFileTypes();
    await assert.eventually.equal(upload.getAcceptedFileTypes(), 'application/pdf, .png');
    await upload.uploadFile(file(TXT_FILE));
    await assert.eventually.lengthOf(upload.getFiles(), 1);
    const files = await upload.getFiles();
    await assert.eventually.equal(files[0].getErrorMessage(), 'Je kan enkel application/pdf, .png bestanden opladen');
  });

  it('as a user I can receive events when files are uploaded', async () => {
    const upload = await vlUploadPage.getUpload();
    await vlUploadPage.listenForEventsOnUpload();
    await upload.uploadFile(file(TXT_FILE));
    await assert.eventually.include(vlUploadPage.getVlUploadLogText(), 'Bestanden in vl-upload: ');
  });

  it('as a user I can remove a selected file', async () => {
    const upload = await vlUploadPage.getUpload();
    await upload.uploadFile(file(PDF_FILE));
    await assert.eventually.lengthOf(upload.getFiles(), 1);
    const files = await upload.getFiles();
    await files[0].remove();
    await assert.eventually.lengthOf(upload.getFiles(), 0);
  });

  it('as a user I can cancel the upload when the file is uploading', async () => {
    const upload = await vlUploadPage.getUploadAutoProcess();
    fileUploadServer.haltUploads();
    await upload.uploadFile(file(PDF_FILE));
    await driver.wait(async () => (await upload.getFiles()).length == 1);
    const files = await upload.getFiles();
    await files[0].remove();
    await assert.eventually.lengthOf(upload.getFiles(), 0);
  });

  it('as a user I can define the number of files that can be uploaded', async () => {
    const upload = await vlUploadPage.getUploadMax5();
    await assert.eventually.equal(upload.getMaximumNumberOfAllowedFiles(), 5);
    for (let i = 1; i <= 6; i += 1) {
      await upload.uploadFile(file(TXT_FILE));
    }
    const files = await upload.getFiles();
    for (let i = 1; i <= 5; i += 1) {
      await assert.eventually.equal(files[i - 1].getErrorMessage(), '');
    }
    await assert.eventually.equal(files[5].getErrorMessage(), 'Je kan maximaal 5 file(s) uploaden.');
  });

  it('as a user I can programmatically add a file', async () => {
    const upload = await vlUploadPage.getUploadProgrammatically();
    await assert.eventually.lengthOf(upload.getFiles(), 0);
    await vlUploadPage.addFileProgrammatically();
    const files = await upload.getFiles();
    await assert.lengthOf(files, 1);
  });

  it('as a user I can see the difference between an upload with a personalized title and subtitle and a standard upload', async () => {
    let upload = await vlUploadPage.getUpload();
    await assert.eventually.equal(upload.getTitle(), 'Bijlage toevoegen');
    await assert.eventually.equal(upload.getSubTitle(), 'Sleep de bijlage naar hier om toe te voegen');
    upload = await vlUploadPage.getUploadCustomTextViaAttributes();
    await assert.eventually.equal(upload.getTitle(), 'Afbeelding toevoegen');
    await assert.eventually.equal(upload.getSubTitle(), 'Sleep de afbeelding naar hier om toe te voegen');
  });

  it('as a user I can see the difference between an upload with a personalized title and subtitle using slots and a standard upload', async () => {
    let upload = await vlUploadPage.getUpload();
    await assert.eventually.equal(upload.getTitle(), 'Bijlage toevoegen');
    await assert.eventually.equal(upload.getSubTitle(), 'Sleep de bijlage naar hier om toe te voegen');
    upload = await vlUploadPage.getUploadCustomTextViaSlot();
    await assert.eventually.equal(upload.getTitle(), 'Titel');
    await assert.eventually.equal(upload.getSubTitle(), 'Sub-titel');
  });

  it(`as a user I can't upload a file when the element is disabled`, async () => {
    const upload = await vlUploadPage.getUploadDisabled();
    await upload.uploadFile(file(PDF_FILE));
    assert.equal(fileUploadServer.uploadedFiles.length, 0);
  });
});
