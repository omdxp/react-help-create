/**
 * @function pageFunctionTemplateTs
 * @description this function is used to generate the page function template ts file.
 * @param {string} pageName - the name of the page.
 * @returns {string} the template ts file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageFunctionTemplateTs = (pageName) => {
  return `// write your ${pageName} functions here
export {};`;
};
