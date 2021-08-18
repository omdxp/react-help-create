/**
 * @function reducersTemplateTs
 * @description this function is used to generate the redux reducers template implementation in ts.
 * @param {string} reduxName - the name of the redux folder.
 * @returns {string} the ts implementation template.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.reducersTemplateTs = (reduxName) => {
  let redux = reduxName.toLowerCase();
  return `// write your ${redux} reducers here
export {};
`;
};
