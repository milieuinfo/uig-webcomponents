import yargs from 'yargs';

const macOS = 'OS X';
const windows = 'Windows';

const macOsVersion = 'Catalina';
const windowsVersion = '10';

const chrome = 'chrome';
const firefox = 'firefox';
const edge = 'edge';
const safari = 'safari';
const opera = 'opera';

const osName = () => {
  switch (browserName()) {
    case safari:
      return macOS;
    default:
      return windows;
  }
};

const osVersion = () => {
  switch (osName()) {
    case macOS:
      return macOsVersion;
    default:
      return windowsVersion;
  }
};

const browserName = () => {
  if (process.argv || yargs) {
    if (process.argv.includes(chrome) || yargs.chrome) {
      return chrome;
    }
    if (process.argv.includes(firefox) || yargs.firefox) {
      return firefox;
    }
    if (process.argv.includes(edge) || yargs.edge) {
      return edge;
    }
    if (process.argv.includes(safari) || yargs.safari) {
      return safari;
    }
    if (process.argv.includes(opera) || yargs.opera) {
      return opera;
    }
    console.warn('Geen geldige browser gevonden, default Chrome browser!');
    return chrome;
  }
};

const browserVersion = () => {
  switch (browserName()) {
    case chrome:
      return '85.0';
    case firefox:
      return '83.0';
    case edge:
      return '86.0';
    default:
      'latest';
  }
};

const browserstack = () => process.argv.includes('browserstack') || yargs.browserstack;
const sbRoot = yargs.local ? '' : 'storybook-static/';
const basePort = yargs.local ? '8081' : '8080';

export const config = {
  osName: osName(),
  osVersion: osVersion(),
  browserName: browserName(),
  browserVersion: browserVersion(),
  browserstack: browserstack(),
  gridUrl: 'http://selenium-hub:4444/wd/hub',
  baseUrl: `http://localhost:${basePort}/src/`,
  sbUrl: `http://localhost:8080/${sbRoot}iframe.html`,
};
