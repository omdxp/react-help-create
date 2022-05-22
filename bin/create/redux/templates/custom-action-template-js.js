const { getCamelCase } = require("../../../utils");

/**
 * @function customActionTemplateJs
 * @description this function returns the custom action template in javascript.
 * @param {string} reducer - name of reducer folder.
 * @param {string} action - name of action folder.$
 * @param {boolean} applyReduxThunk - if true, apply redux thunk middleware to action.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.customActionTemplateJs = (reducer, action, applyReduxThunk) => {
  let str = "";
  if (applyReduxThunk) {
    str += `export const ${getCamelCase(
      action
    )}Action = () => async (dispatch, getState) => {
  dispatch({ type: "${reducer.replace(/-/g, "_").toUpperCase()}_${action
      .replace(/-/g, "_")
      .toUpperCase()}", payload: { } })
}
`;
  } else {
    str += `export const ${getCamelCase(action)}Action = () => {
  return {
    type: "${reducer.replace(/-/g, "_").toUpperCase()}_${action
      .replace(/-/g, "_")
      .toUpperCase()}",
    payload: { }
  };
}
`;
  }
  return str;
};
