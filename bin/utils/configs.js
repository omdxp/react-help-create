let withCSS = true;
let withFunctions = true;
let defaultExports = true;
let componentsRoot = "components";
let pagesRoot = "pages";
let reduxRoot = "redux";

/**
 * @function setWithCSS
 * @description set the withCSS flag
 * @param {boolean} value the value of the flag.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const setWithCSS = (value) => {
  withCSS = value;
};

/**
 * @function setWithFunctions
 * @description set the withFunctions flag
 * @param {boolean} value the value of the flag.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const setWithFunctions = (value) => {
  withFunctions = value;
};

/**
 * @function setDefaultExports
 * @description set the defaultExports flag
 * @param {boolean} value the value of the flag.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const setDefaultExports = (value) => {
  defaultExports = value;
};

/**
 * @function setComponentsRoot
 * @description set the componentsRoot flag
 * @param {string} value the value of the flag.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const setComponentsRoot = (value) => {
  componentsRoot = value;
};

/**
 * @function setPagesRoot
 * @description set the pagesRoot flag
 * @param {string} value the value of the flag.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const setPagesRoot = (value) => {
  pagesRoot = value;
};

/**
 * @function setReduxRoot
 * @description set the reduxRoot flag
 * @param {string} value the value of the flag.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const setReduxRoot = (value) => {
  reduxRoot = value;
};

exports.withCSS = withCSS;
exports.setWithCSS = setWithCSS;
exports.withFunctions = withFunctions;
exports.setWithFunctions = setWithFunctions;
exports.defaultExports = defaultExports;
exports.setDefaultExports = setDefaultExports;
exports.componentsRoot = componentsRoot;
exports.setComponentsRoot = setComponentsRoot;
exports.pagesRoot = pagesRoot;
exports.setPagesRoot = setPagesRoot;
exports.reduxRoot = reduxRoot;
exports.setReduxRoot = setReduxRoot;
