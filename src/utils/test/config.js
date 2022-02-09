import yargs from 'yargs';

const { argv } = yargs(process.argv);

const operatingSystems = {
  mac: { name: 'OS X', version: 'Catalina' },
  windows: { name: 'Windows', version: '10' },
};

const browsers = [
  { name: 'chrome', isActive: argv.chrome, version: '85.0', os: operatingSystems.windows },
  { name: 'firefox', isActive: argv.firefox, version: '83.0', os: operatingSystems.windows },
  { name: 'edge', isActive: argv.edge, version: '86.0', os: operatingSystems.windows },
  { name: 'safari', isActive: argv.safari, version: 'latest', os: operatingSystems.mac },
  { name: 'opera', isActive: argv.opera, version: 'latest', os: operatingSystems.windows },
];

const activeBrowser =
  browsers.find((browser) => browser.isActive) || browsers.find((browser) => browser.name === 'chrome');

const sbRoot = argv.local ? '' : 'storybook-static/';
const basePort = argv.local ? '8081' : '8080';

export const config = {
  osName: activeBrowser.os.name,
  osVersion: activeBrowser.os.version,
  browserName: activeBrowser.name,
  browserVersion: activeBrowser.version,
  browserstack: argv.browserstack,
  gridUrl: 'http://selenium-hub:4444/wd/hub',
  baseUrl: `http://localhost:${basePort}/src/`,
  sbUrl: `http://localhost:8080/${sbRoot}iframe.html`,
};
