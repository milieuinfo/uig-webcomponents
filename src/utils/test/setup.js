import { By, Key, Builder } from 'selenium-webdriver';
import browserstack from 'browserstack-local';
import { config } from './config.js';
import { name } from '../../../package.json';

// let packagejson;
// try {
//   packagejson = require("../../../package.json");
// } catch (e) {
//   packagejson = require("../../package.json");
// }

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
export const { assert } = chai;
const identifier = `${name}-${config.browserName}-browserstack-identifier`;

const capabilities = {
  resolution: '1920x1080',
  os: config.osName,
  os_version: config.osVersion,
  browserName: config.browserName,
  browser_version: config.browserVersion,
  name,
  build: 'Webcomponenten',
  'browserstack.user': process.env.browserstack_username,
  'browserstack.key': process.env.browserstack_password,
  'browserstack.local': true,
  'browserstack.localIdentifier': identifier,
  'browserstack.selenium_version': '4.0.0-alpha-6',
  'browserstack.idleTimeout': 300,
  'browserstack.SO_TIMEOUT': 300,
};

const startConfig = {
  key: process.env.browserstack_password,
  force: true,
  forcelocal: true,
  proxyHost: 'forwardproxy-pr-build.lb.cumuli.be',
  proxyPort: 3128,
  localIdentifier: identifier,
};

let bsLocal;
let driver;

export const getDriver = () => driver;

before((done) => {
  if (config.browserstack) {
    bsLocal = new browserstack.Local();
    try {
      bsLocal.start(startConfig, () => {
        driver = new Builder()
          .usingServer('https://hub-cloud.browserstack.com/wd/hub')
          .withCapabilities(capabilities)
          // .usingWebDriverProxy('http://forwardproxy-pr-build.lb.cumuli.be:3128')
          .build();
        done();
      });
    } catch (e) {
      console.log(e);
      process.exit();
    }
  } else {
    driver = new Builder().forBrowser(config.browserName).build();
    done();
  }
});

after((done) => {
  try {
    if (driver) {
      driver.close().then(() => {
        driver.quit().then(() => {
          if (bsLocal) {
            bsLocal.stop(() => done());
          } else {
            done();
          }
        });
      });
    } else {
      done();
    }
  } catch (e) {
    console.log(e);
    process.exit();
  }
});

export { By };
export { Key };
