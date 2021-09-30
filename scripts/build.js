const fs = require("fs-extra");
const path = require("path");
const sass = require("sass");
const buildConfig = {
  src: "src",
  dist: "lib",
  componentsWithStylesheet: [
    "body",
    "button",
    "grid",
    "icon",
    "introduction",
    "link",
    "side-navigation",
    "titles",
    "image",
    "properties",
  ],
};

const { src, dist, componentsWithStylesheet } = buildConfig;

const handleSass = (directoryToSearch, pattern) => {
  let computedPath;
  let content;
  fs.readdirSync(directoryToSearch).forEach((subDirectory) => {
    const subDirectoryToSearch = path.resolve(directoryToSearch, subDirectory);
    const stat = fs.statSync(subDirectoryToSearch);
    if (stat.isDirectory()) {
      handleSass(subDirectoryToSearch, pattern);
    }
    if (stat.isFile() && subDirectoryToSearch.endsWith(pattern)) {
      const isNative = componentsWithStylesheet.includes(
        directoryToSearch.split("/").pop()
      );
      const nativePath = `${subDirectoryToSearch
        .replace(`/${src}/`, `/${dist}/`)
        .replace("scss", "css")}`;
      const customPath = `${subDirectoryToSearch.replace(
        `/${src}/`,
        `/${dist}/`
      )}.js`;
      const result = sass
        .renderSync({
          file: subDirectoryToSearch,
          outputStyle: "compressed",
        })
        .css.toString();
      if (isNative) {
        computedPath = path.resolve(__dirname, dist, nativePath);
        content = result;
      } else {
        computedPath = path.resolve(__dirname, dist, customPath);
        content = `const styles = \`${result}\`; export default styles;`;
      }
      const contentWithReplacedFonts = replaceFonts(content);
      fs.outputFile(computedPath, contentWithReplacedFonts);
    }
  });
};

const replaceFonts = (content) => {
  return content
    .replace(
      new RegExp(/(?:\/font\/flanders\/italic\/FlandersArtSans)/gm),
      "https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic"
    )
    .replace(
      new RegExp(/(?:\/font\/flanders\/sans\/FlandersArtSans)/gm),
      "https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans"
    )
    .replace(
      new RegExp(/(?:\/font\/flanders\/serif\/FlandersArtSerif)/gm),
      "https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif"
    )
    .replace(
      new RegExp(/(?:\/font\/iconfont\/vlaanderen-icon.woff)/gm),
      "https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/iconfont/3.12.23/vlaanderen-icon.woff"
    );
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
  fs.readdirSync(src).map((folder) => {
    fs.copySync(`${src}/${folder}`, `${dist}/${folder}`);
  });
  handleSass(src, ".scss");
  removeFolders(dist, "test");
  removeFolders(dist, "config");
  removeFilesWithExtension(dist, ".scss");
  removeFilesWithExtension(dist, ".stories.js");
};

execute();
