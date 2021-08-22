const fs = require("file-system");

/**
 * @function deleteRedux
 * @description this function is used to delete redux implementation that exists.
 * @param {string} reduxName - the redux folder name.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteRedux = (reduxName) => {
  const path = `src/${reduxName.toLowerCase()}/`;
  try {
    fs.rmdirSync(path);
    console.log(`${path} deleted`);
  } catch (err) {
    console.log(`${path} does not exist`);
  }
};
