/**
 * @function actionTemplateJs
 * @description this function returns the default action template in javascript.
 * @param {boolean} applyReduxThunk - if true, apply redux thunk middleware to action.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.actionTemplateJs = (applyReduxThunk) => {
  let str = `// write your general actions here

// this is an example for an action
`;
  if (applyReduxThunk) {
    str += `export const initAction = () => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } })
};
`;
  } else {
    str += `export const initAction = () => {
  return {
    type: "UPDATE_GENERAL",
    payload: { message: "init created!" }
  };
};
`;
  }
  return str;
};
