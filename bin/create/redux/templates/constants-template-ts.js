/**
 * @function constantsTemplateTs
 * @description this function is used to generate the redux constants template implementation in ts.
 * @param {string} reduxName - the name of the redux folder.
 * @returns {string} the ts implementation template.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.constantsTemplateTs = (reduxName) => {
  let redux = reduxName.toLowerCase();
  return `// write your ${redux} action types here
export {};
`;
};
