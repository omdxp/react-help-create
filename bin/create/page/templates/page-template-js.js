/**
 * @function pageTemplateJs
 * @description this function is used to generate the page template in javascript.
 * @param {string} pageName - the page name.
 * @param {boolean} withCSS - if the page has css.
 * @param {boolean} defaultExports - if the page is a default export.
 * @returns {string} the page template in javascript.
 * @version 1.1.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageTemplateJs = (pageName, withCSS, defaultExports) => {
  let str = "";
  if (withCSS) {
    str += `import "./styles.css";
`;
  }
  if (defaultExports) {
    str += `
const ${pageName} = () => {
    return <div>${pageName} page created!</div>;
};
export default ${pageName};
`;
  } else {
    str += `
export const ${pageName} = () => {
    return <div>${pageName} page created!</div>;
};
`;
  }
  return str;
};
