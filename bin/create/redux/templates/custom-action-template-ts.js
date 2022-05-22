const { getCamelCase } = require("../../../utils");

/**
 * @function customActionTemplateTs
 * @description this function returns the custom action template in typescript.
 * @param {string} reducer - name of reducer folder.
 * @param {string} action - name of action folder.
 * @param {boolean} applyReduxThunk - if true, apply redux thunk middleware to action.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.customActionTemplateTs = (reducer, action, applyReduxThunk) => {
  const reducerName = getCamelCase(reducer);
  const actionName = getCamelCase(action);
  const reducerStateName =
    reducerName.charAt(0).toUpperCase() + reducerName.slice(1);
  let str = `import { ${reducerStateName}State } from "../../reducers/${reducer}";
`;
  if (applyReduxThunk) {
    str += `import { ThunkResult } from "../..";
`;
  } else {
    str += `import { Action } from "../..";
`;
  }
  if (applyReduxThunk) {
    str += `
export const ${actionName}Action = (): ThunkResult<${reducerStateName}State> => async (dispatch, getState) => {
  dispatch({ type: "${reducer.replace(/-/g, "_").toUpperCase()}_${action
      .replace(/-/g, "_")
      .toUpperCase()}", payload: { } })
}
`;
  } else {
    str += `
export const ${actionName}Action = (): Action<${reducerStateName}State> => {
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
