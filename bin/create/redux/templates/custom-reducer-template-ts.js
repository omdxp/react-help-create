/**
 * @function customReducerTemplateTs
 * @description this function returns the custom reducer template in typescript.
 * @param {string} reducerName - name of reducer.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.customReducerTemplateTs = (reducerName) => {
  const interfaceStateName =
    reducerName.charAt(0).toUpperCase() + reducerName.slice(1);
  return `import { Action } from "../..";

export interface ${interfaceStateName}State { }

export const ${reducerName} = (
  state: ${interfaceStateName}State = { },
  action: Action<${interfaceStateName}State>,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
`;
};
