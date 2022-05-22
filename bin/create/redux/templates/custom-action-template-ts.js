const { getCamelCase } = require("../../../utils");

/**
 * @function customActionTemplateTs
 * @description this function returns the custom action template in typescript.
 * @param {string} reducer - name of reducer folder.
 * @param {string} action - name of action folder.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.customActionTemplateTs = (reducer, action) => {
  const reducerName = getCamelCase(reducer);
  const actionName = getCamelCase(action);
  const reducerStateName =
    reducerName.charAt(0).toUpperCase() + reducerName.slice(1);
  return `import { ${reducerStateName}State } from "../../reducers/${reducer}";
 import { ThunkResult } from "../..";
 export const ${actionName}Action = (): ThunkResult<${reducerStateName}State> => async (dispatch, getState) => {
   dispatch({ type: "${reducer.replace(/-/g, "_").toUpperCase()}_${action
    .replace(/-/g, "_")
    .toUpperCase()}", payload: { } })
 }
 `;
};
