/**
 * @function storeTemplateJs
 * @description this function returns redux default store template in javascript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.storeTemplateJs =
  () => `import { applyMiddleware, compose, createStore } from "redux";
import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(mainReducer, compose(applyMiddleware(thunk)));

/**
 * Creates a new redux state each time this function is called, this is used only for unit tests, to ensure that we have fresh state on each individual test
 */
export const createMainStore = () => {
  return createStore(mainReducer, compose(applyMiddleware(thunk)));
};
`;
