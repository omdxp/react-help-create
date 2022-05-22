const fs = require("file-system");
const { config, getCamelCase } = require("../../../utils");
const {
  customReducerTemplateTs,
  customReducerTemplateJs,
} = require("../templates");
/**
 * @function createReducer
 * @description this function is used to create reducer file.
 * @param {string} reducerName - name of reducer.
 * @param {boolean} js - write file in javascript.
 * @param {boolean} ts - write file in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createReducer = (reducerName, js, ts) => {
  const { reduxRoot } = config;
  if (!fs.existsSync(reduxRoot)) {
    console.log("Redux implementation does not exist");
    return;
  }
  const path = `${reduxRoot}/reducers/${reducerName}/`;
  let reducer = getCamelCase(reducerName);
  if (fs.existsSync(path)) {
    console.log(`${reducerName} reducer already exists`);
  } else {
    if (ts) {
      if (!fs.fs.existsSync(path)) {
        fs.fs.mkdirSync(path);
      }
      fs.fs.writeFileSync(`${path}index.ts`, customReducerTemplateTs(reducer), {
        encoding: "utf8",
        flag: "w",
      });
      // update index.js that imports reducer and exports combineReducers
      const data = fs.fs.readFileSync(`${reduxRoot}/reducers/index.ts`, {
        encoding: "utf8",
        flag: "r",
      });
      if (
        new RegExp(
          `import[. \t]*{[. \t]*${reducer}[. \t]*}[. \t]*from[. \t]*['"\`]./${reducerName}['"\`]`
        ).test(data)
      ) {
        return;
      }
      let result = data.replace(
        /import { combineReducers } from "redux";/g,
        `import { combineReducers } from "redux";\nimport { ${reducer} } from "./${reducerName}";`
      );
      // update combineReducers in indx.js
      result = result.replace(
        /combineReducers\({/g,
        `combineReducers({\n  ${reducer},`
      );
      fs.writeFile(`${reduxRoot}/reducers/index.ts`, result, "utf8", (err) => {
        if (err) {
          console.log("Unable to update index.js");
        }
        console.log("index.ts updated");
      });
      console.log(`${reducerName} reducer created`);
    } else {
      if (!fs.fs.existsSync(path)) {
        fs.fs.mkdirSync(path);
      }
      fs.fs.writeFileSync(`${path}index.js`, customReducerTemplateJs(reducer), {
        encoding: "utf8",
        flag: "w",
      });
      // update index.js that imports reducer and exports combineReducers
      const data = fs.fs.readFileSync(`${reduxRoot}/reducers/index.js`, {
        encoding: "utf8",
        flag: "r",
      });
      if (
        new RegExp(
          `import[. \t]*{[. \t]*${reducer}[. \t]*}[. \t]*from[. \t]*['"\`]./${reducerName}['"\`]`
        ).test(data)
      ) {
        console.log("here");
        return;
      }
      let result = data.replace(
        /import { combineReducers } from "redux";/g,
        `import { combineReducers } from "redux";\nimport { ${reducer} } from "./${reducerName}";`
      );
      // update combineReducers in indx.js
      result = result.replace(
        /combineReducers\({/g,
        `combineReducers({\n  ${reducer},`
      );
      fs.writeFile(`${reduxRoot}/reducers/index.js`, result, "utf8", (err) => {
        if (err) {
          console.log("Unable to update index.js");
        }
        console.log("index.js updated");
      });
      console.log(`${reducerName} reducer created`);
    }
  }
};
