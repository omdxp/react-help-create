/**
 * @function reducerTemplateJs
 * @description this function returns the default reducer template in javascript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.reducerTemplateJs = () => `const initialState = { message: "" };

export const general = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
`;
