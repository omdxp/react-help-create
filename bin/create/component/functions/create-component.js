const fs = require("file-system");
const { componentTemplateJs, componentTemplateTs } = require("../templates");

/**
 * @function createComponent
 * @description this function is used to create a component.
 * @param {string} componentName - the name of the component.
 * @param {boolean} js - if the component is a javascript component.
 * @param {boolean} ts - if the component is a typescript component.
 * @param {string} folder - the folder of the component.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createComponent = (componentName, js, ts, folder) => {
  if (ts) {
    const path =
      folder === ""
        ? `src/components/${componentName.toLowerCase()}.tsx`
        : `src/components/${folder}/${componentName.toLowerCase()}.tsx`;
    if (fs.existsSync(path)) {
      console.log(`${path} already exist`);
    } else {
      fs.writeFile(path, componentTemplateTs(componentName), (err) => {
        if (err) {
          console.log(err);
          console.log(`Unable to create ${componentName} component`);
        } else {
          console.log(`${path} created`);
        }
      });
    }
  } else {
    const path =
      folder === ""
        ? `src/components/${componentName.toLowerCase()}.jsx`
        : `src/components/${folder}/${componentName.toLowerCase()}.jsx`;
    if (fs.existsSync(path)) {
      console.log(`${path} already exist`);
    } else {
      fs.writeFile(path, componentTemplateJs(componentName), (err) => {
        if (err) {
          console.log(`Unable to create ${componentName} component`);
        } else {
          console.log(`${path} created`);
        }
      });
    }
  }
};
