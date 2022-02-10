/**
 * @function actionTemplateTs
 * @description this function returns the default action template in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.actionTemplateTs =
  () => `import { GeneralState } from "../../reducers/general";
import { ThunkResult } from "../..";

// write your general actions here

// this is an example for an action
export const init = (): ThunkResult<GeneralState> => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } })
};
`;
