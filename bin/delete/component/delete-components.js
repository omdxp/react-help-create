const fs = require("file-system");

/**
 * @function deleteComponents
 * @description this function is used to delete components that exists.
 * @param {Array} components - array of components that are going to be deleted.
 * @param {string} folder - the folder of the components.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteComponents = (components, folder) => {
  const path = folder === "" ? `src/components/` : `src/components/${folder}/`;
  if (components.length === 0 && folder !== "") {
    try {
      fs.rmdirSync(path);
      console.log(`${path} deleted`);
    } catch (err) {
      console.log(`${path} does not exist`);
    }
    return;
  }
  components.forEach((component) => {
    const _path = `${path}${component}/`;
    try {
      fs.rmdirSync(_path);
      console.log(`${_path} deleted`);
    } catch (err) {
      console.log(`${_path} does not exist`);
    }
  });
};
