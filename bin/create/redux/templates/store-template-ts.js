/**
 * @function storeTemplateTs
 * @description this function returns redux default store template in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.storeTemplateTs =
  () => `import { applyMiddleware, compose, createStore } from "redux";
import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(mainReducer, compose(applyMiddleware(thunk)));

export type StateInterface = ReturnType<typeof mainStore.getState>;

/**
 * list of action types
 */
export type ActionType = "UPDATE_GENERAL";

export interface Action<T> {
  type: ActionType;
  payload: Partial<T>;
}

export type ThunkResult<A = Record<string, unknown>, E = Record<string, unknown>> = ThunkAction<
  void,
  StateInterface,
  E,
  Action<A>
>;

export type Dispatch<A> = ThunkDispatch<StateInterface, Record<string, unknown>, Action<A>>;

`;
