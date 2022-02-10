/**
 * @function actionTemplateJs
 * @description this function returns the default action template in javascript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.actionTemplateJs = () => `// write your general actions here

// this is an example for an action
export const init = () => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } })
}
`;
