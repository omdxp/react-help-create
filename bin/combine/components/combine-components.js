const { fs } = require("file-system");

/**
 * @function combineComponents
 * @description this function is used to combine components in a specific folder.
 * @param {Array} components - array of components to be combined.
 * @param {string} folder - the name or path of folder that combines the components.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.combineComponents = (components, folder) => {
  if (components.length <= 1) {
    console.log("Please provide at least 2 components");
    return;
  }
  let files = [];
  components.forEach((component) => {
    fs.readdirSync(`src/components/`)
      .filter((file) => file.startsWith(component.toLowerCase()))
      .forEach((file) => {
        files.push(file);
      });
  });
  if (files.length < components.length) {
    console.log("Check if these components do exist");
    return;
  }
  const path = `src/components/${folder}`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  } else {
    console.log(`${path} already exist`);
    console.log("Writing new files...");
  }
  files.forEach((file) => {
    const path = `src/components/${folder}/${file}`;
    if (fs.existsSync(path)) {
      console.log(`${path} already exist`);
    } else {
      fs.rename(`src/components/${file}`, path, (err) => {
        if (err) {
          console.log(`Cannot move ${file} component`);
        } else {
          console.log(`${file} component moved to src/components/${folder}/`);
        }
      });
    }
  });
};
