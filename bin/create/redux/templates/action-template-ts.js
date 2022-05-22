/**
 * @function actionTemplateTs
 * @description this function returns the default action template in typescript.
 * @param {boolean} applyReduxThunk - if true, apply redux thunk middleware to action.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.actionTemplateTs = (applyReduxThunk) => {
  let str = `import { GeneralState } from "../../reducers/general";
`;
  if (applyReduxThunk) {
    str += `import { ThunkResult } from "../..";
`;
  } else {
    str += `import { Action } from "../..";
  `;
  }

  str += `
// write your general actions here

// this is an example for an action
`;
  if (applyReduxThunk) {
    str += `export const initAction = (): ThunkResult<GeneralState> => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } })
};
`;
  } else {
    str += `export const initAction = (): Action<GeneralState> => {
  return {
    type: "UPDATE_GENERAL",
    payload: { message: "init created!" }
  };
};
`;
  }
  return str;
};
