import path from 'path';
import fs from 'fs-extra';
import sass from 'sass';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const buildConfig = {
  src: 'src',
  dist: 'lib',
  componentsWithStylesheet: [
    'action-group',
    'body',
    'data-table',
    'doormat',
    'form',
    'form-grid',
    'grid',
    'icon',
    'image',
    'input-addon',
    'input-field',
    'input-group',
    'introduction',
    'link',
    'link-list',
    'properties',
    'search-filter',
    'search-results',
    'select',
    'side-navigation',
    'titles',
    'video-player',
  ],
  componentsWithStylesheetAndInlineStyling: ['button', 'pill', 'tooltip', 'toaster'],
};

const { src, dist, componentsWithStylesheet, componentsWithStylesheetAndInlineStyling } = buildConfig;

const createStylesObject = (content) => `const styles = \`${content}\`; export default styles;`;

const replaceFonts = (content) =>
  content
    .replace(
      new RegExp(/(?:\/font\/flanders\/italic\/FlandersArtSans)/gm),
      'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic',
    )
    .replace(
      new RegExp(/(?:\/font\/flanders\/sans\/FlandersArtSans)/gm),
      'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans',
    )
    .replace(
      new RegExp(/(?:\/font\/flanders\/serif\/FlandersArtSerif)/gm),
      'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif',
    )
    .replace(
      new RegExp(/(?:\/font\/iconfont\/vlaanderen-icon.woff)/gm),
      'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/iconfont/3.12.23/vlaanderen-icon.woff',
    );

const generateFiles = (filesToGenerate) => {
  filesToGenerate.forEach(({ pathName, content }) => {
    const contentWithReplacedFonts = replaceFonts(content);
    fs.outputFile(pathName, contentWithReplacedFonts);
  });
};

const handleSass = (directoryToSearch, pattern) => {
  fs.readdirSync(directoryToSearch).forEach((subDirectory) => {
    const subDirectoryToSearch = path.resolve(directoryToSearch, subDirectory);
    const stat = fs.statSync(subDirectoryToSearch);
    if (stat.isDirectory()) {
      handleSass(subDirectoryToSearch, pattern);
    }
    if (stat.isFile() && subDirectoryToSearch.endsWith(pattern)) {
      const folderName = directoryToSearch.split('/').pop();
      const needsStylesheet = componentsWithStylesheet.includes(folderName);
      const needsStylesheetAndInlineStyling = componentsWithStylesheetAndInlineStyling.includes(folderName);
      const nativePath = `${subDirectoryToSearch.replace(`/${src}/`, `/${dist}/`).replace('scss', 'css')}`;
      const customPath = `${subDirectoryToSearch.replace(`/${src}/`, `/${dist}/`)}.js`;
      const result = sass
        .renderSync({
          file: subDirectoryToSearch,
          outputStyle: 'compressed',
        })
        .css.toString();

      if (needsStylesheetAndInlineStyling) {
        generateFiles([
          {
            pathName: path.resolve(__dirname, dist, nativePath),
            content: result,
          },
          {
            pathName: path.resolve(__dirname, dist, customPath),
            content: createStylesObject(result),
          },
        ]);
      } else if (needsStylesheet) {
        generateFiles([
          {
            pathName: path.resolve(__dirname, dist, nativePath),
            content: result,
          },
        ]);
      } else {
        generateFiles([
          {
            pathName: path.resolve(__dirname, dist, customPath),
            content: createStylesObject(result),
          },
        ]);
      }
    }
  });
};

const removeFolders = (directoryToSearch, pattern) => {
  fs.readdirSync(directoryToSearch).forEach((subDirectory) => {
    const subDirectoryToSearch = path.resolve(directoryToSearch, subDirectory);
    const stat = fs.statSync(subDirectoryToSearch);
    if (stat.isDirectory()) {
      if (subDirectoryToSearch.endsWith(pattern)) {
        fs.rmdirSync(subDirectoryToSearch, { recursive: true });
      } else {
        removeFolders(subDirectoryToSearch, pattern);
      }
    }
  });
};

const removeFilesWithExtension = (directoryToSearch, pattern) => {
  fs.readdirSync(directoryToSearch).forEach((subDirectory) => {
    const subDirectoryToSearch = path.resolve(directoryToSearch, subDirectory);
    const stat = fs.statSync(subDirectoryToSearch);
    if (stat.isDirectory()) {
      removeFilesWithExtension(subDirectoryToSearch, pattern);
    }
    if (stat.isFile() && subDirectoryToSearch.endsWith(pattern)) {
      fs.unlinkSync(subDirectoryToSearch);
    }
  });
};

const execute = () => {
  if (fs.existsSync(dist)) {
    fs.rmdirSync(dist, { recursive: true });
  }
  fs.readdirSync(src).forEach((folder) => {
    fs.copySync(`${src}/${folder}`, `${dist}/${folder}`);
  });
  handleSass(src, '.scss');
  removeFolders(dist, 'config');
  removeFilesWithExtension(dist, '.scss');
  removeFilesWithExtension(dist, '.stories.js');
};

execute();
