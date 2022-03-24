const { rootChecker } = require("./root-checker");
const { languageChecker } = require("./language-checker");
const { loadConfig } = require("./load-config");
const {
  withCSS,
  withFunctions,
  defaultExports,
  componentsRoot,
  pagesRoot,
  reduxRoot,
  setWithCSS,
  setWithFunctions,
  setDefaultExports,
  setComponentsRoot,
  setPagesRoot,
  setReduxRoot,
} = require("./configs");

exports.rootChecker = rootChecker;
exports.languageChecker = languageChecker;
exports.loadConfig = loadConfig;
exports.withCSS = withCSS;
exports.withFunctions = withFunctions;
exports.defaultExports = defaultExports;
exports.componentsRoot = componentsRoot;
exports.pagesRoot = pagesRoot;
exports.reduxRoot = reduxRoot;
exports.setWithCSS = setWithCSS;
exports.setWithFunctions = setWithFunctions;
exports.setDefaultExports = setDefaultExports;
exports.setComponentsRoot = setComponentsRoot;
exports.setPagesRoot = setPagesRoot;
exports.setReduxRoot = setReduxRoot;
