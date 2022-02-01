import yargs from 'yargs';
const argv = yargs(process.argv).argv;

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
  if (argv) {
    if (argv.chrome) {
      return chrome;
    }
    if (argv.firefox) {
      return firefox;
    }
    if (argv.edge) {
      return edge;
    }
    if (argv.safari) {
      return safari;
    }
    if (argv.opera) {
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

const browserstack = () => argv.browserstack;
const sbRoot = argv.local ? '' : 'storybook-static/';
const basePort = argv.local ? '8081' : '8080';

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
