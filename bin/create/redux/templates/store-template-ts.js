/**
 * @function storeTemplateTs
 * @description this function is used to generate the redux store implementation template in typescript.
 * @param {string} reduxName - the name of the redux.
 * @returns {string} the typescript implementation template.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.storeTemplateTs = (reduxName) => {
  let redux = reduxName.toLowerCase();
  return `import { createStore, combineReducers } from "redux";

// import ${redux} reducers
import {} from "../reducers";

// define app reducers
const appReducers = combineReducers({
    // you need to add your reducers here
});

// export store
export const store = createStore(appReducers);
`;
};
