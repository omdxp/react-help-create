const fs = require("file-system");

/**
 * @function combineComponents
 * @description this function is used to combine components in a specific folder.
 * @param {Array} components - array of components to be combined.
 * @param {string} folder - the name or path of folder that combines the components.
 * @version 2.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.combineComponents = (components, folder) => {
  if (components.length <= 1) {
    console.log("Please provide at least 2 components");
    return;
  }
  const path = "src/components/";
  const _path = `${path}${folder}/`;
  let folders = [];
  components.forEach((component) => {
    fs.readdirSync(path)
      .filter((f) => f === component)
      .forEach((f) => folders.push(f));
  });
  if (folders.length < components.length) {
    console.log("Check if all of these components exist");
    return;
  }
  if (!fs.existsSync(_path)) {
    fs.mkdirSync(_path);
  } else {
    console.log(`${_path} already exist`);
    console.log("Writing new files...");
  }
  folders.forEach((f) => {
    if (fs.existsSync(`${_path}${f}/`)) {
      console.log(`${_path}${f}/ already exist`);
    } else {
      fs.rename(`${path}${f}/`, `${_path}${f}`, (err) => {
        if (err) {
          console.log(`Cannot move ${f} component`);
        } else {
          console.log(`${f} component moved to ${_path}`);
        }
      });
    }
  });
};
