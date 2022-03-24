const fs = require("file-system");
const { config } = require("../../utils");

/**
 * @function deleteRedux
 * @description this function is used to delete redux implementation that exists.
 * @version 2.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteRedux = () => {
  const { reduxRoot } = config;
  const path = `${reduxRoot}/`;
  try {
    fs.rmdirSync(path);
    console.log(`${path} deleted`);
  } catch (err) {
    console.log(`${path} does not exist`);
  }
};
