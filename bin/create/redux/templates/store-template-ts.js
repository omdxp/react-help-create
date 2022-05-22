/**
 * @function storeTemplateTs
 * @description this function returns redux default store template in typescript.
 * @param {boolean} applyReduxThunk - if true, apply redux thunk middleware to store.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.storeTemplateTs = (applyReduxThunk) => {
  let str = `import { ${
    applyReduxThunk ? "applyMiddleware, compose, " : ""
  }createStore } from "redux";
`;
  if (applyReduxThunk) {
    str += `import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
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

export type StateInterface = ReturnType<typeof mainStore.getState>;

/**
 * list of action types
 */
export type ActionType = "UPDATE_GENERAL";

export interface Action<T> {
  type: ActionType;
  payload: Partial<T>;
}
`;
  if (applyReduxThunk) {
    str += `export type ThunkResult<A = Record<string, unknown>, E = Record<string, unknown>> = ThunkAction<
  void,
  StateInterface,
  E,
  Action<A>
>;

export type Dispatch<A> = ThunkDispatch<StateInterface, Record<string, unknown>, Action<A>>;

`;
  }
  return str;
};
