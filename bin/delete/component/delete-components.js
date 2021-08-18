const { fs } = require("file-system");

/**
 * @function deleteComponents
 * @description this function is used to delete components that exists.
 * @param {Array} components - array of components that are going to be deleted.
 * @param {string} folder - the folder of the components.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteComponents = (components, folder) => {
  if (components.length === 0 && folder !== "") {
    const path = `src/components/${folder}`;
    try {
      fs.rmdirSync(path);
      console.log(`${path} deleted`);
    } catch (err) {
      console.log(`${path} does not exist`);
    }
    return;
  }
  components.forEach((component) => {
    const path = folder !== "" ? `src/components/` : `src/components/${folder}`;
    if (fs.existsSync(`${path}${component.toLowerCase()}.tsx`)) {
      fs.unlink(`${path}${component.toLowerCase()}.tsx`, (err) => {
        if (err) {
          console.log(`Unable to delete ${component} component`);
        } else {
          console.log(`${path}${component.toLowerCase()}.tsx deleted`);
        }
      });
    } else if (fs.existsSync(`${path}${component.toLowerCase()}.jsx`)) {
      fs.unlink(`${path}${component.toLowerCase()}.jsx`, (err) => {
        if (err) {
          console.log(`Unable to delete ${component} component`);
        } else {
          console.log(`${path}${component.toLowerCase()}.jsx deleted`);
        }
      });
    } else {
      console.log(`component ${component} does not exist`);
    }
  });
};
