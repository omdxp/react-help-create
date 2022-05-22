const { getCamelCase } = require("../../../utils");

/**
 * @function customActionTemplateJs
 * @description this function returns the custom action template in javascript.
 * @param {string} reducer - name of reducer folder.
 * @param {string} action - name of action folder.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.customActionTemplateJs = (
  reducer,
  action
) => `export const ${getCamelCase(
  action
)}Action = () => async (dispatch, getState) => {
   dispatch({ type: "${reducer.replace(/-/g, "_").toUpperCase()}_${action
  .replace(/-/g, "_")
  .toUpperCase()}", payload: { } })
 }
 `;
