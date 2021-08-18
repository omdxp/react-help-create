/**
 * @function actionsTemplateTs
 * @description this function is used to generate the redux actions template implementation in ts.
 * @param {string} reduxName - the name of the redux folder.
 * @returns {string} the ts implementation template.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.actionsTemplateTs = (reduxName) => {
  let redux = reduxName.toLowerCase();
  return `// write your ${redux} action creators here
export {};  
`;
};
