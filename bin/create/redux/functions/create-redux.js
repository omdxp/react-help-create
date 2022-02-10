const fs = require("file-system");
const {
  actionsTemplateJs,
  actionsTemplateTs,
  constantsTemplateJs,
  constantsTemplateTs,
  reducersTemplateJs,
  reducersTemplateTs,
  storeTemplateJs,
  storeTemplateTs,
  reducerTemplateTs,
  mainReducerTemplate,
  actionTemplateTs,
  reducerTemplateJs,
  actionTemplateJs,
} = require("../templates");

/**
 * @function createRedux
 * @description this function is used to create a redux implemenation.
 * @param {boolean} js - if true, the javascript implementation will be created.
 * @param {boolean} ts - if true, the typescript implementation will be created.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createRedux = (js, ts) => {
  const path = `src/redux/`;
  if (fs.existsSync(path)) {
    console.log(`${path} already exist`);
  } else {
    if (ts) {
      fs.writeFile(`${path}index.ts`, storeTemplateTs(), (err) => {
        if (err) {
          console.log("Unable to create redux store");
        } else {
          console.log(`${path}index.ts created`);
        }
      });
      fs.writeFile(
        `${path}reducers/general/index.ts`,
        reducerTemplateTs(),
        (err) => {
          if (err) {
            console.log("Unable to create redux general reducer");
          } else {
            console.log(`${path}reducers/general/index.ts created`);
          }
        }
      );
      fs.writeFile(`${path}reducers/index.ts`, mainReducerTemplate(), (err) => {
        if (err) {
          console.log("Unable to create redux main reducer");
        } else {
          console.log(`${path}reducers/index.ts created`);
        }
      });
      fs.writeFile(
        `${path}actions/general/index.ts`,
        actionTemplateTs(),
        (err) => {
          if (err) {
            console.log("Unable to create redux general actions");
          } else {
            console.log(`${path}actions/general/index.ts created`);
          }
        }
      );
    } else {
      fs.writeFile(`${path}index.js`, storeTemplateJs(), (err) => {
        if (err) {
          console.log("Unable to create redux store");
        } else {
          console.log(`${path}index.js created`);
        }
      });
      fs.writeFile(
        `${path}reducers/general/index.js`,
        reducerTemplateJs(),
        (err) => {
          if (err) {
            console.log("Unable to create redux general reducer");
          } else {
            console.log(`${path}reducers/general/index.js created`);
          }
        }
      );
      fs.writeFile(`${path}reducers/index.js`, mainReducerTemplate(), (err) => {
        if (err) {
          console.log("Unable to create redux main reducer");
        } else {
          console.log(`${path}reducers/index.js created`);
        }
      });
      fs.writeFile(
        `${path}actions/general/index.js`,
        actionTemplateJs(),
        (err) => {
          if (err) {
            console.log("Unable to create redux general actions");
          } else {
            console.log(`${path}actions/general/index.js created`);
          }
        }
      );
    }
  }
};
