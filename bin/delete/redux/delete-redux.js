const fs = require("file-system");

/**
 * @function deleteRedux
 * @description this function is used to delete redux implementation that exists.
 * @version 2.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteRedux = () => {
  const path = `src/redux/`;
  try {
    fs.rmdirSync(path);
    console.log(`${path} deleted`);
  } catch (err) {
    console.log(`${path} does not exist`);
  }
};
