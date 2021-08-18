/**
 * @function pageFunctionTemplateTs
 * @description this function is used to generate the page function template ts file.
 * @param {string} pageName - the name of the page.
 * @returns {string} the template ts file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageFunctionTemplateTs = (pageName) => {
  let page = pageName;
  page[0] = page[0].toUpperCase();
  return `// write your ${page} functions here`;
};
