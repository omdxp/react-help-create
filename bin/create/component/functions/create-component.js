const fs = require("file-system");
const {
  componentTemplateJs,
  componentTemplateTs,
  stylesTemplate,
} = require("../templates");
const { config } = require("../../../utils");

/**
 * @function createComponent
 * @description this function is used to create a component.
 * @param {string} componentName - the name of the component.
 * @param {boolean} js - if the component is a javascript component.
 * @param {boolean} ts - if the component is a typescript component.
 * @param {string} folder - the folder of the component.
 * @param {string} template - the template to create the component.
 * @version 1.1.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createComponent = (componentName, js, ts, folder, template) => {
  const { withCSS, withProps, defaultExports, componentsRoot } = config;
  let component =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  if (componentName.includes("-")) {
    component = "";
    let words = componentName.split("-");
    words.forEach((w) => {
      component += w.charAt(0).toUpperCase() + w.slice(1);
    });
  }
  if (ts) {
    const path =
      folder === ""
        ? `${componentsRoot}/${componentName.toLowerCase()}/index.tsx`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/index.tsx`;
    const stylesPath =
      folder === ""
        ? `${componentsRoot}/${componentName.toLowerCase()}/styles.css`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/styles.css`;
    if (fs.existsSync(path)) {
      console.log(`${path} already exist`);
    } else {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.split(".")[0] === template)[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(path, file, (err) => {
            if (err) {
              console.log(err);
              console.log(`Unable to create ${component} component`);
            } else {
              console.log(`${path} created`);
            }
          });
          withCSS &&
            fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
              if (err) {
                console.log(`Unable to create ${component} component styles`);
              } else {
                console.log(`${stylesPath} created`);
              }
            });
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          path,
          componentTemplateTs(component, withCSS, defaultExports, withProps),
          (err) => {
            if (err) {
              console.log(err);
              console.log(`Unable to create ${component} component`);
            } else {
              console.log(`${path} created`);
            }
          }
        );
        withCSS &&
          fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
            if (err) {
              console.log(`Unable to create ${component} component styles`);
            } else {
              console.log(`${stylesPath} created`);
            }
          });
      }
    }
  } else {
    const path =
      folder === ""
        ? `${componentsRoot}/${componentName.toLowerCase()}/index.jsx`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/index.jsx`;
    const stylesPath =
      folder === ""
        ? `${componentsRoot}/${componentName.toLowerCase()}/styles.css`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/styles.css`;
    if (fs.existsSync(path)) {
      console.log(`${path} already exist`);
    } else {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.split(".")[0] === template)[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(path, file, (err) => {
            if (err) {
              console.log(err);
              console.log(`Unable to create ${component} component`);
            } else {
              console.log(`${path} created`);
            }
          });
          withCSS &&
            fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
              if (err) {
                console.log(`Unable to create ${component} component styles`);
              } else {
                console.log(`${stylesPath} created`);
              }
            });
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          path,
          componentTemplateJs(component, withCSS, defaultExports),
          (err) => {
            if (err) {
              console.log(`Unable to create ${component} component`);
            } else {
              console.log(`${path} created`);
            }
          }
        );
        withCSS &&
          fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
            if (err) {
              console.log(`Unable to create ${component} component styles`);
            } else {
              console.log(`${stylesPath} created`);
            }
          });
      }
    }
  }
};
