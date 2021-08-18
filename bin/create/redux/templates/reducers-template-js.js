/**
 * @function reducersTemplateJs
 * @description this function is used to generate the redux reducers template implementation in js.
 * @param {string} reduxName - the name of the redux folder.
 * @returns {string} the js implementation template.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.reducersTemplateJs = (reduxName) => {
  let redux = reduxName.toLowerCase();
  return `// write your ${redux} reducers here
`;
};
