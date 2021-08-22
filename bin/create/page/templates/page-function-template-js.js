/**
 * @function pageFunctionTemplateJs
 * @description this function is used to generate the page function template js file.
 * @param {string} pageName - the name of the page.
 * @returns {string} the template js file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageFunctionTemplateJs = (pageName) => {
  let page = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return `// write your ${page} functions here`;
};
