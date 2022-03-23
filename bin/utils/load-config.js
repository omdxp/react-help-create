const fs = require("file-system");

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
    return JSON.parse(fs.readFileSync("./rhc.config.json"));
  } catch (e) {
    throw new Error(
      "The configuration file could not be loaded. Please make sure that the file exists and is valid."
    );
  }
};
