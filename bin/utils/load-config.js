const fs = require("file-system");
const { config } = require("./configs");

/**
 * @function loadConfig
 * @description Loads the configuration json file for rhc.
 * @returns {Object} The configuration object.
 * @throws {Error} If the configuration file cannot be loaded.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.loadConfig = () => {
  try {
    const {
      withCSS,
      withFunctions,
      withProps,
      defaultExports,
      componentsRoot,
      pagesRoot,
      reduxRoot,
      applyReduxThunk,
    } = JSON.parse(fs.readFileSync("./rhc.config.json"));
    config.withCSS = typeof withCSS === "boolean" ? withCSS : true;
    config.withFunctions =
      typeof withFunctions === "boolean" ? withFunctions : true;
    config.withProps = typeof withProps === "boolean" ? withProps : true;
    config.defaultExports =
      typeof defaultExports === "boolean" ? defaultExports : true;
    config.componentsRoot =
      typeof componentsRoot === "string" ? componentsRoot : "./src/components";
    config.pagesRoot =
      typeof pagesRoot === "string" ? pagesRoot : "./src/pages";
    config.reduxRoot =
      typeof reduxRoot === "string" ? reduxRoot : "./src/redux";
    config.applyReduxThunk =
      typeof applyReduxThunk === "boolean" ? applyReduxThunk : true;
  } catch (e) {
    throw new Error(
      "The configuration file could not be loaded. Please make sure that the file exists and is valid."
    );
  }
};
