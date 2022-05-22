/**
 * @function storeTemplateJs
 * @description this function returns redux default store template in javascript.
 * @param {boolean} applyReduxThunk - if true, apply redux thunk middleware to action.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.storeTemplateJs = (applyReduxThunk) => {
  let str = `import { ${
    applyReduxThunk ? "applyMiddleware, compose, " : ""
  }createStore } from "redux";
`;
  if (applyReduxThunk) {
    str += `import thunk from "redux-thunk";
`;
  }
  str += `
import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(mainReducer${
    applyReduxThunk ? ", compose(applyMiddleware(thunk))" : ""
  });

/**
 * Creates a new redux state each time this function is called, this is used only for unit tests, to ensure that we have fresh state on each individual test
 */
export const createMainStore = () => {
  return createStore(mainReducer${
    applyReduxThunk ? ", compose(applyMiddleware(thunk))" : ""
  });
};
`;
  return str;
};
