const { fs } = require("file-system");
const {
  actionsTemplateJs,
  actionsTemplateTs,
  constantsTemplateJs,
  constantsTemplateTs,
  reducersTemplateJs,
  reducersTemplateTs,
  storeTemplateJs,
  storeTemplateTs,
} = require("../templates");

/**
 * @function createRedux
 * @description this function is used to create a redux implemenation.
 * @param {string} reduxName - the name of the redux implementation.
 * @param {boolean} js - if true, the javascript implementation will be created.
 * @param {boolean} ts - if true, the typescript implementation will be created.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createRedux = (reduxName, js, ts) => {
  const path = `src/${reduxName.toLowerCase()}/`;
  if (fs.existsSync(path)) {
    console.log(`${path} already exist`);
  } else {
    if (ts) {
      fs.writeFile(
        `${path}actions/index.ts`,
        actionsTemplateTs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} action creators`);
          } else {
            console.log(`${path}actions/index.ts created`);
          }
        }
      );
      fs.writeFile(
        `${path}constants/index.ts`,
        constantsTemplateTs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} action types`);
          } else {
            console.log(`${path}constants/index.ts created`);
          }
        }
      );
      fs.writeFile(
        `${path}reducers/index.ts`,
        reducersTemplateTs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} reducers`);
          } else {
            console.log(`${path}reducers/index.ts created`);
          }
        }
      );
      fs.writeFile(
        `${path}store/index.ts`,
        storeTemplateTs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} store`);
          } else {
            console.log(`${path}store/index.ts created`);
          }
        }
      );
    } else {
      fs.writeFile(
        `${path}actions/index.js`,
        actionsTemplateJs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} action creators`);
          } else {
            console.log(`${path}actions/index.js created`);
          }
        }
      );
      fs.writeFile(
        `${path}constants/index.js`,
        constantsTemplateJs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} action types`);
          } else {
            console.log(`${path}constants/index.js created`);
          }
        }
      );
      fs.writeFile(
        `${path}reducers/index.js`,
        reducersTemplateJs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} reducers`);
          } else {
            console.log(`${path}reducers/index.js created`);
          }
        }
      );
      fs.writeFile(
        `${path}store/index.js`,
        storeTemplateJs(reduxName),
        (err) => {
          if (err) {
            console.log(`Unable to create ${reduxName} store`);
          } else {
            console.log(`${path}store/index.js created`);
          }
        }
      );
    }
  }
};
