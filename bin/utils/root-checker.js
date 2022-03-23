const fs = require("file-system");

/**
 * @function rootChecker
 * @description Check if the current directory is the root of a react project.
 * @returns {boolean} true if the current directory is the root of a react project.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.rootChecker = () => {
  return fs.existsSync("package.json") && fs.existsSync("src/");
};
