import { By, Key, Builder } from 'selenium-webdriver';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { config } from './config.js';

chai.use(chaiAsPromised);
let driver;

before((done) => {
  if (config.gridEnabled) {
    driver = new Builder().usingServer(config.gridUrl).forBrowser(config.browserName).build();
  } else {
    driver = new Builder().forBrowser(config.browserName).build();
  }
  done();
});

after((done) => {
  try {
    if (driver) {
      driver.close().then(() => {
        driver.quit().then(() => {
          done();
        });
      });
    } else {
      done();
    }
  } catch (e) {
    process.exit();
  }
});

const getDriver = () => driver;
const { assert } = chai;

export { By, Key, assert, getDriver };
