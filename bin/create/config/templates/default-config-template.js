/**
 * @function defaultConfigTemplate
 * @description this function returns the default config template.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.defaultConfigTemplate = () => {
  return `{
  "withCSS": true,
  "withFunctions": true,
  "withProps": true,
  "defaultExports": true,
  "componentsRoot": "./src/components",
  "pagesRoot": "./src/pages",
  "reduxRoot": "./src/redux",
  "applyReduxThunk": true
}`;
};
